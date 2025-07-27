import {useState} from "react";
import LoginForm from "../../features/auth/LoginForm.jsx";
import RegisterForm from "../../features/auth/RegisterForm.jsx";

export default function AuthModal() {
    const [mode, setMode] = useState('login');

    return (
        <>
            {mode === 'login' ?(
                <LoginForm onSwitch = { () => setMode('register')} />
            ) : (
                <RegisterForm onSwitch = { () => setMode('login')} />
            )}
        </>
    )
}