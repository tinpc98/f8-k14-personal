import {
    Box, Typography, Grid, TextField, Button, Avatar, Paper
} from "@mui/material";

export default function UserProfile() {
    return (
        <Box p={3}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
                Thông tin cá nhân
            </Typography>

            <Paper sx={{ p: 4, mb: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={3}>
                    Thông tin cơ bản
                </Typography>

                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {/* Avatar chính giữa */}
                    <Grid item xs={12} md={2} textAlign="center">
                        <Avatar sx={{ width: 100, height: 100, mx: "auto", fontSize: 32 }}>TB</Avatar>
                        <Button size="small" sx={{ mt: 1 }}>📷 Tải lên</Button>
                    </Grid>

                    <Grid item xs={12} md={10}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Tên của bạn" defaultValue="Trần Xuân Bằng" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Trường" placeholder="Nhập tên trường bạn" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Số điện thoại phụ huynh" defaultValue="bangtran.hha@gmail.com" />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Email" defaultValue="bangtran.hha@gmail.com" disabled />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Tên phụ huynh" placeholder="Nhập tên phụ huynh" />
                                    </Grid>
                                    <Grid item xs={12}>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box mt={3} textAlign="right">
                    <Button variant="contained">Lưu lại</Button>
                </Box>
            </Paper>


            <Paper sx={{ p: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={3}>
                    Thay đổi mật khẩu
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="Mật khẩu cũ" type="password" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="Mật khẩu mới" type="password" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="Nhập lại mật khẩu mới" type="password" />
                    </Grid>
                </Grid>
                <Box mt={3} textAlign="right">
                    <Button variant="contained">Lưu lại</Button>
                </Box>
            </Paper>
        </Box>
    );
}
