import {
    carnetOptions,
    discaOptions,
    disponibilidadOptions,
    estudiosOptions,
    localidadOptions,
    ocupacionOptions,
    programaOptions,
    sexoOptions,
    specialtyOptions,
    vehiculoOptions,
} from '@/Utils/optionsData';
import { router } from '@inertiajs/react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

export default function CreateUserForm() {
    //Función para convertir YYYY-MM-DD a DD/MM/YYYY
    const formatoFechaSimple = (fechaISO) => {
        const [anio, mes, dia] = fechaISO.split('-');
        return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${anio}`;
    };

    const { register, handleSubmit, control, formState } = useForm();

    // const { register: registerImport, handleSubmit: handleSubmitImport } =
    //     useForm();

    const { errors } = formState;

    const actualYear = new Date().getFullYear();

    const regExpTlf = new RegExp(/^\d{9}$/);
    const regExpDNI = new RegExp(/\d{8}[A-Z]|[A-Z]\d{8}|[A-Z]\d{7}[A-Z]/);

    return (
        <>
            <div className="container mt-4" id="createUsuario">
                <Form
                    className="border-bottom pb-4"
                    autoComplete="off"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit(async (data) => {
                        await axios
                            .get(`/usuario_oal/checkdni/${data.dni}`)
                            .then((response) => {
                                if (response.data.exists) {
                                    alert(
                                        'El DNI introducido ya existe en la base de datos. Si desea modificarlo, por favor, vaya al buscador y seleccionelo.',
                                    );
                                    return;
                                } else {
                                    //Formateo en arrays de especialidades y carnets (selects multiples)
                                    let specialtyArray = [];
                                    for (const element of data.especialidad) {
                                        specialtyArray.push(element.value);
                                    }
                                    let carnetArray = [];
                                    for (const element of data.carnet) {
                                        carnetArray.push(element.value);
                                    }
                                    let necesidadesArray = [];
                                    if (data.necesidades) {
                                        for (const element of data.necesidades) {
                                            necesidadesArray.push(
                                                element.value,
                                            );
                                        }
                                    }
                                    //Formateo en JSON para enviarlo al backend con la estructura del model UsuarioOAL
                                    let newData = {
                                        nombre: data.nombre,
                                        apellidos: data.apellidos,
                                        sexo: data.sexo.value,
                                        edad: formatoFechaSimple(data.edad),
                                        telefono: data.telefono,
                                        dni: data.dni,
                                        fecha_activacion: formatoFechaSimple(
                                            data.fecha_activacion,
                                        ),
                                        ocupacion: data.ocupacion1.value,
                                        ocupacion2: data.ocupacion2?.value,
                                        ocupacion3: data.ocupacion3?.value,
                                        discapacidad: data.discapacidad.value,
                                        nivel_estudios: data.estudios.value,
                                        especialidad:
                                            JSON.stringify(specialtyArray),
                                        formacion_complementaria:
                                            data.formacion_comp,
                                        experiencia_laboral: data.experiencia,
                                        disponibilidad:
                                            data.disponibilidad.value,
                                        carnet: JSON.stringify(carnetArray),
                                        vehiculo: data.vehiculo.value,
                                        localidad: data.localidad.value,
                                        necesidad_formativa: data.necesidades
                                            ? JSON.stringify(necesidadesArray)
                                            : '[]',
                                        observaciones: data.observaciones
                                            ? data.observaciones
                                            : '',
                                        programa_oal: data.programa?.value,
                                        año_programa_oal: data.yearPrograma,
                                        programa_oal_2: data.programa2?.value,
                                        año_programa_oal_2: data.yearPrograma2,
                                        programa_oal_3: data.programa3?.value,
                                        año_programa_oal_3: data.yearPrograma3,
                                    };
                                    //Petición POST para crear el usuario, primero se crea. Luego se añaden los documentos.
                                    axios
                                        .post('/usuario_oal', newData)
                                        .then((response) => {
                                            let usuario_id =
                                                response.data.usuario.id;
                                            router.post(
                                                '/usuario_oal/adddocs',
                                                {
                                                    id: usuario_id,
                                                    docs: data.documentos,
                                                },
                                                {
                                                    preserveScroll: true, // Mantiene la posición del scroll
                                                    preserveState: false, // Conserva el estado del componente
                                                },
                                            );
                                        });
                                }
                            });
                    })}
                    noValidate
                >
                    <div className="d-flex">
                        <div className="container mx-5">
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label className="fs-4 fw-bold">
                                    Nombre
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register('nombre', {
                                        required:
                                            'Este campo es obligatorio (Nombre)',
                                    })}
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
                                <Form.Label className="fs-4 fw-bold">
                                    Apellidos
                                </Form.Label>
                                <Form.Control
                                    {...register('apellidos', {
                                        required:
                                            'Este campo es obligatorio (Apellidos)',
                                    })}
                                    type="text"
                                    className="mx-auto"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.apellidos?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSexo">
                                <Form.Label className="fs-4 fw-bold">
                                    Sexo
                                </Form.Label>
                                <Controller
                                    name="sexo"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={sexoOptions}
                                            placeholder="Selecciona un sexo"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha opción'
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.sexo &&
                                        'Es necesario indicar el género del usuario.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEdad">
                                <Form.Label className="fs-4 fw-bold">
                                    Edad
                                </Form.Label>
                                <input
                                    {...register('edad', {
                                        required:
                                            'Este campo es obligatorio (Edad)',
                                    })}
                                    id="edad"
                                    className="form-control"
                                    type="date"
                                    name="edad"
                                    required={true}
                                />
                                <Form.Text className="text-danger">
                                    {errors.edad?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formTelefono"
                            >
                                <Form.Label className="fs-4 fw-bold">
                                    Teléfono
                                </Form.Label>
                                <Form.Control
                                    {...register('telefono', {
                                        required:
                                            'Este campo es obligatorio (Telefono)',
                                        pattern: {
                                            value: regExpTlf,
                                            message:
                                                'El teléfono debe tener 9 dígitos',
                                        },
                                    })}
                                    type="text"
                                    className="mx-auto"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.telefono?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDni">
                                <Form.Label className="fs-4 fw-bold">
                                    DNI/NIE
                                </Form.Label>
                                <Form.Control
                                    {...register('dni', {
                                        required:
                                            'Este campo es obligatorio (DNI/NIE)',
                                        pattern: {
                                            value: regExpDNI,
                                            message:
                                                'El formato deberá ser tipo 12345678X o B12345678',
                                        },
                                    })}
                                    type="text"
                                    className="mx-auto"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.dni?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formFechaActivacion"
                            >
                                <Form.Label className="fs-4 fw-bold">
                                    Fecha de activación
                                </Form.Label>
                                <input
                                    {...register('fecha_activacion', {
                                        required:
                                            'Este campo es obligatorio (Fecha de activación)',
                                    })}
                                    id="fecha_activacion"
                                    className="form-control"
                                    type="date"
                                    name="fecha_activacion"
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {errors.fecha_activacion?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formOcupacion1"
                            >
                                <Form.Label className="fs-4 fw-bold">
                                    Ocupacion 1
                                </Form.Label>
                                <Controller
                                    name="ocupacion1"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.ocupacion1 &&
                                        'Es necesario adjuntar una ocupación, aunque no se tenga'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formOcupacion2"
                            >
                                <Form.Label className="fs-4 fst-italic">
                                    Ocupacion 2 (opcional)
                                </Form.Label>
                                <Controller
                                    name="ocupacion2"
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
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.ocupacion2?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formOcupacion3"
                            >
                                <Form.Label className="fs-4 fst-italic">
                                    Ocupacion 3 (opcional)
                                </Form.Label>
                                <Controller
                                    name="ocupacion3"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            id="ocupacion3"
                                            {...field}
                                            isClearable={true}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.ocupacion3?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formDiscapacidad"
                            >
                                <Form.Label className="fs-4 fw-bold">
                                    Discapacidad
                                </Form.Label>
                                <Controller
                                    name="discapacidad"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={discaOptions}
                                            placeholder="Seleccione una opción"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha opción'
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.discapacidad &&
                                        'Es necesario indicar si tiene discapacidad, aunque no la tenga.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formEstudios"
                            >
                                <Form.Label className="fs-4 fw-bold">
                                    Nivel de estudios
                                </Form.Label>
                                <Controller
                                    name="estudios"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={estudiosOptions}
                                            placeholder="Selecciona tu nivel de estudios más alto"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicho estudio'
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.estudios &&
                                        'Ha habido un error: ' +
                                            errors.estudios.message +
                                            '.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formSpecialty"
                            >
                                <Form.Label className="fs-4 fw-bold">
                                    Especialidad
                                </Form.Label>
                                <Controller
                                    name="especialidad"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={specialtyOptions}
                                            placeholder="Selecciona tu especialidad"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicho estudio'
                                            }
                                            isMulti
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.especialidad &&
                                        'Ha habido un error: ' +
                                            errors.especialidad.message +
                                            '.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formComplementario"
                            >
                                <Form.Label className="fs-4 fst-italic">
                                    Formación complementaria (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register('formacion_comp')}
                                    as="textarea"
                                    placeholder="Añada si tiene alguna formación complementaria"
                                    rows={3}
                                />
                            </Form.Group>
                        </div>
                        <div className="container mx-5">
                            <Form.Group
                                className="mb-3"
                                controlId="formExperiencia"
                            >
                                <Form.Label className="fs-4 fst-italic">
                                    Experiencia laboral (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register('experiencia')}
                                    as="textarea"
                                    placeholder="Añada si tiene alguna experiencia laboral"
                                    rows={3}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formPrograma"
                            >
                                <Form.Label className="fs-4 fst-italic">
                                    Programa (opcional)
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
                                <Form.Label className="fs-4 fst-italic">
                                    Año Programa (opcional)
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
                                <Form.Label className="fs-4 fst-italic">
                                    Programa 2 (opcional)
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
                                <Form.Label className="fs-4 fst-italic">
                                    Año Programa 2 (opcional)
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
                                <Form.Label className="fs-4 fst-italic">
                                    Programa 3 (opcional)
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
                                <Form.Label className="fs-4 fst-italic">
                                    Año Programa 3 (opcional)
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

                            <Form.Group className="mb-3" controlId="formDispo">
                                <Form.Label className="fs-4 fw-bold">
                                    Disponibilidad
                                </Form.Label>
                                <Controller
                                    name="disponibilidad"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={disponibilidadOptions}
                                            placeholder="Selecciona su disponibilidad"
                                            noOptionsMessage={() =>
                                                'No existe el dato introducido'
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.disponibilidad &&
                                        'Es necesario indicar a qué horario puede estar disponible.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCarnet">
                                <Form.Label className="fs-4 fw-bold">
                                    Carnet
                                </Form.Label>
                                <Controller
                                    name="carnet"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={carnetOptions}
                                            placeholder="Selecciona el carnet que posea"
                                            noOptionsMessage={() =>
                                                'Se ha introducido un valor erróneo'
                                            }
                                            isMulti
                                            required
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
                                <Form.Label className="fs-4 fw-bold">
                                    Vehículo
                                </Form.Label>
                                <Controller
                                    name="vehiculo"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={vehiculoOptions}
                                            placeholder="¿Cuenta con vehículo propio?"
                                            noOptionsMessage={() =>
                                                'Se ha introducido un valor erróneo'
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.vehiculo &&
                                        'Es necesario indicar si tiene vehículo propio o no.'}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formLocalidad"
                            >
                                <Form.Label className="fs-4 fw-bold">
                                    Localidad
                                </Form.Label>
                                <Controller
                                    name="localidad"
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={localidadOptions}
                                            placeholder="Selecciona una localidad"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicho municipio'
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.localidad &&
                                        'Es necesario indicar de qué localidad proviene.'}
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
                                <Form.Label className="fs-4 fst-italic">
                                    Observaciones (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register('observaciones')}
                                    as="textarea"
                                    placeholder="Añada aquí sus observaciones"
                                    rows={3}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Form.Group className="mb-3" controlId="form-Files">
                            <Form.Label className="fs-4 fst-italic">
                                Documentos (opcional)
                            </Form.Label>
                            <Form.Control
                                {...register('documentos')}
                                type="file"
                                multiple={true}
                                accept="application/pdf"
                            />
                        </Form.Group>
                    </div>

                    <div className="container my-3">
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" size="lg" type="submit">
                                Añadir usuario
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}
