import './index.css';
import { type FormEvent, useState } from 'react';
import { Button } from '@shui/button';
import confetti from '/src/assets/confetti.png';
import { validateUsername, validatePassword } from '@shui/utils';
import { useRegisterUserMutation } from '@shui/api';

// Typ för props
interface RegisterFormProps {
    setFormDisplay: (form: 'login' | 'register') => void;
}

export const RegisterForm = ({ setFormDisplay }: RegisterFormProps) => {
    const [validationError, setValidationError] = useState<string | null>(null);
    const [registerUser, { data, isLoading, isError, error}] = useRegisterUserMutation();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const username = (formData.get('username') as string)?.trim();
        const password = (formData.get('password') as string)?.trim();
        const repeatPassword = (formData.get('repeatPassword') as string)?.trim();

        // 🧩 Validering
        const usernameError = validateUsername(username);
        if (usernameError) {
            setValidationError(usernameError);
            return;
        }

        const passwordError = validatePassword(password, repeatPassword);
        if (passwordError) {
            setValidationError(passwordError);
            return;
        }

        try {
            await registerUser({ username, password }).unwrap();
            setFormDisplay('login'); // växla till login-formuläret efter registrering
        } catch (err) {
            console.error('Registration failed:', err);
        }
    };

    // Hjälpfunktion för att visa serverfel
    const getErrorMessage = (error: any): string | null => {
        if (!error) return null;
        if (error.data) return error.data.message || JSON.stringify(error.data);
        if (error.error) return error.error;
        return 'Something went wrong';
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            {validationError && <p className="auth-form__error">{validationError}</p>}
            {/* {isError && <p className="auth-form__error">{getErrorMessage(error)}</p>} */}

            <label className="auth-form__label">
                Username
                <input
                    type="text"
                    name="username"
                    className="auth-form__input"
                    required
                />
            </label>

            <label className="auth-form__label">
                Password
                <input
                    type="password"
                    name="password"
                    className="auth-form__input"
                    required
                />
            </label>

            <label className="auth-form__label">
                Repeat password
                <input
                    type="password"
                    name="repeatPassword"
                    className="auth-form__input"
                    required
                />
            </label>

            <Button
                text={isLoading ? 'Registering...' : 'Register'}
                type="auth-form__button auth-form__button--register"
                icon={confetti}
                disabled={isLoading}
                onClick={ () => console.log('click')}
            />
        </form>
    );
};
