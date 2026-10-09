<?php

use App\Models\Seguimiento;
use App\Models\User;
use App\Models\UsuarioOAL;

it('allows authenticated technicians to create, list, update and delete follow-ups', function () {
    $tecnico = User::factory()->create(['name' => 'Técnico de prueba']);
    $usuario = UsuarioOAL::create([
        'nombre' => 'Usuario',
        'apellidos' => 'Prueba',
        'dni' => '12345678A',
        'edad' => '01/01/2000',
        'telefono' => '123456789',
        'ocupacion' => 'Prueba',
        'ocupacion2' => 'Prueba',
        'ocupacion3' => 'Prueba',
        'disponibilidad' => 'Prueba',
        'carnet' => 'Prueba',
        'localidad' => 'Prueba',
        'observaciones' => 'Prueba',
        'socialmedia' => false,
        'docente' => false,
    ]);
    $url = "/usuario_oal/{$usuario->id}/seguimientos";

    $this->actingAs($tecnico)
        ->postJson($url, [
            'fecha_seguimiento' => '2026-10-09',
            'resumen_seguimiento' => 'Primer contacto',
        ])
        ->assertCreated()
        ->assertJsonPath('tecnico.name', 'Técnico de prueba');

    $seguimiento = Seguimiento::firstOrFail();

    $this->getJson($url)
        ->assertOk()
        ->assertJsonPath('0.tecnico.name', 'Técnico de prueba');

    $this->putJson("{$url}/{$seguimiento->id}", [
        'fecha_seguimiento' => '2026-10-10',
        'resumen_seguimiento' => 'Contacto actualizado',
    ])
        ->assertOk()
        ->assertJsonPath('resumen_seguimiento', 'Contacto actualizado')
        ->assertJsonPath('tecnico.name', 'Técnico de prueba');

    $this->deleteJson("{$url}/{$seguimiento->id}")
        ->assertNoContent();

    $this->assertDatabaseMissing('seguimiento_usuarios', [
        'id' => $seguimiento->id,
    ]);
});

it('does not allow changing or deleting a follow-up through another user', function () {
    $tecnico = User::factory()->create();
    $datosUsuario = [
        'nombre' => 'Usuario',
        'apellidos' => 'Prueba',
        'dni' => '12345678A',
        'edad' => '01/01/2000',
        'telefono' => '123456789',
        'ocupacion' => 'Prueba',
        'ocupacion2' => 'Prueba',
        'ocupacion3' => 'Prueba',
        'disponibilidad' => 'Prueba',
        'carnet' => 'Prueba',
        'localidad' => 'Prueba',
        'observaciones' => 'Prueba',
        'socialmedia' => false,
        'docente' => false,
    ];
    $usuario = UsuarioOAL::create($datosUsuario);
    $otroUsuario = UsuarioOAL::create(array_merge($datosUsuario, [
        'dni' => '87654321B',
    ]));
    $seguimiento = Seguimiento::create([
        'usuario_id' => $usuario->id,
        'tecnico_id' => $tecnico->id,
        'fecha_seguimiento' => '2026-10-09',
        'resumen_seguimiento' => 'Seguimiento existente',
    ]);

    $this->actingAs($tecnico)
        ->putJson("/usuario_oal/{$otroUsuario->id}/seguimientos/{$seguimiento->id}", [
            'fecha_seguimiento' => '2026-10-10',
            'resumen_seguimiento' => 'Intento de modificación',
        ])
        ->assertNotFound();

    $this->deleteJson("/usuario_oal/{$otroUsuario->id}/seguimientos/{$seguimiento->id}")
        ->assertNotFound();

    $this->assertDatabaseHas('seguimiento_usuarios', [
        'id' => $seguimiento->id,
        'resumen_seguimiento' => 'Seguimiento existente',
    ]);
});
