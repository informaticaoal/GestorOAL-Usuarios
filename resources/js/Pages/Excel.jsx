import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';
import ExcelOptions from '@/Components/Views/ExcelOptions.jsx';

export default function Excel() {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Exportar/Importar" />

                <ExcelOptions/>
            </AuthenticatedLayout>
        </>
    );
}
