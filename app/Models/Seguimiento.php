<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seguimiento extends Model
{
    protected $table = 'seguimiento_usuarios';

    protected $fillable = [
        'usuario_id',
        'tecnico_id',
        'fecha_seguimiento',
        'resumen_seguimiento',
    ];

    public function usuarioOAL()
    {
        return $this->belongsTo(UsuarioOAL::class, 'usuario_id');
    }

    public function tecnico()
    {
        return $this->belongsTo(User::class, 'tecnico_id');
    }
}
