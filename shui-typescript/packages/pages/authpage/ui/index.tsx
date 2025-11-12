import './index.css';
import { LoginForm } from '@shui/loginform';
import { RegisterForm } from '@shui/registerform';
import { useState } from 'react';
import note from '/sticky-note.png';

export const AuthPage = () => {
    const [formDisplay, setFormDisplay] = useState('login');

    return (
        <section className="page auth-page">
            <h1 className="auth-page__title"><img width="48" height="48" src={ note } alt="writing-down"/> Shui Notes</h1>
            <h2 className="auth-page__subtitle">Share your thougts with colorful notes!</h2>
            <section className="auth">
                <section>

                    <h3 className="auth__title">Get Started</h3>
                    <h4 className="auth__subtitle">Join the colorful conversation</h4>
                </section>
                <section className="auth__tabs-bar">
                    <div
                        className="auth__tabs-highlight"
                        style={{
                        transform: formDisplay === "login" ? "translateX(0)" : "translateX(100%)",
                        }}
                    />
                    <h3
                        className="auth__tabs-trigger"
                        onClick={() => setFormDisplay("login")}
                    >
                        Login
                    </h3>
                    <h3
                        className="auth__tabs-trigger"
                        onClick={() => setFormDisplay("register")}
                    >
                        Register
                    </h3>
                </section>
                {
                    formDisplay === 'login'
                    ? <LoginForm />
                    : <RegisterForm setFormDisplay={ setFormDisplay } />
                }
            </section>
        </section>
    )
}   
