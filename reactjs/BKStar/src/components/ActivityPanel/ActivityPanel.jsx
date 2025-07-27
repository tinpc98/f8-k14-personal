import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

const dummyActivities = [
    {
        id: 1,
        name: "Bài thi test bài thi",
        date: "13-07-2025 09:39:27"
    },
    {
        id: 2,
        name: "Bài thi test5",
        date: "07-07-2025 02:58:37"
    },
    {
        id: 3,
        name: "Bài thi test 4",
        date: "07-07-2025 02:35:15"
    },
    {
        id: 4,
        name: "Bài thi 123123",
        date: "06-07-2025 09:32:32"
    },
    {
        id: 5,
        name: "Bài thi Thu Thu 5",
        date: "22-04-2024 06:24:49"
    },
    {
        id: 6,
        name: "Bài thi Thi Thu 4",
        date: "30-01-2024 09:04:04"
    },
    {
        id: 7,
        name: "Bài thi Thu Thu Lan 3",
        date: "28-01-2024 10:21:55"
    },
    {
        id: 8,
        name: "Bài thi Thu lan 2",
        date: "26-01-2024 10:59:23"
    }
];

export default function ActivityPanel() {
    return (
        <Box>
            <Typography variant="h6" fontWeight="bold" mb={2}>
                📍 Hoạt động gần đây
            </Typography>
            <List>
                {dummyActivities.map(activity => (
                    <ListItem key={activity.id} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Người dùng" src="https://randomuser.me/api/portraits/men/32.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<span style={{ fontWeight: 500 }}>{activity.name} <span style={{ color: '#1976d2' }}>vừa được tải lên</span></span>}
                            secondary={<Typography variant="caption" color="text.secondary">{activity.date}</Typography>}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
