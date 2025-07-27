import { Grid } from "@mui/material";
import ActivityPanel from "../ActivityPanel/ActivityPanel.jsx";
import MemberList from "../MemberList/index.jsx";
import ClassInfoCard from "../ClassInfoCard/index.jsx";

export default function ClassOverview() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <ClassInfoCard />
                <MemberList />
            </Grid>
            <Grid item xs={12} md={4}>
                <ActivityPanel />
            </Grid>
        </Grid>
    )
}