import './App.css';
import {FTable, EmployeeDialog} from "./components";
import {Button} from "@mui/material";
import {useState, useEffect} from "react";

const API_URL = 'http://localhost:3000/employees';

function App() {
    const [employees, setEmployees] = useState([]);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [curEmployee, setCurEmployee] = useState({id: null, name: '', age: '', address: ''});

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    const handleSave = (employee) => {
        if (employee.id) {
            // PUT cập nhật
            fetch(`${API_URL}/${employee.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(employee)
            }).then(() => {
                setEmployees(prev => prev.map(emp => emp.id === employee.id ? employee : emp));
                setIsOpenDialog(false);
            });
        } else {
            // POST thêm mới
            fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(employee)
            })
                .then(res => res.json())
                .then(newEmp => {
                    setEmployees(prev => [...prev, newEmp]);
                    setIsOpenDialog(false);
                });
        }
    };

    const handleDelete = (id) => {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => setEmployees(prev => prev.filter(emp => emp.id !== id)));
    };

    const handleEdit = (emp) => {
        setCurEmployee(emp);
        setIsOpenDialog(true);
    };

    const columns = [
        {name: 'id', text: 'Id'},
        {name: 'name', text: 'Name'},
        {name: 'age', text: 'Age'},
        {name: 'address', text: 'Address'},
        {name: 'action', text: ''}
    ];

    return (
        <>
            <FTable columns={columns} rows={employees} onEdit={handleEdit} onDelete={handleDelete} />
            <Button variant="outlined" onClick={() => {
                setCurEmployee({id: null, name: '', age: '', address: ''});
                setIsOpenDialog(true);
            }}>
                Add new
            </Button>

            <EmployeeDialog
                open={isOpenDialog}
                employee={curEmployee}
                onClose={() => setIsOpenDialog(false)}
                onSave={handleSave}
            />
        </>
    );
}

export default App;
