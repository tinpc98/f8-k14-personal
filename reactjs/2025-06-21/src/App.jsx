import { useState } from 'react';
import './App.css';
import { Login } from './components';

function App() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="app">
            {!showLogin && (
                <div>
                    <h1>Trang Chu</h1>
                    <button onClick={() => setShowLogin(true)}>Dang Nhap</button>
                </div>
            )}
            {showLogin && (
                <Login
                    onLoginSuccess={() => {
                        alert('Dang Nhap Thanh Cong!');
                        setShowLogin(false);
                    }}
                />
            )}
        </div>
    );
}

export default App;
