<?php

namespace App\Http\Controllers;

use App\Models\Seguimiento;
use App\Models\UsuarioOAL;
use Illuminate\Http\Request;

class SeguimientoController extends Controller
{
    public function index(UsuarioOAL $usuario)
    {
        $seguimientos = $usuario->seguimientos()
            ->with('tecnico:id,name')
            ->orderByDesc('fecha_seguimiento')
            ->orderByDesc('id')
            ->get();

        return response()->json($seguimientos);
    }

    public function store(Request $request, UsuarioOAL $usuario)
    {
        $validated = $request->validate([
            'fecha_seguimiento' => ['required', 'date_format:Y-m-d'],
            'resumen_seguimiento' => ['required', 'string', 'max:5000'],
        ]);

        $seguimiento = $usuario->seguimientos()->create(array_merge(
            $validated,
            ['tecnico_id' => $request->user()->id]
        ));

        return response()->json($seguimiento->load('tecnico:id,name'), 201);
    }

    public function update(Request $request, UsuarioOAL $usuario, Seguimiento $seguimiento)
    {
        $validated = $request->validate([
            'fecha_seguimiento' => ['required', 'date_format:Y-m-d'],
            'resumen_seguimiento' => ['required', 'string', 'max:5000'],
        ]);

        $seguimiento = $usuario->seguimientos()
            ->findOrFail($seguimiento->id);
        $seguimiento->update($validated);

        return response()->json($seguimiento->load('tecnico:id,name'));
    }

    public function destroy(UsuarioOAL $usuario, Seguimiento $seguimiento)
    {
        $seguimiento = $usuario->seguimientos()
            ->findOrFail($seguimiento->id);
        $seguimiento->delete();

        return response()->noContent();
    }
}
