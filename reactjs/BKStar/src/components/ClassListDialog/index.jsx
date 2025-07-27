import {
    Box,
    Button,
    Grid,
    Paper,
    Typography,
    TextField,
    InputAdornment
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from "react";
import dummyClasses from "../../data/dummyClasses.js";
import {useNavigate} from "react-router-dom";

export default function ClassListSection() {
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    const handleEnterClass = (classId) => {
        navigate(`/classroom/${classId}`);
    }

    const filteredClasses = dummyClasses.filter(cls =>
        cls.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <Box p={4}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
            >
                <Typography variant="h5" fontWeight="bold">
                    Danh sách lớp học
                </Typography>

                <Box display="flex" gap={2}>
                    <TextField
                        variant="outlined"
                        placeholder="Tìm kiếm"
                        size="small"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#fbc02d'}}
                        onClick={() => navigate("/add-class")}
                    >
                        + Thêm lớp học
                    </Button>
                </Box>
            </Box>

            <Grid container spacing={2} >
                {filteredClasses.map((cls) => (
                    <Grid item xs={12} sm={6} md={5} key={cls.id}>
                        <Paper sx={{ p: 2, backgroundColor: '#03a9f4', color: 'white' }}>
                            <Typography variant="h6" fontWeight="bold">
                                {cls.name}
                            </Typography>
                            <Typography fontSize={36} fontWeight="bold">
                                {cls.member_count}
                            </Typography>
                            <Typography>Thành viên tham gia</Typography>

                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography fontSize={14}>Mã lớp: {cls.code}</Typography>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ color: 'white', borderColor: 'white' }}
                                    startIcon={<ContentCopyIcon />}
                                >
                                    Chia sẻ
                                </Button>
                            </Box>

                            <Button
                                variant="text"
                                sx={{
                                    mt: 1,
                                    color: 'white',
                                    textTransform: 'none',
                                    fontSize: 14
                                }}
                                onClick={() => handleEnterClass(cls.id)}
                            >
                                📄 Vào lớp
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
