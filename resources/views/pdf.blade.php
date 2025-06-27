<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Document</title> <!-- Added title for the document -->
    </head>
    <body>
        <style>
            @page {
                size: A3 landscape; /* Cambiado a horizontal para mejor distribución */
                margin: 10mm;
            }

            body {
                margin: 0;
                width: 100%;
                font-family: Arial, sans-serif;
            }

            .table-container {
                width: 100%;
                overflow-x: auto;
                padding: 10mm;
            }

            table {

                border-collapse: collapse;
                width: 100%;
                background-color: #fff;
                table-layout: fixed;
                font-size: 8pt;
            }

            th, td {
                border: 0.5pt solid #ddd;
                padding: 2mm;
                text-align: left;
                overflow: visible; /* Cambiado de hidden a visible */
                vertical-align: top; /* Alinea el contenido arriba */
                height: auto; /* Permite que la altura se ajuste al contenido */
                word-wrap: break-word; /* Permite que las palabras se rompan */
                white-space: normal; /* Permite múltiples líneas */
            }
        </style>
        <div>
            <table>
                <thead>
                    <tr>
                        @if(filter_var($options['checkNombre'], FILTER_VALIDATE_BOOLEAN))
                            <th>Nombre</th>
                        @endif
                        @if(filter_var($options['checkApellidos'], FILTER_VALIDATE_BOOLEAN))
                                <th>Apellidos</th>
                        @endif
                        @if(filter_var($options['checkSexo'], FILTER_VALIDATE_BOOLEAN))
                            <th>Sexo</th>
                        @endif
                        @if(filter_var($options['checkEdad'], FILTER_VALIDATE_BOOLEAN))
                            <th>Fecha nacimiento</th>
                        @endif
                        @if(filter_var($options['checkTelefono'], FILTER_VALIDATE_BOOLEAN))
                            <th>Teléfono</th>
                        @endif
                        @if(filter_var($options['checkDNI'], FILTER_VALIDATE_BOOLEAN))
                            <th>DNI/NIE</th>
                        @endif
                        @if(filter_var($options['checkActivationDate'], FILTER_VALIDATE_BOOLEAN))
                            <th>Fecha activación</th>
                        @endif
                            @if(filter_var($options['checkOcupacion'], FILTER_VALIDATE_BOOLEAN))
                                <th>Ocupación 1</th>
                                <th>Ocupación 2</th>
                                <th>Ocupación 3</th>
                            @endif
                            @if(filter_var($options['checkDiscapacidad'], FILTER_VALIDATE_BOOLEAN))
                                <th>Discapacidad</th>
                            @endif
                            @if(filter_var($options['checkEstudios'], FILTER_VALIDATE_BOOLEAN))
                                <th>Nivel estudios</th>
                            @endif
                            @if(filter_var($options['checkEspecialidad'], FILTER_VALIDATE_BOOLEAN))
                                <th>Especialidades</th>
                            @endif
                            @if(filter_var($options['checkComplementaria'], FILTER_VALIDATE_BOOLEAN))
                                <th>Formación complementaria</th>
                            @endif
                            @if(filter_var($options['checkExperiencia'], FILTER_VALIDATE_BOOLEAN))
                                <th>Experiencia laboral</th>
                            @endif
                            @if(filter_var($options['checkProgramas'], FILTER_VALIDATE_BOOLEAN))
                                <th>Programa OAL 1</th>
                                <th>Año Programa 1</th>
                                <th>Programa OAL 2</th>
                                <th>Año Programa 2</th>
                                <th>Programa OAL 3</th>
                                <th>Año Programa 3</th>
                            @endif
                            @if(filter_var($options['checkDispo'], FILTER_VALIDATE_BOOLEAN))
                                <th>Disponibilidad</th>
                            @endif
                            @if(filter_var($options['checkCarnet'], FILTER_VALIDATE_BOOLEAN))
                                <th>Carnet</th>
                            @endif
                            @if(filter_var($options['checkVehiculo'], FILTER_VALIDATE_BOOLEAN))
                                <th>¿Vehículo propio?</th>
                            @endif
                            @if(filter_var($options['checkLocalidad'], FILTER_VALIDATE_BOOLEAN))
                                <th>Localidad</th>
                            @endif
                            @if(filter_var($options['checkNecesidades'], FILTER_VALIDATE_BOOLEAN))
                                <th>Necesidades formativas</th>
                            @endif
                            @if(filter_var($options['checkObservaciones'], FILTER_VALIDATE_BOOLEAN))
                                <th>Observaciones</th>
                            @endif
                    </tr>
                </thead>
                <tbody>
                        @foreach ($usuarios as $usuario)
                        <tr>
                            @if(filter_var($options['checkNombre'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->nombre }}</td>
                            @endif
                            @if(filter_var($options['checkApellidos'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->apellidos }}</td>
                            @endif
                            @if(filter_var($options['checkSexo'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->sexo }}</td>
                            @endif
                            @if(filter_var($options['checkEdad'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->edad }}</td>
                            @endif
                            @if(filter_var($options['checkTelefono'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->telefono }}</td>
                            @endif
                            @if(filter_var($options['checkDNI'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->dni }}</td>
                            @endif
                            @if(filter_var($options['checkActivationDate'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->fecha_activacion }}</td>
                            @endif
                            @if(filter_var($options['checkOcupacion'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->ocupacion }}</td>
                                <td>{{ $usuario->ocupacion2 }}</td>
                                <td>{{ $usuario->ocupacion3 }}</td>
                            @endif
                            @if(filter_var($options['checkDiscapacidad'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->discapacidad }}</td>
                            @endif
                            @if(filter_var($options['checkEstudios'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->nivel_estudios }}</td>
                            @endif
                            @if(filter_var($options['checkEspecialidad'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->especialidad}}</td>
                            @endif
                            @if(filter_var($options['checkComplementaria'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->formacion_complementaria }}</td>
                            @endif
                            @if(filter_var($options['checkExperiencia'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->experiencia_laboral }}</td>
                            @endif
                            @if(filter_var($options['checkProgramas'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->programa_oal }}</td>
                                <td>{{ $usuario->año_programa_oal }}</td>
                                <td>{{ $usuario->programa_oal_2 }}</td>
                                <td>{{ $usuario->año_programa_oal_2 }}</td>
                                <td>{{ $usuario->programa_oal_3 }}</td>
                                <td>{{ $usuario->año_programa_oal_3 }}</td>
                            @endif
                            @if(filter_var($options['checkDispo'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->disponibilidad }}</td>
                            @endif
                            @if(filter_var($options['checkCarnet'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->carnet }}</td>
                            @endif
                            @if(filter_var($options['checkVehiculo'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->vehiculo }}</td>
                            @endif
                            @if(filter_var($options['checkLocalidad'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->localidad }}</td>
                            @endif
                            @if(filter_var($options['checkNecesidades'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->necesidad_formativa }}</td>
                            @endif
                            @if(filter_var($options['checkObservaciones'], FILTER_VALIDATE_BOOLEAN))
                                <td>{{ $usuario->observaciones }}</td>
                            @endif
                        </tr>
                        @endforeach
                </tbody>
            </table>
        </div>
    </body>
</html>
