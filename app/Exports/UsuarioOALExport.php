<?php

namespace App\Exports;

use App\Models\UsuarioOAL;
use Maatwebsite\Excel\Concerns\FromCollection;

class UsuarioOALExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return UsuarioOAL::all();
    }
}
