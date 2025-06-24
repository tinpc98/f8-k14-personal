import { useState } from "react";

export default function Login({ onLoginSuccess }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && password) {
            onLoginSuccess({ name, password });
        } else {
            alert("Please enter your name and password");
        }
    };

    return (
        <div>
            <h2>Dang Nhap</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ho Ten: </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Tai Khoan"
                    />
                </div>
                <div>
                    <label>Mat Khau: </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Mat Khau"
                        type="password"
                    />
                </div>
                <div>
                    <button type="submit">Dang Nhap</button>
                </div>
            </form>
        </div>
    );
}
