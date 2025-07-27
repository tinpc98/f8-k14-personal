import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const members = [
    { id: 1, name: "Trần Xuân Bằng", role: "Giáo viên" },
    { id: 2, name: "Phạm Thùy Dương", role: "Học sinh" },
    { id: 3, name: "bang", role: "Học sinh" },
    { id: 4, name: "Putin", role: "Học sinh" }
];

export default function MemberList() {
    return (
        <Box p={3}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
                Danh sách thành viên
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell><strong>NO.</strong></TableCell>
                            <TableCell><strong>HỌ TÊN</strong></TableCell>
                            <TableCell><strong>VỊ TRÍ</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member, index) => (
                            <TableRow key={member.id} sx={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
