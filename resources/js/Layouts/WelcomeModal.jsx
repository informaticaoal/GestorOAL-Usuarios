import { useEffect, useState } from 'react';

export default function WelcomeModal() {
    const [isFirstTime, setIsFirstTime] = useState(null);
    const version = '1.0.0';
    const appVersion = localStorage.getItem('appVersion');
    const firstTime = localStorage.getItem('firstTime');

    useEffect(() => {
        if (firstTime === null) {
            setIsFirstTime(true);
            localStorage.setItem('firstTime', 'true');
        } else {
            setIsFirstTime(false);
        }

        if (appVersion != version || firstTime === 'true') {
            setIsFirstTime(true);
            localStorage.setItem('firstTime', 'true');
            localStorage.setItem('appVersion', version);
        }
    }, []);

    return (
        isFirstTime && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="mb-4 text-xl font-bold">
                        Bienvenid@ al Gestor de Usuarios OAL
                    </h2>
                    <p className="mb-4">
                        {/* Descripción */}
                        En este gestor podrás crear, modificar y eliminar
                        usuarios de la aplicación. Además, podrás gestionar los
                        datos personales de cada usuario. También incluye un
                        buscador para facilitar la búsqueda de usuarios.
                        <br />
                        <br />
                        {/* Versión */}
                        Versión de la aplicación: <strong>{version}</strong>
                        <br />
                        {/* Cambios en la versión */}
                        <br />
                        <strong className="text-center">
                            Cambios en la versión:
                        </strong>
                        <br />
                        {/* Detalles */}
                        <i>
                            En esta versión, se ha mejorado{' '}
                            <strong>la búsqueda por ocupación</strong>.
                        </i>
                    </p>
                    <button
                        onClick={() => {
                            setIsFirstTime(false);
                            localStorage.setItem('firstTime', 'false');
                        }}
                        className="fw-bold rounded bg-red-500 px-4 py-2 text-black"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        )
    );
}
