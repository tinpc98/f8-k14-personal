import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Login } from './components';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const fetchPosts = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');
            const response = await axios.get(
                'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/post/',
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            setPosts(response.data);
        } catch (error) {
            if (error.response?.status === 401) {
                await handleRefresh();
            } else {
                setErrorMsg(error.response?.data?.detail || 'Lỗi khi tải bài đăng!');
            }
        }
    };

    const handleRefresh = async () => {
        try {
            const refresh = localStorage.getItem('refresh_token');
            const response = await axios.post(
                'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/get_new_token/',
                { refresh }
            );
            localStorage.setItem('access_token', response.data.access_token);
            fetchPosts();
        } catch (error) {
            setErrorMsg('Hết hạn đăng nhập, vui lòng đăng nhập lại!');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Post</h1>
            {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

const App = () => {
    const isLoggedIn = !!localStorage.getItem('access_token');

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/post" /> : <Login />} />
                <Route path="/post" element={isLoggedIn ? <Post /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;

