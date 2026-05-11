import { router } from '@inertiajs/react';
import { Form, FormProvider, useForm } from 'react-hook-form';

export default function ExcelOptions() {
    const methods = useForm();
    return (
        <>
            <FormProvider {...methods}>
                <div className="container mt-4" id="excelPage">
                    {/* Header */}
                    <header className="excel-header d-flex align-items-center justify-content-center mb-4">
                        <span className="excel-title fw-bold">
                            Exportar / Importar Excel
                        </span>
                    </header>

                    <div className="excel-cards">
                        {/* Tarjeta Exportar */}
                        <div className="excel-card">
                            <div className="excel-card-icon export-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                </svg>
                            </div>
                            <h2 className="excel-card-title">Exportar</h2>
                            <p className="excel-card-desc">
                                Descarga un archivo Excel (.xlsx) con todos los datos
                                de los usuarios. Ideal para copias de seguridad.
                            </p>
                            <form action="/excel/export" method="get">
                                <button className="btn btn-excel export-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                    Exportar Excel
                                </button>
                            </form>
                        </div>

                        {/* Tarjeta Importar */}
                        <div className="excel-card">
                            <div className="excel-card-icon import-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="17 8 12 3 7 8"/>
                                    <line x1="12" y1="3" x2="12" y2="15"/>
                                </svg>
                            </div>
                            <h2 className="excel-card-title">Importar</h2>
                            <p className="excel-card-desc">
                                Sube un archivo Excel (.xlsx) con datos de usuarios
                                para incorporarlos al sistema.
                            </p>
                            <Form
                                onSubmit={methods.handleSubmit((data) => {
                                    router.post('/excel/import', data);
                                })}
                                encType="multipart/form-data"
                                className="w-100"
                            >
                                <div className="excel-import-actions">
                                    <div className="excel-file-input">
                                        <label htmlFor="excelFile" className="excel-file-label">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                                <polyline points="14 2 14 8 20 8"/>
                                                <line x1="12" y1="18" x2="12" y2="12"/>
                                                <line x1="9" y1="15" x2="12" y2="12"/>
                                                <line x1="15" y1="15" x2="12" y2="12"/>
                                            </svg>
                                            <span>Seleccionar archivo</span>
                                        </label>
                                        <input
                                            {...methods.register('file', {
                                                required: 'Debes seleccionar un archivo Excel',
                                            })}
                                            type="file"
                                            id="excelFile"
                                            accept=".xls, .xlsx"
                                            className="excel-file-hidden"
                                            onChange={(e) => {
                                                const fileName = e.target.files[0]?.name || '';
                                                const label = document.querySelector('.excel-file-label span');
                                                if (label) {
                                                    label.textContent = fileName || 'Seleccionar archivo';
                                                }
                                            }}
                                        />
                                    </div>
                                    <button className="btn btn-excel import-btn" type="submit">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="17 8 12 3 7 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                        Importar
                                    </button>
                                </div>
                                {methods.formState.errors.file && (
                                    <p className="excel-error">{methods.formState.errors.file.message}</p>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>
            </FormProvider>
        </>
    );
}
