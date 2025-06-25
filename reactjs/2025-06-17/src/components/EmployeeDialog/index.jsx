import {Dialog, DialogContent, DialogTitle, TextField, Button, Stack} from "@mui/material";
import {useEffect, useState} from "react";

export default function EmployeeDialog({open, onClose, employee, onSave}) {
    const [formData, setFormData] = useState(employee);

    useEffect(() => {
        setFormData(employee);
    }, [employee]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = () => {
        onSave(formData);
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{formData.id ? 'Edit Employee' : 'New Employee'}</DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={1}>
                    <TextField
                        fullWidth label="Name" variant="standard"
                        name="name" value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth label="Age" variant="standard"
                        name="age" value={formData.age}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth label="Address" variant="standard"
                        name="address" value={formData.address}
                        onChange={handleChange}
                    />
                    <Button variant="contained" onClick={handleSubmit}>
                        {formData.id ? 'update' : 'ADD NEW'}
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}
