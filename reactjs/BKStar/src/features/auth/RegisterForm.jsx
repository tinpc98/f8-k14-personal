import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import {useState} from "react";

export default function RegisterForm({onSwitch}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setError] = useState({})

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const validate = () => {
        const newErrors = {}
            if(!formData.name.trim()) newErrors.name = "Vui lòng nhập tên của bạn"
            if(!formData.email.trim()) newErrors.email = "Vui lòng nhập email";
            if(!formData.password.trim()) newErrors.password = "Vui lòng nhập mật khẩu";
            if(formData.confirmPassword !== formData.password)
            newErrors.confirmPassword = "Mật khẩu không khớp";
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs =validate()
        if(Object.keys(errs).length > 0) {
            setError(errs)
            return;
        }
        console.log("Đăng ký thành công:", formData);
        alert("Đăng ký thành công!");
    }

    const handleReset = () => {
        setFormData({name:'',email:'',password:'',confirmPassword:'',})
        setError({})
    }

    return (
       <Container maxWidth="sm">
           <Paper
               elevation={3}
               sx={{
                   mt: 6,
                   p: 4,
                   borderRadius: 4,
                   textAlign: "center",
               }}
           >
               <img src="/bkstar-logo.png" alt="BKStar" width={100} />
               <Typography variant="h5" fontWeight="bold" color="primary" mt={1}>
                   Đăng kí học viên
               </Typography>

               <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                   <TextField
                       fullWidth
                       label="Tên của bạn *"
                       name="name"
                       margin="normal"
                       value={formData.name}
                       onChange={handleChange}
                       error={Boolean(errors.name)}
                       helperText={errors.name}
                   />
                   <TextField
                       fullWidth
                       label="Địa chỉ email *"
                       name="email"
                       margin="normal"
                       value={formData.email}
                       onChange={handleChange}
                       error={Boolean(errors.email)}
                       helperText={errors.email}
                   />
                   <TextField
                       fullWidth
                       label="Mật khẩu *"
                       name="password"
                       type="password"
                       margin="normal"
                       value={formData.password}
                       onChange={handleChange}
                       error={Boolean(errors.password)}
                       helperText={errors.password}
                   />
                   <TextField
                       fullWidth
                       label="Nhập lại mật khẩu *"
                       name="confirmPassword"
                       type="password"
                       margin="normal"
                       value={formData.confirmPassword}
                       onChange={handleChange}
                       error={Boolean(errors.confirmPassword)}
                       helperText={errors.confirmPassword}
                   />

                   <Box mt={3} display="flex" justifyContent="space-between">
                       <Button variant="outlined" color="secondary" onClick={onSwitch}>
                           Quay lại
                       </Button>
                       <Button type="submit" variant="contained" color="primary">
                           Đăng ký
                       </Button>
                   </Box>
               </Box>
           </Paper>
       </Container>
    );
}

