import ExcelOptions from '@/Components/Views/ExcelOptions.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { Head } from '@inertiajs/react';

export default function Excel() {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Exportar/Importar" />

                <ExcelOptions />
            </AuthenticatedLayout>
        </>
    );
}
