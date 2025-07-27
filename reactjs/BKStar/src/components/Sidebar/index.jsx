import {NavLink} from 'react-router-dom';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import GroupIcon from '@mui/icons-material/Group';
import PeopleIcon from '@mui/icons-material/People';

export default function Sidebar({classId}) {
    const handleEnterClass = (classId) => {
        navigate(`/classroom/${classId}/overview`)
    }

    return (
        <List>
            <ListItemButton component={NavLink} to={`/classroom/${classId}/overview`}>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary="Tổng quan" />
            </ListItemButton>
            <ListItemButton component={NavLink} to={`/classroom/${classId}/exams`}>
                <ListItemIcon><QuizIcon /></ListItemIcon>
                <ListItemText primary="Bài thi" />
            </ListItemButton>
            <ListItemButton component={NavLink} to={`/classroom/${classId}/members`}>
                <ListItemIcon><GroupIcon /></ListItemIcon>
                <ListItemText primary="Thành viên" />
            </ListItemButton>
        </List>
    )
}