import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar/index.jsx";
import ClassOverview from "../components/ClassOverview";
import Header from "../components/Header/index.jsx";
import {useParams,Outlet} from "react-router-dom";

export default function ClassroomPage() {
    const { classId} = useParams();
    return (
        <>
            <Header/>
            <Box display="flex">
                <Sidebar classId={classId} />

                <Box flex={1} p={3}>
                    <Outlet />
                </Box>
            </Box>
        </>

    )
}