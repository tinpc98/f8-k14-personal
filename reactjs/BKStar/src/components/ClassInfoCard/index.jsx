import { Box, Typography, Paper, Button, Chip } from "@mui/material";

export default function ClassInfoCard() {
    return (
        <Paper sx={{ p: 2, mb: 2, background:"blue", color: "white" }}>
            <Typography variant="h6" fontWeight="bold">Test Thi Thu</Typography>
            <Typography>Giáo viên: Trần Xuân Bằng</Typography>

            <Box mt={2} display="flex" alignItems="center" gap={2}>
                <Button variant="outlined" size="small" color="while">📎 Sao chép liên kết</Button>
                <Box display="flex" gap={1} color="while">
                    {["P", "B", "PD", "TB"].map((char, idx) => (
                        <Chip key={idx} label={char} />
                    ))}
                </Box>
            </Box>

            <Box mt={2} display="flex" gap={4}>
                <Box>
                    <Typography variant="h6">4</Typography>
                    <Typography>Thành Viên</Typography>
                </Box>
                <Box>
                    <Typography variant="h6">9</Typography>
                    <Typography>Bài Kiểm Tra</Typography>
                </Box>
            </Box>
        </Paper>
        )
}