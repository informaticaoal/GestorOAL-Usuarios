import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function PDFGenerator({ usuarios }) {
    const { register, handleSubmit } = useForm();
    return (
        <div
            className="flex-column container flex items-center justify-center"
            id="pdfGenerator"
        >
            <h1 className="my-4 text-2xl font-bold">
                Seleccione qué campos quiere imprimir en PDF
            </h1>
            <div className="border-bottom pb-4">
                {/* #region Campos para imprimir en PDF*/}
                <Form
                    className="flex flex-col items-center justify-center"
                    onSubmit={handleSubmit((data) => {
                        let usuariosFormatted = JSON.stringify(usuarios);
                        axios
                            .post(
                                '/generatePDF',
                                {
                                    usuariosFormatted,
                                    data,
                                },
                                {
                                    responseType: 'blob',
                                },
                            )
                            .then((response) => {
                                const url = window.URL.createObjectURL(
                                    new Blob([response.data]),
                                );
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute(
                                    'download',
                                    'usuariosFiltrados.pdf',
                                ); // Nombre del archivo
                                document.body.appendChild(link);
                                link.click();
                                link.parentNode.removeChild(link);
                            });
                    })}
                >
                    <div className="justify-content-center flex flex-row flex-wrap gap-4 pb-4">
                        <div className="form-check">
                            <input
                                {...register('checkNombre')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkNombre"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkNombre"
                            >
                                Nombre
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkApellidos')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkApellidos"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkApellidos"
                            >
                                Apellidos
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkSexo')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkSexo"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkSexo"
                            >
                                Sexo
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkEdad')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkEdad"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkEdad"
                            >
                                Edad
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkTelefono')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkTelefono"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkTelefono"
                            >
                                Teléfono
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkDNI')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkDNI"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkDNI"
                            >
                                DNI/NIE
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkActivationDate')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkActivationDate"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkActivationDate"
                            >
                                Fecha de activación
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkOcupacion')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkOcupacion"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkOcupacion"
                            >
                                Ocupaciones
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkDiscapacidad')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkDiscapacidad"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkDiscapacidad"
                            >
                                Discapacidad
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkEstudios')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkEstudios"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkEstudios"
                            >
                                Nivel de estudios
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkEspecialidad')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkEspecialidad"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkEspecialidad"
                            >
                                Especialidades
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkComplementaria')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkComplementaria"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkComplementaria"
                            >
                                Formación complementaria
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkExperiencia')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkExperiencia"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkExperiencia"
                            >
                                Experiencia laboral
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkProgramas')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkProgramas"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkProgramas"
                            >
                                Programas
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkDispo')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkDispo"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkDispo"
                            >
                                Disponibilidad
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkCarnet')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkCarnet"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkCarnet"
                            >
                                Carnet
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkVehiculo')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkVehiculo"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkVehiculo"
                            >
                                Vehículo propio
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkLocalidad')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkLocalidad"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkLocalidad"
                            >
                                Localidad
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkNecesidades')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkNecesidades"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkNecesidades"
                            >
                                Necesidades formativas
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                {...register('checkObservaciones')}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="checkObservaciones"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkObservaciones"
                            >
                                Observaciones
                            </label>
                        </div>
                    </div>
                    {/* #endregion */}
                    <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                        Generar PDF
                    </button>
                </Form>
            </div>
        </div>
    );
}
