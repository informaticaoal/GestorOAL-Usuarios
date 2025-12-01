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
import { router, useForm as useFormInertia } from '@inertiajs/react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import NavLink from '../NavLink';

export default function ModifyUserFormSearch({
    usuariosOAL,
    contadorUsuarios,
}) {
    const {
        register: register2,
        formState,
        control: control2,
        handleSubmit: handleSubmit2,
        setValue: setValue2,
    } = useForm();
    const { errors } = formState;
    function formatearFecha(fecha) {
        // Separamos la fecha en día, mes y año usando el carácter "/"
        const [dia, mes, anio] = fecha.split('/');
        // Devolvemos la fecha en el nuevo formato
        return `${anio}-${mes}-${dia}`;
    }

    const [documentos, setDocumentos] = useState([]);
    const actualYear = new Date().getFullYear();
    const regExpTlf = new RegExp(/^\d{9}$/);
    const regExpDNI = new RegExp(/\d{8}[A-Z]|[A-Z]\d{8}|[A-Z]\d{7}[A-Z]/);

    // Esta funcion se encarga de recoger el usuario seleccionado y preparar el formulario de modificación.
    const modificarUsuario = (idUsuario) => async () => {
        if (!idUsuario) {
            return;
        } else {
            try {
                // Para llamar a la base de datos y sacar la fecha,
                // ya que en la tabla solo se consta la edad actual, no la fecha de nacimiento.
                const response = await axios.get(`/usuario/${idUsuario}/edad`);
                const edadDB = response.data.edad;
                const responseFechaAct = await axios.get(
                    `/usuario/${idUsuario}/fecha-activacion`,
                );
                const fechaActDB = responseFechaAct.data.fecha_activacion;

                // Al pasarse al listado de usuarios sin [], hay que hacer una llamada a la base de datos
                // y que nos devuelva el array en string, y luego hacerle un JSON.parse
                // para que se pueda usar como un array.
                const specialtyResponse = await axios.get(
                    `/usuario_oal/${idUsuario}/specialties`,
                );
                const specialtiesDB = JSON.parse(
                    specialtyResponse.data.especialidades,
                );
                const carnetResponse = await axios.get(
                    `/usuario_oal/${idUsuario}/carnet`,
                );
                const necesidadFormativaResponse = await axios.get(
                    `/usuario_oal/${idUsuario}/necesidad-formativa`,
                );
                const necesidadFormativaDB = JSON.parse(
                    necesidadFormativaResponse.data.necesidad_formativa,
                );

                const carnetDB = JSON.parse(carnetResponse.data.carnet);
                let usuario = document.getElementById(idUsuario);
                let form = document.getElementById('editUsuario').children[1];

                // Si se va a añadir más campos al formulario, añadir el mismo nombre aquí y
                // asegura que usuarioId siempre se quede el último para no interferir en el
                // forEach de más abajo.

                const fields = [
                    'nombre',
                    'apellidos',
                    'sexo',
                    'edad',
                    'telefono',
                    'dni',
                    'fecha_activacion',
                    'ocupacion1',
                    'ocupacion2',
                    'ocupacion3',
                    'discapacidad',
                    'nivel_estudios',
                    'especialidad',
                    'formacion_complementaria',
                    'experiencia_laboral',
                    'programa_oal',
                    'año_programa_oal',
                    'programa_oal_2',
                    'año_programa_oal_2',
                    'programa_oal_3',
                    'año_programa_oal_3',
                    'disponibilidad',
                    'carnet',
                    'vehiculo',
                    'localidad',
                    'necesidad_formativa',
                    'observaciones',
                    'usuarioId',
                    'documentos',
                ];

                // Se recorre los campos y en cada caso, actua para rellenarlo con datos.
                fields.forEach((field, index) => {
                    const childElement = usuario.children[index + 1];
                    const elementText = childElement
                        ? childElement.innerText
                        : '';
                    switch (field) {
                        case 'ocupacion1':
                            setValue2('ocupacion1', elementText);
                            break;
                        case 'ocupacion2':
                            setValue2('ocupacion2', elementText);
                            break;
                        case 'ocupacion3':
                            setValue2('ocupacion3', elementText);
                            break;
                        case 'disponibilidad':
                            setValue2('disponibilidad', elementText);
                            break;
                        case 'localidad':
                            setValue2('localidad', elementText);
                            break;
                        case 'necesidad_formativa':
                            // eslint-disable-next-line prettier/prettier, no-case-declarations
                            const necesidadFormativaArray = necesidadFormativaDB;
                            // eslint-disable-next-line no-case-declarations
                            let selectedNecesidades = [];

                            if (necesidadFormativaArray) {
                                // Recorre el array de necesidades formativas del usuario
                                necesidadFormativaArray.forEach((necesidad) => {
                                    // Busca la opción correspondiente en ocupacionOptions
                                    const option = ocupacionOptions.find(
                                        (opt) => opt.value == necesidad,
                                    );
                                    if (option) {
                                        selectedNecesidades.push(option);
                                    }
                                });
                            }

                            setValue2('necesidades', selectedNecesidades);
                            break;
                        case 'carnet':
                            // eslint-disable-next-line no-case-declarations
                            const carnetArray = carnetDB;
                            // eslint-disable-next-line no-case-declarations
                            let selectedCarnets = [];

                            // Recorre el array de carnets del usuario
                            carnetArray.forEach((carnet) => {
                                // Busca la opción correspondiente en carnetOptions
                                const option = carnetOptions.find(
                                    (opt) => opt.value == carnet,
                                );
                                if (option) {
                                    selectedCarnets.push(option);
                                }
                            });

                            setValue2('carnet', selectedCarnets);
                            break;
                        case 'edad':
                            setValue2('edad', formatearFecha(edadDB));
                            document.getElementById('edadModificar').value =
                                formatearFecha(edadDB);
                            break;
                        case 'nombre':
                            setValue2('nombre', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'apellidos':
                            setValue2('apellidos', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'dni':
                            setValue2('dni', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'telefono':
                            setValue2('telefono', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'observaciones':
                            setValue2('observaciones', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'usuarioId':
                            setValue2(
                                'usuarioId',
                                usuario.children[0].innerText,
                            );
                            form.querySelector(`[name="${field}"]`).value =
                                usuario.children[0].innerText;
                            break;
                        case 'sexo':
                            setValue2('sexo', elementText);
                            break;
                        case 'discapacidad':
                            setValue2('discapacidad', elementText);
                            break;
                        case 'documentos':
                            axios
                                .get(`/usuario_oal/${idUsuario}/docs`)
                                .then((response) => {
                                    setDocumentos(response.data);
                                });
                            break;
                        case 'programa_oal':
                            setValue2('programa_oal', elementText);
                            break;
                        case 'programa_oal_2':
                            setValue2('programa_oal_2', elementText);
                            break;
                        case 'programa_oal_3':
                            setValue2('programa_oal_3', elementText);
                            break;
                        case 'vehiculo':
                            setValue2('vehiculo', elementText);
                            break;
                        case 'fecha_activacion':
                            setValue2(
                                'fecha_activacion',
                                formatearFecha(fechaActDB),
                            );
                            document.getElementById('fecha_activacion').value =
                                formatearFecha(fechaActDB);
                            break;
                        case 'año_programa_oal':
                            setValue2('año_programa_oal', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'año_programa_oal_2':
                            setValue2('año_programa_oal_2', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'año_programa_oal_3':
                            setValue2('año_programa_oal_3', elementText);
                            form.querySelector(`[name="${field}"]`).value =
                                elementText;
                            break;
                        case 'nivel_estudios':
                            setValue2('estudios', elementText);
                            break;
                        case 'especialidad':
                            // eslint-disable-next-line no-case-declarations
                            const specialtiesArray = specialtiesDB;
                            // eslint-disable-next-line no-case-declarations
                            let selectedSpecialties = [];

                            // Recorre el array de especialidades del usuario
                            specialtiesArray.forEach((specialty) => {
                                // Busca primero en las opciones no agrupadas
                                let option = specialtyOptions.find(
                                    (opt) => opt.value === specialty,
                                );

                                // Si no se encuentra en las opciones principales, busca en los grupos
                                if (!option) {
                                    specialtyOptions.forEach((group) => {
                                        if (group.options) {
                                            const groupOption =
                                                group.options.find(
                                                    (opt) =>
                                                        opt.value === specialty,
                                                );
                                            if (groupOption) {
                                                selectedSpecialties.push(
                                                    groupOption,
                                                );
                                            }
                                        }
                                    });
                                } else {
                                    selectedSpecialties.push(option);
                                }
                            });

                            setValue2('especialidad', selectedSpecialties);
                            break;
                        case 'formacion_complementaria':
                            setValue2('formacion_comp', elementText);
                            break;
                        case 'experiencia_laboral':
                            setValue2('experiencia', elementText);
                            break;
                        default:
                            console.error('Error en la función');
                            break;
                    }
                });

                await axios
                    .get(`/usuario_oal/${idUsuario}/getsocialmedia`)
                    .then((response) => {
                        setValue2(
                            'socialmedia',
                            response.data.socialmedia === 1 ? true : false,
                        );
                    });

                document
                    .getElementById('searchUsuarios')
                    .setAttribute('style', 'display: none !important');
                document
                    .getElementById('pdfGenerator')
                    .setAttribute('style', 'display: none !important');
                window.scrollTo(0, 0);

                document
                    .getElementById('editUsuario')
                    .setAttribute('style', 'display: block !important');
            } catch (error) {
                console.error('Error en la función:', error);
            }
        }
    };

    // Función para convertir la fecha que se pasa (dd/mm/YYYY) a los años que correspondientes.
    const convertirEdad = (fecha) => {
        const partes = fecha.split('/');
        if (partes.length !== 3) return NaN;

        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const anio = parseInt(partes[2], 10);

        const fechaNacimiento = new Date(anio, mes, dia);
        if (isNaN(fechaNacimiento.getTime())) return NaN;

        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

        // Ajustar si aún no ha pasado el mes o el día del cumpleaños
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
            edad--;
        }

        return edad;
    };

    const formatoFechaSimple = (fechaISO) => {
        const [anio, mes, dia] = fechaISO.split('-');
        return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${anio}`;
    };

    //Funcion para eliminar al usuario desde UsuarioOALController::destroy
    const { delete: destroy } = useFormInertia();

    function handleEliminarUsuario(idUsuario) {
        destroy(`/usuario_oal/${idUsuario}`, { preserveScroll: true });
    }

    function handleEliminarDocumento(idDoc) {
        router.delete(`/documento/search/${idDoc}`, {
            onSuccess: () => {
                setDocumentos((prevDocs) =>
                    //Este filtrado permite eliminar del DOM los archivos que hayan sido eliminados.
                    prevDocs.filter((doc) => doc.id !== idDoc),
                );
            },
        });
    }

    return (
        <>
            <div className="container" id="editUsuario">
                <div className="d-flex justify-content-center">
                    <NavLink className="fs-3 my-3" href={route('search')}>
                        Realizar otra búsqueda
                    </NavLink>
                </div>

                <Form
                    className="border-bottom pb-4"
                    onSubmit={handleSubmit2(async (data) => {
                        let specialtyArray = [];
                        for (const element of data.especialidad) {
                            specialtyArray.push(element.value);
                        }
                        let carnetArray = [];
                        for (const element of data.carnet) {
                            carnetArray.push(element.value);
                        }
                        let necesidadesArray = [];
                        for (const element of data.necesidades) {
                            necesidadesArray.push(element.value);
                        }

                        let newData = {
                            nombre: data.nombre,
                            apellidos: data.apellidos,
                            sexo: data.sexo,
                            edad: formatoFechaSimple(data.edad),
                            telefono: data.telefono,
                            dni: data.dni,
                            fecha_activacion: formatoFechaSimple(
                                data.fecha_activacion,
                            ),
                            ocupacion: data.ocupacion1,
                            ocupacion2: data.ocupacion2,
                            ocupacion3: data.ocupacion3,
                            discapacidad: data.discapacidad,
                            nivel_estudios: data.estudios,
                            especialidad: JSON.stringify(specialtyArray),
                            disponibilidad: data.disponibilidad,
                            formacion_complementaria: data.formacion_comp,
                            experiencia_laboral: data.experiencia,
                            carnet: JSON.stringify(carnetArray),
                            vehiculo: data.vehiculo,
                            localidad: data.localidad,
                            necesidad_formativa:
                                JSON.stringify(necesidadesArray),
                            observaciones: data.observaciones
                                ? data.observaciones
                                : '',
                            programa_oal: data.programa_oal,
                            año_programa_oal: data.año_programa_oal,
                            programa_oal_2: data.programa_oal_2,
                            año_programa_oal_2: data.año_programa_oal_2,
                            programa_oal_3: data.programa_oal_3,
                            año_programa_oal_3: data.año_programa_oal_3,
                            socialmedia: data.socialmedia ? 1 : 0,
                        };
                        await router.put(
                            `/usuario_oal/search/${data.usuarioId}`,
                            newData,
                        );

                        await router.post(
                            '/usuario_oal/search/adddocs',
                            {
                                id: data.usuarioId,
                                docs: data.documentos,
                            },
                            {
                                preserveScroll: true,
                                preserveState: false,
                            },
                        );
                    })}
                    noValidate
                >
                    <div className="d-flex justify-content-evenly">
                        <div className="container mx-5">
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label className="fs-4">Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    {...register2('nombre', {
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
                                <Form.Label className="fs-4">
                                    Apellidos
                                </Form.Label>
                                <Form.Control
                                    {...register2('apellidos', {
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
                                <Form.Label className="fs-4">Sexo</Form.Label>
                                <Controller
                                    name="sexo"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={sexoOptions}
                                            placeholder="Selecciona un sexo"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha opción'
                                            }
                                            value={
                                                sexoOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.sexo?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEdad">
                                <Form.Label className="fs-4">Edad</Form.Label>
                                <input
                                    {...register2('edad', {
                                        required:
                                            'Este campo es obligatorio (Edad)',
                                    })}
                                    id="edadModificar"
                                    className="form-control"
                                    type="date"
                                    name="edad"
                                    required
                                />
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
                                    {...register2('telefono', {
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
                                <Form.Label className="fs-4">
                                    DNI/NIE
                                </Form.Label>
                                <Form.Control
                                    {...register2('dni', {
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
                                <Form.Label className="fs-4">
                                    Fecha de activación
                                </Form.Label>
                                <input
                                    {...register2('fecha_activacion', {
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
                                <Form.Label className="fs-4">
                                    Ocupacion 1
                                </Form.Label>
                                <Controller
                                    name="ocupacion1"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                            value={
                                                ocupacionOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.ocupacion1?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formOcupacion2"
                            >
                                <Form.Label className="fs-4">
                                    Ocupacion 2 (opcional)
                                </Form.Label>
                                <Controller
                                    name="ocupacion2"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable={true}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                            value={
                                                ocupacionOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
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
                                <Form.Label className="fs-4">
                                    Ocupacion 3 (opcional)
                                </Form.Label>
                                <Controller
                                    name="ocupacion3"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable={true}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha profesión'
                                            }
                                            value={
                                                ocupacionOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
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
                                <Form.Label className="fs-4">
                                    Discapacidad
                                </Form.Label>
                                <Controller
                                    name="discapacidad"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={discaOptions}
                                            placeholder="Seleccione una opción"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicha opción'
                                            }
                                            value={
                                                discaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
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
                                    control={control2}
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
                                            value={
                                                estudiosOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
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
                                <Form.Label className="fs-4">
                                    Especialidad
                                </Form.Label>
                                <Controller
                                    name="especialidad"
                                    control={control2}
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
                                            value={field.value || []}
                                            onChange={(selectedOptions) => {
                                                field.onChange(
                                                    selectedOptions || [],
                                                );
                                            }}
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
                                <Form.Label className="fs-4">
                                    Formación complementaria (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register2('formacion_comp')}
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
                                <Form.Label className="fs-4">
                                    Experiencia laboral (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register2('experiencia')}
                                    as="textarea"
                                    placeholder="Añada si tiene alguna experiencia laboral"
                                    rows={3}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formPrograma"
                            >
                                <Form.Label className="fs-4">
                                    Programa (opcional)
                                </Form.Label>
                                <Controller
                                    name="programa_oal"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable={true}
                                            options={programaOptions}
                                            placeholder="Selecciona un programa"
                                            noOptionsMessage={() =>
                                                'No existe el programa introducido'
                                            }
                                            value={
                                                programaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.programa_oal?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formAñoPrograma"
                            >
                                <Form.Label className="fs-4">
                                    Año Programa (opcional)
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    as="input"
                                    {...register2('año_programa_oal')}
                                    min={1900}
                                    max={actualYear}
                                />
                                <Form.Text className="text-danger">
                                    {errors.año_programa_oal?.message}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formPrograma2"
                            >
                                <Form.Label className="fs-4">
                                    Programa 2 (opcional)
                                </Form.Label>
                                <Controller
                                    name="programa_oal_2"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable={true}
                                            options={programaOptions}
                                            placeholder="Selecciona un programa"
                                            noOptionsMessage={() =>
                                                'No existe el programa introducido'
                                            }
                                            value={
                                                programaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.programa_oal_2?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formAñoPrograma2"
                            >
                                <Form.Label className="fs-4">
                                    Año Programa 2 (opcional)
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    as="input"
                                    {...register2('año_programa_oal_2')}
                                    min={1900}
                                    max={actualYear}
                                />
                                <Form.Text className="text-danger">
                                    {errors.año_programa_oal_2?.message}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formPrograma3"
                            >
                                <Form.Label className="fs-4">
                                    Programa 3 (opcional)
                                </Form.Label>
                                <Controller
                                    name="programa_oal_3"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable={true}
                                            options={programaOptions}
                                            placeholder="Selecciona un programa"
                                            noOptionsMessage={() =>
                                                'No existe el programa introducido'
                                            }
                                            value={
                                                programaOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.programa_oal_3?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formAñoPrograma3"
                            >
                                <Form.Label className="fs-4">
                                    Año Programa 3 (opcional)
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    as="input"
                                    {...register2('año_programa_oal_3')}
                                    min={1900}
                                    max={actualYear}
                                />
                                <Form.Text className="text-danger">
                                    {errors.año_programa_oal_3?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDispo">
                                <Form.Label className="fs-4">
                                    Disponibilidad
                                </Form.Label>
                                <Controller
                                    name="disponibilidad"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={disponibilidadOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No existe el dato introducido'
                                            }
                                            value={
                                                disponibilidadOptions.find(
                                                    (opt) =>
                                                        opt.value ===
                                                        field.value,
                                                ) || null
                                            }
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.disponibilidad?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCarnet">
                                <Form.Label className="fs-4">Carnet</Form.Label>
                                <Controller
                                    name="carnet"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={carnetOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'Se ha introducido un valor erróneo'
                                            }
                                            value={field.value || []}
                                            onChange={(selectedOptions) => {
                                                field.onChange(
                                                    selectedOptions || [],
                                                );
                                            }}
                                            isMulti
                                            required
                                        />
                                    )}
                                />
                                <Form.Text className="text-danger">
                                    {errors.carnet?.message}
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
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={vehiculoOptions}
                                            placeholder="¿Cuenta con vehículo propio?"
                                            noOptionsMessage={() =>
                                                'Se ha introducido un valor erróneo'
                                            }
                                            value={vehiculoOptions.find(
                                                (opt) =>
                                                    opt.value === field.value,
                                            )}
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
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
                                <Form.Label className="fs-4">
                                    Localidad
                                </Form.Label>
                                <Controller
                                    name="localidad"
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={localidadOptions}
                                            placeholder="Selecciona una profesión"
                                            noOptionsMessage={() =>
                                                'No se ha encontrado dicho municipio'
                                            }
                                            value={localidadOptions.find(
                                                (opt) =>
                                                    opt.value === field.value,
                                            )}
                                            onChange={(option) =>
                                                field.onChange(
                                                    option ? option.value : '',
                                                )
                                            }
                                            required
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
                                    control={control2}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={ocupacionOptions}
                                            placeholder="Selecciona las profesiones que sean del interes del usuario"
                                            noOptionsMessage={() =>
                                                'Se ha introducido un valor erróneo'
                                            }
                                            value={field.value || []}
                                            onChange={(selectedOptions) => {
                                                field.onChange(
                                                    selectedOptions || [],
                                                );
                                            }}
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
                                    Observaciones (opcional)
                                </Form.Label>
                                <Form.Control
                                    {...register2('observaciones')}
                                    as="textarea"
                                    placeholder="Añada aquí sus observaciones"
                                    rows={3}
                                />
                            </Form.Group>
                            <Form.Group className="invisible">
                                <Form.Control
                                    {...register2('usuarioId')}
                                    type="text"
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Form.Group
                            className="fs-5 mb-3"
                            controlId="form-socialmedia"
                        >
                            <Controller
                                name="socialmedia"
                                control={control2}
                                defaultValue={false}
                                render={({ field }) => (
                                    <Form.Check
                                        type="checkbox"
                                        id="default-checkbox"
                                        label="¿El usuario proviene de redes sociales?"
                                        checked={field.value || false}
                                        onChange={(e) => {
                                            const isChecked = e.target.checked;
                                            field.onChange(isChecked);
                                        }}
                                    />
                                )}
                            />
                        </Form.Group>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Form.Group className="mb-3" controlId="form-Files">
                            <Form.Label className="fs-4">
                                Documentos (opcional)
                            </Form.Label>
                            <Form.Control
                                {...register2('documentos')}
                                type="file"
                                multiple={true}
                                accept="application/pdf"
                            />
                        </Form.Group>
                    </div>

                    <div className="d-flex justify-content-center row-wrap gap-2">
                        {documentos &&
                            documentos.map((documento) => (
                                <div
                                    className="d-flex flex-column flex-wrap"
                                    key={documento.id}
                                >
                                    <a
                                        href={`/storage/${documento.ruta_documento}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {documento.titulo_documento}
                                    </a>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="fw-bold"
                                        onClick={() =>
                                            confirm(
                                                '¿Estás seguro de que quieres eliminar este documento?',
                                            )
                                                ? handleEliminarDocumento(
                                                      documento.id,
                                                  )
                                                : null
                                        }
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            ))}
                    </div>

                    <div className="container my-3">
                        <div className="d-flex justify-content-center">
                            <Button variant="info" size="lg" type="submit">
                                Modificar usuario
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            <div className="container-fluid my-5">
                <h2 className="text-center" id="listado-usuarios">
                    Listado de Usuarios
                </h2>
                <h3 className="my-3 text-center">
                    Usuarios registrados: {contadorUsuarios}
                </h3>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Sexo</th>
                            <th>Edad</th>
                            <th>Teléfono</th>
                            <th>DNI/NIE</th>
                            <th>Fecha de activación</th>
                            <th style={{ minWidth: '150px' }}>Ocupación 1</th>
                            <th style={{ minWidth: '150px' }}>Ocupación 2</th>
                            <th style={{ minWidth: '150px' }}>Ocupación 3</th>
                            <th>Discapacidad</th>
                            <th style={{ minWidth: '200px' }}>
                                Nivel de estudios
                            </th>
                            <th style={{ minWidth: '210px' }}>
                                Especialidades
                            </th>
                            <th style={{ minWidth: '210px' }}>
                                Formación complementaria
                            </th>
                            <th style={{ minWidth: '210px' }}>
                                Experiencia laboral
                            </th>
                            <th>Programa</th>
                            <th>Año Programa</th>
                            <th>Programa 2</th>
                            <th>Año Programa 2</th>
                            <th>Programa 3</th>
                            <th>Año Programa 3</th>
                            <th>Disponibilidad</th>
                            <th>Carnet</th>
                            <th>Vehículo</th>
                            <th>Localidad</th>
                            <th style={{ minWidth: '210px' }}>
                                Necesidad formativa
                            </th>
                            <th>Observaciones</th>
                            <th>Añadido por</th>
                            <th>¿Eliminar?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuariosOAL.map((usuario) => (
                            <tr
                                key={usuario.id}
                                id={usuario.id}
                                style={{ cursor: 'pointer' }}
                            >
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.id}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.nombre}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.apellidos}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.sexo}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {convertirEdad(usuario.edad)}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.telefono}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.dni}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.fecha_activacion}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.ocupacion}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.ocupacion2}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.ocupacion3}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.discapacidad}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.nivel_estudios}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {JSON.parse(usuario.especialidad).map(
                                        (especialidad, index, array) => (
                                            <span key={especialidad}>
                                                {array.length - 1 == index
                                                    ? especialidad
                                                    : especialidad + ','}
                                                <br />
                                            </span>
                                        ),
                                    )}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.formacion_complementaria}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.experiencia_laboral}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.programa_oal}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.año_programa_oal}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.programa_oal_2}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.año_programa_oal_2}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.programa_oal_3}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.año_programa_oal_3}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.disponibilidad}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {JSON.parse(usuario.carnet).map(
                                        (carnet, index, array) => (
                                            <span key={carnet}>
                                                {array.length - 1 == index
                                                    ? carnet
                                                    : carnet + ','}
                                                <br />
                                            </span>
                                        ),
                                    )}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.vehiculo}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.localidad}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.necesidad_formativa &&
                                        JSON.parse(
                                            usuario.necesidad_formativa,
                                        ).map((necesidad, index, array) => (
                                            <span key={necesidad}>
                                                {array.length - 1 == index
                                                    ? necesidad
                                                    : necesidad + ','}
                                                <br />
                                            </span>
                                        ))}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.observaciones}
                                </td>
                                <td onClick={modificarUsuario(usuario.id)}>
                                    {usuario.added_by_user}
                                </td>
                                <td className="text-center">
                                    <Form
                                        key={usuario.id + 'form'}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (
                                                confirm(
                                                    '¿Estás seguro de que quieres eliminar este usuario?',
                                                )
                                            ) {
                                                handleEliminarUsuario(
                                                    usuario.id,
                                                );
                                            }
                                        }}
                                    >
                                        <Button
                                            variant="warning"
                                            size="sm"
                                            className="fw-bold"
                                            type="submit"
                                        >
                                            Eliminar
                                        </Button>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
