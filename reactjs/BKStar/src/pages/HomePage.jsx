import React,{useState} from "react";
import Header from "../components/Header";
import ClassListDialog from "../components/ClassListDialog/index.jsx";
import AddClassPage from "../components/AddClassPage/index.jsx";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default function HomePage(){
    const [openDialog, setOpenDialog] = useState(true);
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <ClassListDialog />

        </>

    )
}