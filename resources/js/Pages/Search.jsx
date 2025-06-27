import ModifyUserFormSearch from '@/Components/Views/ModifyUserFormSearch';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import OALHeaderLayout from '@/Layouts/SearchHeader';
import {
    carnetOptions,
    discaOptions,
    disponibilidadOptions,
    edadOptions,
    estudiosOptions,
    localidadOptions,
    ocupacionOptions,
    programaOptions,
    sexoOptions,
    specialtyOptions,
    vehiculoOptions,
} from '@/Utils/optionsData';
import { Head, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import PDFGenerator from '@/Components/Views/PDFGenerator.jsx';

export default function Search() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const admins = usePage().props.users;

    const usersOptions = [];
    admins.forEach((admin) => {
        usersOptions.push({ value: admin.name, label: admin.name });
    });

    const [search, setSearch] = useState(false);
    const [contadorUsuarios, setContadorUsuarios] = useState(0);
    const [usuariosOAL, setUsuariosOAL] = useState([]);
    const [usuariosPDF, setUsuariosPDF] = useState([]);
    const [edadRange, setEdadRange] = useState(false);

    const actualYear = new Date().getFullYear();

    const formatoFechaSimple = (fechaISO) => {
        const [anio, mes, dia] = fechaISO.split('-');
        return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${anio}`;
    };

    return (
        <>
            <AuthenticatedLayout>
                <Head title="Buscador" />
                <OALHeaderLayout />

                <div className="container" id="searchUsuarios">
                    <Form
                        className="border-bottom pb-4"
                        onSubmit={handleSubmit((data) => {
                            let carnetArray = [];
                            let specialtyArray = [];
                            let ocupacionArray = [];
                            if (data.ocupacion) {
                                for (const element of data.ocupacion) {
                                    ocupacionArray.push(element.value);
                                }
                            }
                            if (data.especialidad) {
                                for (const element of data.especialidad) {
                                    specialtyArray.push(element.value);
                                }
                            }

                            if (data.carnet) {
                                for (const element of data.carnet) {
                                    carnetArray.push(element.value);
                                }
                            }
                            let necesidadesArray = [];
                            if (data.necesidades) {
                                for (const element of data.necesidades) {
                                    necesidadesArray.push(element.value);
                                }
                            }
                            let newData = {
                                nombre: data.nombre ? data.nombre : null,
                                apellidos: data.apellidos
                                    ? data.apellidos
                                    : null,
                                sexo: data.sexo ? data.sexo.value : null,
                                edad: data.edadSelect
                                    ? data.edadSelect.value
                                    : null,
                                telefono: data.telefono ? data.telefono : null,
                                dni: data.dni ? data.dni : null,
                                fecha_activacion: data.fecha_activacion
                                    ? formatoFechaSimple(data.fecha_activacion)
                                    : null,
                                ocupacion: data.ocupacion
                                    ? ocupacionArray
                                    : null,
                                discapacidad: data.discapacidad
                                    ? data.discapacidad.value
                                    : null,
                                nivel_estudios: data.estudios
                                    ? data.estudios.value
                                    : null,
                                especialidad: data.especialidad
                                    ? specialtyArray
                                    : null,
                                formacion_complementaria: data.formacion_comp
                                    ? data.formacion_comp
                                    : null,
                                experiencia_laboral: data.experiencia
                                    ? data.experiencia
                                    : null,
                                programa_oal: data.programa
                                    ? data.programa.value
                                    : null,
                                programa_oal_2: data.programa2
                                    ? data.programa2.value
                                    : null,
                                programa_oal_3: data.programa3
                                    ? data.programa3.value
                                    : null,
                                año_programa_oal: data.yearPrograma
                                    ? data.yearPrograma
                                    : null,
                                año_programa_oal_2: data.yearPrograma2
                                    ? data.yearPrograma2
                                    : null,
                                año_programa_oal_3: data.yearPrograma3
                                    ? data.yearPrograma3
                                    : null,
                                disponibilidad: data.disponibilidad
                                    ? data.disponibilidad.value
                                    : null,
                                carnet: data.carnet ? carnetArray : null,
                                vehiculo: data.vehiculo
                                    ? data.vehiculo.value
                                    : null,
                                localidad: data.localidad
                                    ? data.localidad.value
                                    : null,
                                necesidad_formativa: data.necesidades
                                    ? necesidadesArray
                                    : null,
                                observaciones: data.observaciones
                                    ? data.observaciones
                                    : null,
                                added_by_user: data.addedBy
                                    ? data.addedBy.value
                                    : null,
                            };

                            let edadData = {
                                edadNumero: data.edadNumero,
                                minEdad: data.minEdad,
                                maxEdad: data.maxEdad,
                            };
                            axios
                                .post('/usuario/search', {
                                    newData,
                                    edadData,
                                })
                                .then((response) => {
                                    setContadorUsuarios(response.data.contador);
                                    setUsuariosOAL(response.data.usuarios);
                                    //Recordatorio, usuariosPDF no son los usuarios que tengan PDFs, sino para preparar los usuarios
                                    //encontrados en la búsqueda para exportar a PDF
                                    setUsuariosPDF(response.data.usuariosPDF);
                                    setSearch(true);
                                })
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                        })}
                        noValidate
                    >
                        <div className="d-flex justify-content-evenly">
                            <div className="container mx-5">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formNombre"
                                >
                                    <Form.Label className="fs-4">
                                        Nombre
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register('nombre')}
                                        className="mx-auto"
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.nombre?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formApellidos"
                                >
                                    <Form.Label className="fs-4">
                                        Apellidos
                                    </Form.Label>
                                    <Form.Control
                                        {...register('apellidos')}
                                        type="text"
                                        className="mx-auto"
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.apellidos?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formSexo"
                                >
                                    <Form.Label className="fs-4">
                                        Sexo
                                    </Form.Label>
                                    <Controller
                                        name="sexo"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={sexoOptions}
                                                isClearable={true}
                                                placeholder="Selecciona un sexo"
                                                noOptionsMessage={() =>
                                                    'No se ha encontrado dicha opción'
                                                }
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.sexo?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formEdad"
                                >
                                    <Form.Label className="fs-4">
                                        Edad
                                    </Form.Label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Controller
                                            name="edadSelect"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={edadOptions}
                                                    isClearable={true}
                                                    placeholder="Selecciona una opción."
                                                    noOptionsMessage={() =>
                                                        'No se ha encontrado dicha opción.'
                                                    }
                                                    onChange={(opcion) => {
                                                        field.onChange(opcion);
                                                        if (
                                                            opcion.value ===
                                                            'entre'
                                                        ) {
                                                            setEdadRange(true);
                                                        } else {
                                                            setEdadRange(false);
                                                        }
                                                    }}
                                                />
                                            )}
                                        />
                                        {edadRange ? (
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <Form.Control
                                                        className="my-1"
                                                        type="number"
                                                        as="input"
                                                        {...register('minEdad')}
                                                        min={0}
                                                    />
                                                    <Form.Control
                                                        className="my-1"
                                                        type="number"
                                                        as="input"
                                                        {...register('maxEdad')}
                                                        min={0}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <Form.Control
                                                    type="number"
                                                    as="input"
                                                    {...register('edadNumero')}
                                                    min={0}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <Form.Text className="text-danger">
                                        {errors.edad?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formTelefono"
                                >
                                    <Form.Label className="fs-4">
                                        Teléfono
                                    </Form.Label>
                                    <Form.Control
                                        {...register('telefono')}
                                        type="text"
                                        className="mx-auto"
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.telefono?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formDni"
                                >
                                    <Form.Label className="fs-4">
                                        DNI/NIE
                                    </Form.Label>
                                    <Form.Control
                                        {...register('dni')}
                                        type="text"
                                        className="mx-auto"
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.dni?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formFechaActivacion"
                                >
                                    <Form.Label className="fs-4">
                                        Fecha de activación
                                    </Form.Label>
                                    <input
                                        {...register('fecha_activacion')}
                                        id="fecha_activacion"
                                        className="form-control"
                                        type="date"
                                        name="fecha_activacion"
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.fecha_activacion?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formOcupacion"
                                >
                                    <Form.Label className="fs-4">
                                        Ocupacion
                                    </Form.Label>
                                    <Controller
                                        name="ocupacion"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={ocupacionOptions}
                                                placeholder="Selecciona una profesión"
                                                noOptionsMessage={() =>
                                                    'No se ha encontrado dicha profesión'
                                                }
                                                isMulti
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.ocupacion?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formDiscapacidad"
                                >
                                    <Form.Label className="fs-4">
                                        Discapacidad
                                    </Form.Label>
                                    <Controller
                                        name="discapacidad"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={discaOptions}
                                                placeholder="Seleccione una opción"
                                                noOptionsMessage={() =>
                                                    'No se ha encontrado dicha opción'
                                                }
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.discapacidad?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formEstudios"
                                >
                                    <Form.Label className="fs-4">
                                        Nivel de estudios
                                    </Form.Label>
                                    <Controller
                                        name="estudios"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={estudiosOptions}
                                                placeholder="Selecciona tu nivel de estudios más alto"
                                                noOptionsMessage={() =>
                                                    'No se ha encontrado dicho estudio'
                                                }
                                            />
                                        )}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formSpecialty"
                                >
                                    <Form.Label className="fs-4">
                                        Especialidad
                                    </Form.Label>
                                    <Controller
                                        name="especialidad"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={specialtyOptions}
                                                placeholder="Selecciona tu especialidad"
                                                noOptionsMessage={() =>
                                                    'No se ha encontrado dicho estudio'
                                                }
                                                isMulti
                                            />
                                        )}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formComplementario"
                                >
                                    <Form.Label className="fs-4">
                                        Formación complementaria
                                    </Form.Label>
                                    <Form.Control
                                        {...register('formacion_comp')}
                                        as="textarea"
                                        placeholder="Añada si tiene alguna formación complementaria"
                                        rows={3}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formExperiencia"
                                >
                                    <Form.Label className="fs-4">
                                        Experiencia laboral
                                    </Form.Label>
                                    <Form.Control
                                        {...register('experiencia')}
                                        as="textarea"
                                        placeholder="Añada si tiene alguna experiencia laboral"
                                        rows={3}
                                    />
                                </Form.Group>
                            </div>
                            <div className="container mx-5">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formPrograma"
                                >
                                    <Form.Label className="fs-4">
                                        Programa
                                    </Form.Label>
                                    <Controller
                                        name="programa"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={programaOptions}
                                                placeholder="Selecciona un programa"
                                                noOptionsMessage={() =>
                                                    'No existe el programa introducido'
                                                }
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.programa?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formAñoPrograma"
                                >
                                    <Form.Label className="fs-4">
                                        Año Programa
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        as="input"
                                        {...register('yearPrograma')}
                                        min={1900}
                                        max={actualYear}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.yearPrograma?.message}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formPrograma2"
                                >
                                    <Form.Label className="fs-4">
                                        Programa 2
                                    </Form.Label>
                                    <Controller
                                        name="programa2"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={programaOptions}
                                                placeholder="Selecciona un programa"
                                                noOptionsMessage={() =>
                                                    'No existe el programa introducido'
                                                }
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.programa2?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formAñoPrograma2"
                                >
                                    <Form.Label className="fs-4">
                                        Año Programa 2
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        as="input"
                                        {...register('yearPrograma2')}
                                        min={1900}
                                        max={actualYear}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.yearPrograma2?.message}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formPrograma3"
                                >
                                    <Form.Label className="fs-4">
                                        Programa 3
                                    </Form.Label>
                                    <Controller
                                        name="programa3"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={programaOptions}
                                                placeholder="Selecciona un programa"
                                                noOptionsMessage={() =>
                                                    'No existe el programa introducido'
                                                }
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.programa3?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formAñoPrograma3"
                                >
                                    <Form.Label className="fs-4">
                                        Año Programa 3
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        as="input"
                                        {...register('yearPrograma3')}
                                        min={1900}
                                        max={actualYear}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.yearPrograma3?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formDispo"
                                >
                                    <Form.Label className="fs-4">
                                        Disponibilidad
                                    </Form.Label>
                                    <Controller
                                        name="disponibilidad"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={disponibilidadOptions}
                                                placeholder="Selecciona su disponibilidad"
                                                noOptionsMessage={() =>
                                                    'No existe el dato introducido'
                                                }
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.disponibilidad?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formCarnet"
                                >
                                    <Form.Label className="fs-4">
                                        Carnet
                                    </Form.Label>
                                    <Controller
                                        name="carnet"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={carnetOptions}
                                                placeholder="Selecciona el carnet que posea"
                                                noOptionsMessage={() =>
                                                    'Se ha introducido un valor erróneo'
                                                }
                                                isMulti
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.carnet &&
                                            'Es necesario indicar el carnet que tenga, aunque no disponga de uno.'}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formVehiculo"
                                >
                                    <Form.Label className="fs-4">
                                        Vehículo
                                    </Form.Label>
                                    <Controller
                                        name="vehiculo"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={vehiculoOptions}
                                                placeholder="¿Cuenta con vehículo propio?"
                                                noOptionsMessage={() =>
                                                    'Se ha introducido un valor erróneo'
                                                }
                                            />
                                        )}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formLocalidad"
                                >
                                    <Form.Label className="fs-4">
                                        Localidad
                                    </Form.Label>
                                    <Controller
                                        name="localidad"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={localidadOptions}
                                                placeholder="Selecciona una localidad"
                                                noOptionsMessage={() =>
                                                    'No se ha encontrado dicho municipio'
                                                }
                                            />
                                        )}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.localidad?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formNecesidades"
                                >
                                    <Form.Label className="fs-4">
                                        Necesidades formativas (opcional)
                                    </Form.Label>
                                    <Controller
                                        name="necesidades"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={ocupacionOptions}
                                                placeholder="Selecciona las profesiones que sean del interes del usuario"
                                                noOptionsMessage={() =>
                                                    'No se encuentra opción parecida'
                                                }
                                                isMulti
                                            />
                                        )}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formObservaciones"
                                >
                                    <Form.Label className="fs-4">
                                        Observaciones
                                    </Form.Label>
                                    <Form.Control
                                        {...register('observaciones')}
                                        as="textarea"
                                        placeholder="Añada aquí sus observaciones"
                                        rows={3}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formVehiculo"
                                >
                                    <Form.Label className="fs-4">
                                        Añadido por
                                    </Form.Label>
                                    <Controller
                                        name="addedBy"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isClearable={true}
                                                options={usersOptions}
                                                placeholder="Quién ha añadido el usuario"
                                                noOptionsMessage={() =>
                                                    'No se encuentran usuarios.'
                                                }
                                            />
                                        )}
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="container my-3">
                            <div className="d-flex justify-content-center">
                                <Button
                                    variant="warning"
                                    size="lg"
                                    type="submit"
                                >
                                    Buscar usuarios
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>

                {search && (
                    <>
                        <PDFGenerator usuarios={usuariosPDF}/>
                        <ModifyUserFormSearch
                            contadorUsuarios={contadorUsuarios}
                            usuariosOAL={usuariosOAL}
                        />
                    </>
                )}
            </AuthenticatedLayout>
        </>
    );
}
