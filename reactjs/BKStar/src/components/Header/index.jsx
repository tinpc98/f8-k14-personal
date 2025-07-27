import { AppBar, Box, Toolbar, Typography, Button, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = (event) => setAnchorEl(null);

    const handleProfile = () => {
        navigate("/profile");
        handleCloseMenu()
    }

    const handleLogout = () => {
        alert("Đăng xuất thành công")
        handleCloseMenu()
    }

    return (
        <AppBar position="static" elevation={0} sx={{backgroundColor: 'white', color: 'black'}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Box display= "flex" alignItems="center">
                    <img src="/logo.svg" alt="BKStar" style={{ height: 40, marginRight: 8 }} />
                    <Box>
                        <Typography variant="h6" fontWeight="bold" color="#1d4ed8">
                            BK<span style={{ color: '#f59e0b' }}>Star</span>
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Classroom
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                    <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        sx={{ textTransform: 'none', borderColor: '#1d4ed8', color: '#1d4ed8' }}
                    >
                        Tạo lớp
                    </Button>
                    <Button
                        startIcon={<HomeOutlinedIcon />}
                        sx={{ textTransform: 'none', color: '#1d4ed8' }}
                    >
                        Trang chủ
                    </Button>
                    <Box display="flex" alignItems="center" gap={1}>
                        <IconButton onClick={handleOpenMenu}>
                            <Avatar src="/avatar.jpg" sx={{ width: 36, height: 36 }} />
                        </IconButton>
                        <Box>
                            <Typography variant="body2">Trần Xuân Bằng</Typography>
                            <Typography variant="caption" color="text.secondary">Giáo viên</Typography>



                            <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
                                <MenuItem onClick={handleProfile}>Thông tin cá nhân</MenuItem>
                                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}