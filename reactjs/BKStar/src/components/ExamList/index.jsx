import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useState } from "react";
import dummyExams from "../../data/dummyExams";
import {useNavigate, useParams} from "react-router-dom";

export default function ExamList() {
    const navigate = useNavigate();
    const {classId} = useParams();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredExams = dummyExams.filter(exam =>
        exam.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const ongoingExams = filteredExams.filter(exam =>exam.status === "running");
    const upcomingExams = filteredExams.filter(exam => exam.status === "upcoming");

    const renderExamItem = (exam) => (
        <Box
            key={exam.id}
            onClick={() => navigate(`/classroom/${classId}/exams/${exam.id}`)}
            sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                p: 2,
                mb: 2,
                bgcolor: "#fff",
                boxShadow: 1,
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" }
            }}

        >
            <InsertDriveFileIcon sx={{ fontSize: 40, color: '#03a9f4', mr: 2 }} />
            <Box>
                <Typography fontWeight="bold">{exam.title}</Typography>
                <Typography fontSize={14}>Ngày bắt đầu: {exam.startDate}</Typography>
            </Box>
        </Box>
    )
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h5" fontWeight="bold">Danh sách Bài thi</Typography>

                <Box display="flex" gap={2}>
                    <TextField
                        placeholder="Tìm kiếm"
                        size="small"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>
                        + Tạo bài thi
                    </Button>
                </Box>
            </Box>

            <Box mb={2}>
                <Typography fontWeight="bold" mb={1}>Bài thi đang diễn ra</Typography>
                <Grid container spacing={2}>
                    {ongoingExams.map(exam => (
                        <Grid item xs={12} sm={6} md={4} key={exam.id}>
                            {renderExamItem(exam)}
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box mt={4}>
                <Typography fontWeight="bold" mb={1}>Bài thi chưa bắt đầu</Typography>
                <Grid container spacing={2}>
                    {upcomingExams.map(exam => (
                        <Grid item xs={12} sm={6} md={4} key={exam.id}>
                            {renderExamItem(exam)}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}