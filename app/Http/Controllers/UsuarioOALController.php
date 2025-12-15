<?php

namespace App\Http\Controllers;

use App\Models\UsuarioOAL;
use App\Models\User;
use App\Http\Requests\StoreUsuarioOALRequest;
use App\Http\Requests\UpdateUsuarioOALRequest;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Controllers\DocumentosUsuariosController;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\UsuarioOALImport;
use Inertia\Inertia;
use App\Exports\UsuarioOALExport;

class UsuarioOALController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = UsuarioOAL::orderBy('id', 'desc')->paginate(10);
        $contadorUsuarios = UsuarioOAL::all()->count();
        return inertia("Dashboard", [
            "usuariosOAL" => $usuarios,
            "contadorUsuarios" => $contadorUsuarios
        ]);
    }

    public function search()
    {
        Inertia::share('users', function () {
            return User::all();
        });
        return inertia("Search");
    }

    public function excelIndex()
    {
        return inertia("Excel");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $usuario = UsuarioOAL::create($request->all());

        if (auth()->check()) {
            $usuario->added_by_user = auth()->user()->name;
            $usuario->save();
        }
        return response()->json(['usuario' => $usuario]);

    }

    public function getSocialMedia($id) {
        $socialmedia = \DB::table('usuario_o_a_l_s')->where('id', $id)->value('socialmedia');

        return response()->json(['socialmedia' => $socialmedia]);
    }

    public function getDocente($id) {
        $docente = \DB::table('usuario_o_a_l_s')->where('id', $id)->value('docente');

        return response()->json(['docente' => $docente]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $usuarioOAL = UsuarioOAL::find($id);
        $usuarioOAL->update($request->all());
    }

    public function updateThroughSearch($id, Request $request)
    {
        $usuarioOAL = UsuarioOAL::find($id);
        $usuarioOAL->update($request->all());
        return to_route('search');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuarioOAL = UsuarioOAL::find($id);
        DocumentosUsuariosController::destroyAllDocsUser($usuarioOAL->id);
        $usuarioOAL->delete();
        return to_route('dashboard');
    }

    //Funcion para recoger la edad
    public function getEdad($id) {
        $edad = \DB::table('usuario_o_a_l_s')->where('id', $id)->value('edad');

        return response()->json(['edad' => $edad]);
    }

    public function getFechaActivacion($id) {
        $fecha = \DB::table('usuario_o_a_l_s')->where('id', $id)->value('fecha_activacion');

        return response()->json(['fecha_activacion' => $fecha]);
    }

    public function getSpecialties($id) {
        $specialties = \DB::table('usuario_o_a_l_s')->where('id', $id)->value('especialidad');

        return response()->json(['especialidades' => $specialties]);
    }

    public function getCarnet($id) {
        $carnet = \DB::table('usuario_o_a_l_s')->where('id', $id)->value('carnet');

        return response()->json(['carnet' => $carnet]);
    }

    public function getNecesidadFormativa($id) {
        $necesidad_formativa = \DB::table('usuario_o_a_l_s')->where('id', $id)->value('necesidad_formativa');

        return response()->json(['necesidad_formativa' => $necesidad_formativa]);
    }

    public function checkDNI($dni) {
        $dni = \DB::table('usuario_o_a_l_s')->where('dni', $dni)->value('dni');
        if ($dni) {
            return response()->json(['exists' => true]);
        } else {
            return response()->json(['exists' => false]);
        }
    }

//    public function createPDF(){
//        $usuarios = UsuarioOAL::latest()->get();
//        $pdf = Pdf::loadView('pdf', ['usuarios' => $usuarios, 'fromSearch' => false]);
//        return $pdf->download('usuariosListado.pdf');
//    }

    public function createPDF(Request $request){
        $requestContent = $request->all();
        $usuarios = json_decode($requestContent['usuariosFormatted']);
        $options = $requestContent['data'];
        if (empty($usuarios) || empty(array_filter($options))) {
            return response()->json(['error' => 'No hay datos para generar el PDF'], 400);
        }
        $pdf = Pdf::loadView('pdf', ['usuarios' => $usuarios, 'options' => $options]);
        return $pdf->download('usuariosFiltrados.pdf');
    }

    public function searchUsers(Request $request){
            $search = $request->all()['newData'];
            $edadData = $request->all()['edadData'];
            $usuarios = UsuarioOAL::query();
            if (isset($search['nombre']) && !empty($search['nombre'])) {
                $usuarios->where('nombre', 'like', '%'.$search['nombre'].'%');
            }
            if (isset($search['apellidos']) && !empty($search['apellidos'])) {
                $usuarios->where('apellidos', 'like', '%'.$search['apellidos'].'%');
            }
            if (isset($search['telefono']) && !empty($search['telefono'])) {
                $usuarios->where('telefono', 'like', '%'.$search['telefono'].'%');
            }

            if (isset($search['email']) && !empty($search['email'])) {
                $usuarios->where('email', 'like', '%'.$search['email'].'%');
            }

            if (isset($search['dni']) && !empty($search['dni'])) {
                $usuarios->where('dni', 'like', '%'.$search['dni'].'%');
            }
            if (isset($search['edad']) && !empty($search['edad'])) {
                switch ($search['edad']) {
                    case 'menor':
                        if (isset($edadData['edadNumero']) && is_numeric($edadData['edadNumero'])) {
                            $usuarios->whereRaw("STR_TO_DATE(edad, '%d/%m/%Y') >= DATE_SUB(CURDATE(), INTERVAL ? YEAR)", [(int)$edadData['edadNumero']]);
                        }
                        break;
                    case 'mayor':
                        if (isset($edadData['edadNumero']) && is_numeric($edadData['edadNumero'])) {
                            $usuarios->whereRaw("STR_TO_DATE(edad, '%d/%m/%Y') <= DATE_SUB(CURDATE(), INTERVAL ? YEAR)", [(int)$edadData['edadNumero']]);
                        }
                        break;
                    case 'entre':
                        if (isset($edadData['minEdad'], $edadData['maxEdad']) &&
                            is_numeric($edadData['minEdad']) &&
                            is_numeric($edadData['maxEdad'])) {
                            $usuarios->whereRaw("STR_TO_DATE(edad, '%d/%m/%Y') <= DATE_SUB(CURDATE(), INTERVAL ? YEAR)", [(int)$edadData['minEdad']])
                                   ->whereRaw("STR_TO_DATE(edad, '%d/%m/%Y') >= DATE_SUB(CURDATE(), INTERVAL ? YEAR)", [(int)$edadData['maxEdad']]);
                        }
                        break;
                    default:
                        break;
                }
            }
            if (isset($search['ocupacion']) && !empty($search['ocupacion'])) {
                $usuarios->where(function($query) use ($search) {
                    foreach ($search['ocupacion'] as $key => $value) {
                        $query->orWhere(function($subQuery) use ($value) {
                            $subQuery->where('ocupacion', 'like', '%'.$value.'%')
                                    ->orWhere('ocupacion2', 'like', '%'.$value.'%')
                                    ->orWhere('ocupacion3', 'like', '%'.$value.'%');
                        });
                    }
                });
            }
            if (isset($search['nivel_estudios']) && !empty($search['nivel_estudios'])) {
                $usuarios->where('nivel_estudios', 'like', '%'.$search['nivel_estudios'].'%');
            }
            if (isset($search['especialidad']) && !empty($search['especialidad'])) {
                foreach ($search['especialidad'] as $key => $value) {
                    $usuarios->where('especialidad', 'like', '%'.$value.'%');
                }
            }
            if (isset($search['disponibilidad']) && !empty($search['disponibilidad'])) {
                $usuarios->where('disponibilidad', 'like', '%'.$search['disponibilidad'].'%');
            }
            if (isset($search['carnet']) && !empty($search['carnet'])) {
                foreach ($search['carnet'] as $key => $value) {
                    $usuarios->where('carnet', 'like', '%'.$value.'%');
                }
            }
            if (isset($search['localidad']) && !empty($search['localidad'])) {
                $usuarios->where('localidad', 'like', '%'.$search['localidad'].'%');
            }
            if (isset($search['observaciones']) && !empty($search['observaciones'])) {
                $usuarios->where('observaciones', 'like', '%'.$search['observaciones'].'%');
            }
            if (isset($search['discapacidad']) && !empty($search['discapacidad'])) {
                $usuarios->where('discapacidad', 'like', '%'.$search['discapacidad'].'%');
            }
            if (isset($search['sexo']) && !empty($search['sexo'])) {
                $usuarios->where('sexo', 'like', '%'.$search['sexo'].'%');
            }
            if (isset($search['fecha_activacion']) && !empty($search['fecha_activacion'])) {
                $usuarios->where('fecha_activacion', 'like', '%'.$search['fecha_activacion'].'%');
            }
            if (isset($search['programa_oal']) && !empty($search['programa_oal'])) {
                $usuarios->where('programa_oal', 'like', '%'.$search['programa_oal'].'%');
            }
            if (isset($search['programa_oal_2']) && !empty($search['programa_oal_2'])) {
                $usuarios->where('programa_oal_2', 'like', '%'.$search['programa_oal_2'].'%');
            }
            if (isset($search['programa_oal_3']) && !empty($search['programa_oal_3'])) {
                $usuarios->where('programa_oal_3', 'like', '%'.$search['programa_oal_3'].'%');
            }
            if (isset($search['año_programa_oal']) && !empty($search['año_programa_oal'])) {
                $usuarios->where('año_programa_oal', 'like', '%'.$search['año_programa_oal'].'%');
            }
            if (isset($search['año_programa_oal_2']) && !empty($search['año_programa_oal_2'])) {
                $usuarios->where('año_programa_oal_2', 'like', '%'.$search['año_programa_oal_2'].'%');
            }
            if (isset($search['año_programa_oal_3']) && !empty($search['año_programa_oal_3'])) {
                $usuarios->where('año_programa_oal_3', 'like', '%'.$search['año_programa_oal_3'].'%');
            }
            if (isset($search['vehiculo']) && !empty($search['vehiculo'])) {
                $usuarios->where('vehiculo', 'like', '%'.$search['vehiculo'].'%');
            }
            if (isset($search['added_by_user']) && !empty($search['added_by_user'])) {
                $usuarios->where('added_by_user', 'like', $search['added_by_user']);
            }
            if (isset($search['necesidad_formativa']) && !empty($search['necesidad_formativa'])) {
                foreach ($search['necesidad_formativa'] as $key => $value) {
                    $usuarios->where('necesidad_formativa', 'like', '%'.$value.'%');
                }
            }
            if (isset($search['socialmedia']) && $search['socialmedia'] !== 'Indiferente') {
                $usuarios->where('socialmedia', $search['socialmedia']);
            }
            if (isset($search['docente']) && $search['docente'] !== 'Indiferente') {
                $usuarios->where('docente', $search['docente']);
            }
            if (isset($search['formacion_complementaria']) && !empty($search['formacion_complementaria'])) {
                $usuarios->where('formacion_complementaria', 'like', '%'.$search['formacion_complementaria'].'%');
            }
            if (isset($search['experiencia_laboral']) && !empty($search['experiencia_laboral'])) {
                $usuarios->where('experiencia_laboral', 'like', '%'.$search['experiencia_laboral'].'%');
            }
            $usuarios->orderBy('created_at', 'desc');


            $result = $usuarios->get();
            return response()->json(['usuarios' => $result, 'contador' => $usuarios->count(), 'usuariosPDF' => $result]);
        }

        public function exportExcel() {
            return Excel::download(new UsuarioOALExport, 'usuariosOAL.xlsx');
        }

        public function importExcel(Request $request) {

            $file = $request->file('file')[0];

            Excel::import(new UsuarioOALImport, $file);

            return to_route('dashboard');
        }
}
