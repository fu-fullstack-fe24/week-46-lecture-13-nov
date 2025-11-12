import { type FormEvent, useState } from 'react';
import { validateUsername, validatePassword } from '@shui/utils';
import { Button } from '@shui/button';
import { useNavigate } from 'react-router-dom';
import startup from '/src/assets/startup.png';

export const LoginForm = () => {
    const navigate = useNavigate();
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password, password);

        if (usernameError || passwordError) {
            setValidationError(usernameError || passwordError);
            return;
        }

        try {
            console.log('login successful');
            navigate('/notes');
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    const getErrorMessage = (error: any): string | null => {
        if (!error) return null;
        if (error.data) return error.data.message || JSON.stringify(error.data);
        if (error.error) return error.error;
        return "Something went wrong";
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

            {/* <Button
                text={isLoading ? 'Signing in...' : 'Sign In'}
                type="auth-form__button auth-form__button--login"
                icon={startup}
                disabled={isLoading}
                onClick={ () => console.log('click')}
            />

            <span className="auth-form__separator"></span>

            <Button
                text="Enter as Guest"
                type="auth-form__button auth-form__button--guest"
                icon={startup}
                disabled={isLoading}
                onClick={() => navigate('/notes')}
            /> */}
        </form>
    );
};
