import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const [capsLockOn, setCapsLockOn] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            setCapsLockOn(
                event.getModifierState && event.getModifierState('CapsLock'),
            );
        };

        // Escuchar eventos de teclado
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('keyup', handleKeyPress);
        };
    }, []);

    return (
        <GuestLayout>
            <Head title="Inicio de sesión" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    {capsLockOn && (
                        <div className="mt-1 text-sm">
                            <i className="bi bi-exclamation-triangle-fill text-warning me-1"></i>
                            <span
                                className="text-danger fw-bold"
                                style={{ fontVariant: 'small-caps' }}
                            >
                                BLOQ MAYUS Activado
                            </span>
                        </div>
                    )}

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Recordar cuenta
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton
                        className="btn btn-lg btn-primary ms-4"
                        disabled={processing}
                    >
                        Iniciar sesión
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
