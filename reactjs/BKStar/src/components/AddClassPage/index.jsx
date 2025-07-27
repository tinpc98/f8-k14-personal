import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";
import Header from "../Header/index.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddClassPage() {
    const [className, setClassName] = useState("");
    const [classCode, setClassCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Tạo lớp:", {className, classCode});
    }
    return (
        <>
            <Header />
            <Paper elevation={3} sx={{p: 4, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Thêm lớp học mới
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Tên lớp học *"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Mã bảo vệ *"
                        value={classCode}
                        onChange={(e) => setClassCode(e.target.value)}
                        margin="normal"
                        required
                    />
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}>
                        <Button onClick={() => navigate("/")} variant="outlined">
                            Hủy
                        </Button>
                        <Button type="submit" variant="contained">
                            Tạo mới
                        </Button>
                    </Box>
                </form>
            </Paper>
        </>
    )
}