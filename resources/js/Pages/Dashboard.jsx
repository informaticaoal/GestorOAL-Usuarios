import CreateUserForm from '@/Components/Views/CreateUserForm';
import ModifyUserForm from '@/Components/Views/ModifyUserForm';
import WelcomeModal from '@/Components/WelcomeModal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Dashboard = ({ usuariosOAL, contadorUsuarios }) => {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Índice" />

                {/* Modal de bienvenida */}
                <WelcomeModal />

                {/* Formulario de creación de usuarios */}
                <CreateUserForm />

                {/* Formulario de modificación de usuarios */}
                <ModifyUserForm
                    contadorUsuarios={contadorUsuarios}
                    usuariosOAL={usuariosOAL}
                />
            </AuthenticatedLayout>
        </>
    );
};

export default Dashboard;
