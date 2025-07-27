import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "./authSlice.js"
import {Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {unwrapResult} from "@reduxjs/toolkit";


export default function LoginForm({onSwitch}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser({email, password}))
        .unwrap()
        .then((result) => {
            console.log("đăng nhập thành công",result);
            navigate("/");
        })
        .catch((error) => {
            console.error("đăng nhập thất bại",error);
        })
    }

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ mt: 8, display: "flex", borderRadius: 4 }}>
                <Box
                sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    flex: 1,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fullWidth: '100%',
                    }}
                >
                    <img src="/loginbg.jpg" alt="login" style={{width:'200px'}}/>
                    <Typography variant="subtitle1" mt={4} align="center">
                        GIEO MẦM SÁNG TẠO...
                        <br />
                        ... DẪN HƯỚNG ĐAM MÊ
                    </Typography>
                </Box>
                <Box
                    sx={{
                        padding: '2rem',
                    }}
                >
                    <Typography variant="h4" color="primary" fontWeight="bold" align="center">
                        BK<span style={{color: 'orange'}}>Star</span>
                    </Typography>
                    <Typography variant="h6" mt={1} mb={2} align='center'>
                        Đăng Nhập
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={3} align='center'>
                        Cung cấp giải pháp học điện cho lớp học thông minh
                    </Typography>
                    <form>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Nhập email"
                            type="email"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Nhập mật khẩu"
                            type="password"
                            variant="outlined"
                        />
                        <Grid container alignItems="center" justifyContent="space-between">
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Ghi nhớ tôi"
                            />
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ cursor: "pointer" }}
                            >
                                Quên mật khẩu?
                            </Typography>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            ĐĂNG NHẬP
                        </Button>
                        <Typography
                            align="center"
                            variant="body2"
                            mt={2}
                            sx={{ cursor: "pointer", color: "#1976d2" }}
                            onClick={onSwitch}
                        >
                            Đăng ký tài khoản cho học viên
                        </Typography>
                    </form>
                </Box>
            </Paper>
        </Container>
    )
}
