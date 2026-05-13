import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RegisterIndex() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.password !== data.password_confirmation) {
            setPasswordMatchError('Las contraseñas no coinciden');
            return;
        }

        setPasswordMatchError('');

        console.log('📝 Datos del formulario:', data);

        axios.post('/register', data)
            .then((response) => {
                console.log('✅ Usuario registrado:', response.data);
                reset();
            })
            .catch((error) => {
                console.error('❌ Error al registrar usuario:', error.response.data);
            });
    };

    const [capsLockOn, setCapsLockOn] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            setCapsLockOn(
                event.getModifierState && event.getModifierState('CapsLock'),
            );
        };

        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('keyup', handleKeyPress);
        };
    }, []);

    return (
        <AuthenticatedLayout>
            <Head title="Registrar usuario" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="mb-6 text-2xl font-semibold">
                                Crear nuevo usuario
                            </h2>

                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Nombre"
                                    />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="form-control mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="form-control mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="password"
                                        value="Contraseña"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="form-control mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => {
                                            setData(
                                                'password',
                                                e.target.value,
                                            );
                                            setPasswordMatchError('');
                                        }}
                                    />

                                    {capsLockOn && (
                                        <div className="mt-1 text-sm">
                                            <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i>
                                            <span
                                                className="text-danger fw-bold"
                                                style={{
                                                    fontVariant: 'small-caps',
                                                }}
                                            >
                                                BLOQ MAYUS Activado
                                            </span>
                                        </div>
                                    )}

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirmar contraseña"
                                    />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="form-control mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => {
                                            setData(
                                                'password_confirmation',
                                                e.target.value,
                                            );
                                            setPasswordMatchError('');
                                        }}
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />

                                    {passwordMatchError && (
                                        <div className="mt-2 text-sm text-red-600">
                                            {passwordMatchError}
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-end">
                                    <PrimaryButton
                                        className="btn btn-lg btn-primary ms-4"
                                        disabled={processing}
                                    >
                                        Registrar usuario
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
