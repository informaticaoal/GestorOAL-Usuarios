import { auth, db } from '@/firebase.config';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { signInAnonymously } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

export default function ExportUsers() {
    const [finalized, setFinalized] = useState(false);

    const handleExportUsers = async () => {
        try {
            setFinalized(false);
            const response = await axios.get('/getallusers');
            const users = response.data.usuarios || [];

            if (!auth.currentUser) {
                try {
                    await signInAnonymously(auth);
                } catch (authError) {
                    if (authError?.code === 'auth/too-many-requests') {
                        console.warn(
                            'Firebase auth rate limit reached. Waiting before retrying.',
                            authError,
                        );
                        await new Promise((resolve) =>
                            setTimeout(resolve, 2000),
                        );
                        await signInAnonymously(auth);
                    } else {
                        throw authError;
                    }
                }
            }

            for (const user of users) {
                const lowerCaseClave = 'abcdefghijklmnopqrstuvwxyz';
                const upperCaseClave = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const numberClave = '0123456789';
                const specialCharClave = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
                const allCharsClave =
                    lowerCaseClave +
                    upperCaseClave +
                    numberClave +
                    specialCharClave;
                let generatedPassword = '';
                for (let i = 0; i < 8; i++) {
                    const randomIndex = Math.floor(
                        Math.random() * allCharsClave.length,
                    );
                    generatedPassword += allCharsClave[randomIndex];
                }
                const userData = {
                    nombre: user.nombre,
                    apellidos: user.apellidos,
                    sexo: user.sexo,
                    edad: user.edad,
                    telefono: user.telefono,
                    email: user.email,
                    dni: user.dni,
                    fecha_activacion: user.fecha_activacion,
                    ocupacion: user.ocupacion,
                    ocupacion2: user.ocupacion2,
                    ocupacion3: user.ocupacion3,
                    nivel_estudios: user.nivel_estudios,
                    especialidad: user.especialidad,
                    formacion_complementaria: user.formacion_complementaria,
                    experiencia_laboral: user.experiencia_laboral,
                    disponibilidad: user.disponibilidad,
                    carnet: user.carnet,
                    vehiculo: user.vehiculo,
                    localidad: user.localidad,
                    necesidad_formativa: user.necesidad_formativa,
                    observaciones: user.observaciones,
                    programa_oal: user.programa_oal,
                    año_programa_oal: user.año_programa_oal,
                    programa_oal_2: user.programa_oal_2,
                    año_programa_oal_2: user.año_programa_oal_2,
                    programa_oal_3: user.programa_oal_3,
                    año_programa_oal_3: user.año_programa_oal_3,
                    cv: '',
                    estado: 'activo',
                    usertype: 'usuario',
                    orientador: user.added_by_user,
                    clave: generatedPassword,
                };

                if (
                    user.added_by_user == 'Yolanda' ||
                    user.added_by_user == 'AiramSandra'
                ) {
                    userData.orientador = 'Sandra';
                }

                if (
                    user.added_by_user == 'Isaias' ||
                    user.added_by_user == 'Nerea'
                ) {
                    userData.orientador = 'Susana';
                }

                try {
                    await addDoc(collection(db, 'usuarios'), userData);
                } catch (error) {
                    console.error(
                        'Error al exportar el usuario a Firebase:',
                        error,
                    );
                }
            }

            setFinalized(true);
        } catch (error) {
            console.error('Error exporting users to Firebase:', error);
        }
    };
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Exportar usuarios a Firebase" />
                <div className="container py-5">
                    <h1>
                        Aviso, se recomienda que si no se tiene idea, vuelve a
                        Índice.
                        <p>
                            Esta página es para subir todos los usuarios a
                            Firebase, si no se tiene idea de lo que es Firebase,
                            no se recomienda seguir en esta página.
                        </p>
                    </h1>
                    <button
                        className="btn btn-large btn-warning mt-3"
                        onClick={handleExportUsers}
                    >
                        Añadir usuarios a Firebase
                    </button>
                    {finalized && (
                        <div className="alert alert-success mt-3">
                            Todos los usuarios se han exportado a Firebase.
                        </div>
                    )}
                </div>
            </AuthenticatedLayout>
        </>
    );
}
