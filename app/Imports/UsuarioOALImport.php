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
            'ocupacion' => $row[8],
            'ocupacion2' => $row[9],
            'ocupacion3' => $row[10],
            'discapacidad' => $row[11],
            'nivel_estudios' => $row[12],
            'especialidad' => $row[13],
            'formacion_complementaria' => $row[14],
            'experiencia_laboral' => $row[15],
            'disponibilidad' => $row[16],
            'carnet' => $row[17],
            'vehiculo' => $row[18],
            'localidad' => $row[19],
            'necesidad_formativa' => $row[20],
            'observaciones' => $row[21],
            'added_by_user' => $row[24],
            'programa_oal' => $row[25],
            'año_programa_oal' => $row[26],
            'programa_oal_2' => $row[27],
            'año_programa_oal_2' => $row[28],
            'programa_oal_3' => $row[29],
            'año_programa_oal_3' => $row[30],
            'socialmedia' => $row[31] == null ? 0 : $row[31],
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
