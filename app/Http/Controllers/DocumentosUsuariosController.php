<?php

namespace App\Http\Controllers;

use App\Models\DocumentosUsuarios;
use App\Models\UsuarioOAL;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreDocumentosUsuariosRequest;
use App\Http\Requests\UpdateDocumentosUsuariosRequest;
use Illuminate\Http\Request;

class DocumentosUsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $usuario = UsuarioOAL::findFullNameByID($request->all()['id']);
        if (isset($request->all()['docs']) && !empty($request->all()['docs'])) {
            $dir = Storage::disk('public')->makeDirectory('documentos/' . $usuario);
            $docs = $request->all()['docs'];
            foreach ($docs as $doc) {
                $documentName = $doc->getClientOriginalName();
                DocumentosUsuarios::create([
                    'titulo_documento' => $documentName,
                    'ruta_documento' => $doc->storeAs('documentos/' . $usuario, $documentName, 'public'),
                    'usuario_id' => $request->all()['id']
                ]);
            }
        }
        // return to_route('dashboard');
    }

    /**
     * Store documents for a newly created user via a plain AJAX request
     * (not an Inertia visit), so the calling page is not reloaded/redirected.
     */
    public function storeAjax(Request $request)
    {
        $usuario = UsuarioOAL::findFullNameByID($request->all()['id']);
        if (isset($request->all()['docs']) && !empty($request->all()['docs'])) {
            $dir = Storage::disk('public')->makeDirectory('documentos/' . $usuario);
            $docs = $request->all()['docs'];
            foreach ($docs as $doc) {
                $documentName = $doc->getClientOriginalName();
                DocumentosUsuarios::create([
                    'titulo_documento' => $documentName,
                    'ruta_documento' => $doc->storeAs('documentos/' . $usuario, $documentName, 'public'),
                    'usuario_id' => $request->all()['id']
                ]);
            }
        }
        return response()->json(['success' => true]);
    }

    public function storeThroughSearch(Request $request)
    {
        $usuario = UsuarioOAL::findFullNameByID($request->all()['id']);
        if (isset($request->all()['docs']) && !empty($request->all()['docs'])) {
            $dir = Storage::disk('public')->makeDirectory('documentos/' . $usuario);
            $docs = $request->all()['docs'];
            foreach ($docs as $doc) {
                $documentName = $doc->getClientOriginalName();
                DocumentosUsuarios::create([
                    'titulo_documento' => $documentName,
                    'ruta_documento' => $doc->storeAs('documentos/' . $usuario, $documentName, 'public'),
                    'usuario_id' => $request->all()['id']
                ]);
            }
        }
        return to_route('search');
    }

    /**
     * Display the specified resource.
     */
    public function show(DocumentosUsuarios $documentosUsuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DocumentosUsuarios $documentosUsuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentosUsuariosRequest $request, DocumentosUsuarios $documentosUsuarios)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $doc = DocumentosUsuarios::findOrFail($id);
            $usuarioId = $doc->usuario_id;
            $usuario = UsuarioOAL::findFullNameByID($usuarioId);
            
            \DB::beginTransaction();
            
            if (Storage::disk('public')->exists($doc->ruta_documento)) {
                Storage::disk('public')->delete($doc->ruta_documento);
            }
            
            $doc->delete();
            
            \DB::commit();

            
            $dirPath = 'documentos/' . $usuario;

            // Comprobación de si el directorio de documentos del usuario está vacío, y eliminarlo si es así
            if (DocumentosUsuarios::where('usuario_id', $usuarioId)->count() === 0) {
                if (Storage::disk('public')->exists($dirPath)) {
                    Storage::disk('public')->deleteDirectory($dirPath);
                }
            }
            return redirect('/dashboard')->with('success', 'Documento eliminado correctamente');
            
        } catch (\Exception $e) {
            \DB::rollBack();
            \Log::error('Error al eliminar documento: ' . $e->getMessage());
            return redirect('/dashboard')->with('error', 'Error al eliminar el documento');
        }
    }

    public function destroyThroughSearch($id)
    {
        try {
            $doc = DocumentosUsuarios::findOrFail($id);
            $usuarioId = $doc->usuario_id;
            $usuario = UsuarioOAL::findFullNameByID($usuarioId);
            \DB::beginTransaction();
            
            if (Storage::disk('public')->exists($doc->ruta_documento)) {
                Storage::disk('public')->delete($doc->ruta_documento);
            }
            
            $doc->delete();
            
            \DB::commit();
            $dirPath = 'documentos/' . $usuario;

            // Comprobación de si el directorio de documentos del usuario está vacío, y eliminarlo si es así
            if (DocumentosUsuarios::where('usuario_id', $usuarioId)->count() === 0) {
                if (Storage::disk('public')->exists($dirPath)) {
                    Storage::disk('public')->deleteDirectory($dirPath);
                }
            }
            return redirect('/search')->with('success', 'Documento eliminado correctamente');
            
        } catch (\Exception $e) {
            \DB::rollBack();
            \Log::error('Error al eliminar documento: ' . $e->getMessage());
            return redirect('/search')->with('error', 'Error al eliminar el documento');
        }
    }

    public static function destroyAllDocsUser($id)
    {
        try {
            
            $usuarioId = $id;
            $usuario = UsuarioOAL::findFullNameByID($usuarioId);
            $docs = DocumentosUsuarios::where('usuario_id', $usuarioId)->get();
            
            foreach ($docs as $doc) {
                if (Storage::disk('public')->exists($doc->ruta_documento)) {
                    Storage::disk('public')->delete($doc->ruta_documento);
                }
                $doc->delete();
            }
            

            $dirPath = 'documentos/' . $usuario;
            if (DocumentosUsuarios::where('usuario_id', $usuarioId)->count() === 0) {
                if (Storage::disk('public')->exists($dirPath)) {
                    Storage::disk('public')->deleteDirectory($dirPath);
                }
            }
        } catch (\Exception $e) {
            \Log::error('Error eliminando documentos: ' . $e->getMessage());
            return false;
        }
    }

    public function getDocsByUser($id)
    {
        $documentos = DocumentosUsuarios::where('usuario_id', $id)->orderBy('created_at', 'desc')->get();
        return response()->json($documentos);
    }
}
