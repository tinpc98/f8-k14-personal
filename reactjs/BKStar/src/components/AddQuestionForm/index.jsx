import {
    Box, Button, Grid, Paper, TextField, Typography, MenuItem, RadioGroup,
    FormControlLabel, Radio
} from "@mui/material";

export default function AddQuestionForm() {
    return (
        <Box p={3}>
            <Typography fontWeight="bold" fontSize={18} mb={3}>
                Danh sách bài thi &gt; ĐỀ THI LẦN 1 &gt; Thêm đề bài
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 4, minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined">⬆ Tải lên từ máy</Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Tên đề *" placeholder="Nhập tên đề" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Mã đề *" placeholder="Nhập mã đề" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Thời gian làm bài (phút) *" placeholder="Nhập thời gian" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Số câu *"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1 } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontWeight="bold" mb={1}>Câu 1:</Typography>
                                <TextField
                                    fullWidth
                                    select
                                    label="Chọn 1 đáp án"
                                    defaultValue=""
                                >
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                    <MenuItem value="C">C</MenuItem>
                                    <MenuItem value="D">D</MenuItem>
                                </TextField>

                                <RadioGroup row sx={{ mt: 2 }}>
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="C" control={<Radio />} label="C" />
                                    <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained">Tạo đề bài</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

        </Box>
    )
}