<?php

namespace App\Imports;

use App\Models\UsuarioOAL;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\SkipsFailures;

class UsuarioOALImport implements ToModel, WithChunkReading, WithBatchInserts, SkipsEmptyRows, SkipsOnError, SkipsOnFailure
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    use SkipsErrors, SkipsFailures;

    public function model(array $row)
    {
        
        return new UsuarioOAL([
            'nombre' => $row[1],
            'apellidos' => $row[2],
            'sexo' => $row[3],
            'dni' => $row[4],
            'fecha_activacion' => $row[5],
            'edad' => $row[6],
            'telefono' => $row[7],
            'email' => $row[8],
            'ocupacion' => $row[9],
            'ocupacion2' => $row[10],
            'ocupacion3' => $row[11],
            'discapacidad' => $row[12],
            'nivel_estudios' => $row[13],
            'especialidad' => $row[14],
            'formacion_complementaria' => $row[15],
            'experiencia_laboral' => $row[16],
            'disponibilidad' => $row[17],
            'carnet' => $row[18],
            'vehiculo' => $row[19],
            'localidad' => $row[20],
            'necesidad_formativa' => $row[21],
            'observaciones' => $row[22],
            'added_by_user' => $row[25],
            'programa_oal' => $row[26],
            'año_programa_oal' => $row[27],
            'programa_oal_2' => $row[28],
            'año_programa_oal_2' => $row[29],
            'programa_oal_3' => $row[30],
            'año_programa_oal_3' => $row[31],
            'socialmedia' => $row[32] == null ? 0 : $row[32],
        ]);
    }

    public function batchSize(): int
    {
        return 4000;
    }

    public function chunkSize(): int
    {
        return 4000;
    }

    public function onError(\Throwable $e)
    {
        \Log::error('Error al importar la fila: ' . $e->getMessage());
    }
}
