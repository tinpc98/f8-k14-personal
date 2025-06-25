import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const styles = {
    body: {
        background: '#c0c0c0',
        fontFamily: "'Raleway', sans-serif",
        color: '#666',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    },
    form: {
        padding: '40px 50px',
        maxWidth: '300px',
        width: '100%',
        borderRadius: '5px',
        background: '#fff',
        boxShadow: '1px 1px 1px #666',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        display: 'block',
        boxSizing: 'border-box',
        margin: '10px 0',
        padding: '14px 12px',
        fontSize: '16px',
        borderRadius: '2px',
        fontFamily: "'Raleway', sans-serif",
        border: '1px solid #c0c0c0',
        transition: '0.2s',
    },
    button: {
        width: '100%',
        height: '48px',
        border: 'none',
        background: '#EF5350',
        color: 'white',
        fontWeight: 'bold',
        transition: '0.2s',
        margin: '20px 0',
        cursor: 'pointer',
    },
    title: {
        margin: '20px 0 0',
        color: '#EF5350',
        fontSize: '28px',
    },
    paragraph: {
        marginBottom: '40px',
    },
    links: {
        display: 'table',
        width: '100%',
        boxSizing: 'border-box',
        borderTop: '1px solid #c0c0c0',
        marginBottom: '10px',
        paddingTop: '10px',
        fontSize: '0.8em',
    },
    linkLeft: {
        display: 'table-cell',
        textAlign: 'left',
        textDecoration: 'none',
        color: '#666',
    },
    linkRight: {
        display: 'table-cell',
        textAlign: 'right',
        textDecoration: 'none',
        color: '#666',
    },
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || password.length < 6) {
            setErrorMsg('Vui lòng nhập đủ thông tin (mật khẩu >= 6 ký tự)');
            return;
        }

        try {
            const response = await axios.post(
                'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/',
                { email, password }
            );
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            navigate('/post');
        } catch (error) {
            setErrorMsg(error.response?.data?.detail || 'Đăng nhập thất bại!');
        }
    };

    return (
        <div style={styles.body}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.title}>Welcome, User!</h2>
                <p style={styles.paragraph}>Please log in</p>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    style={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    minLength={6}
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
                <button type="submit" style={styles.button}>
                    Log In
                </button>
                <div style={styles.links}>
                    <a href="#" style={styles.linkLeft}>Forgot password?</a>
                    <a href="#" style={styles.linkRight}>Sign up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;

