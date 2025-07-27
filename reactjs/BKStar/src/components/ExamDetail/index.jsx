import { Box, Typography, Button, Grid } from "@mui/material";
import { useParams, useNavigate} from "react-router-dom";
import dummyExams from "../../data/dummyExams";

export default function ExamDetail() {
    const navigate = useNavigate();
    const {classId, examId} = useParams();
    const exam = dummyExams.find(e => e.id.toString() === examId);

    if (!exam) return <Typography>Không tìm thấy bài thi</Typography>

    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={2}
                border="1px solid #ccc"
                borderRadius={2}
                mb={4}
            >
                <Box>
                    <Typography fontWeight="bold">Tên bài thi: {exam.title}</Typography>
                    <Typography>Ngày bắt đầu: {exam.startDate}</Typography>
                    <Typography>Thời gian chờ giữa các đề: 5 phút</Typography>
                </Box>
                <Box display="flex" gap={2}>
                    <Button variant="contained" color="success">Chỉnh sửa</Button>
                    <Button variant="outlined" color="error">Xóa bỏ</Button>
                </Box>
            </Box>

            <Typography fontWeight="bold" mb={2}>Danh sách đề bài</Typography>
            <Grid container spacing={2}>
                {exam.questions.map((q, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box p={2} border="1px dashed #03a9f4" borderRadius={2}>
                            <Typography fontWeight="bold">Đề bài: {q.title}</Typography>
                            <Typography>Mã đề: {q.code}</Typography>
                            <Typography>Thời gian làm bài: {q.duration} phút</Typography>
                            <Typography>Số câu hỏi: {q.questionCount}</Typography>
                            <Typography mt={1} color="primary" fontSize={14} sx={{ cursor: "pointer" }}>✏️ Edit</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box mt={4}>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1976d2" }}
                    onClick={() => navigate(`/classroom/${classId}/exams/${examId}/add-question`)}
                >
                    + Thêm đề bài
                </Button>
            </Box>
        </Box>
    )
}