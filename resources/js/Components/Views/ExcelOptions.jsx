export default function ExcelOptions() {
    return (
        <>
            <div className="d-flex flex-column container my-5 gap-5">
                <h1 className="text-center">Importador/exportador de Excel</h1>
                <div>
                    <h2>Exportar archivo Excel</h2>
                    <p className="italic">
                        Se descargará un archivo excel (.xlsx) con todo el
                        contenido de los usuarios, para guardar datos/copia de
                        seguridad.
                    </p>
                    <button className="btn btn-success">Exportar Excel</button>
                </div>

                <div>
                    <h2>Importar archivo Excel</h2>
                    <p className="italic">
                        Se requerirá un archivo excel (.xlsx) para poder subir
                        datos de usuarios.
                    </p>
                    <div className="d-flex justify-content-evenly align-items-center align-self-center flex-row gap-5">
                        <div className="input-group">
                            <input
                                type="file"
                                className="form-control"
                                id="inputGroupFile04"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                                accept=".xls, .xlsx"
                            />
                        </div>
                        <button className="btn btn-outline-success">
                            Importar Excel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
