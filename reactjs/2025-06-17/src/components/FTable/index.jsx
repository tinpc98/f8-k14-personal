import {createContext, useContext} from "react";
import {
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    IconButton
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const TableContext = createContext(null);

const Cell = ({row, column}) => {
    const {onEdit, onDelete} = useContext(TableContext);

    return (
        <TableCell>
            {column.name === 'action' ? (
                <>
                    <IconButton onClick={() => onEdit(row)}>
                        <ModeEditOutlineOutlinedIcon color={"success"}/>
                    </IconButton>
                    <IconButton onClick={() => onDelete(row.id)}>
                        <DeleteOutlinedIcon color={"error"}/>
                    </IconButton>
                </>
            ) : (
                <span>{row[column.name]}</span>
            )}
        </TableCell>
    );
}

const Row = ({row}) => {
    const {columns} = useContext(TableContext);

    return (
        <TableRow>
            {columns.map((col) => (
                <Cell key={`f-table-cell-${row.id}-${col.name}`} row={row} column={col}/>
            ))}
        </TableRow>
    );
}

export default function ({columns, rows, onEdit, onDelete}) {
    const provider = {columns, onEdit, onDelete};

    return (
        <TableContext.Provider value={provider}>
            <TableContainer>
                <Table sx={{width: '100%', margin: 'auto'}}>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell sx={{fontWeight: 600}} key={col.name}>{col.text}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <Row key={`f-table-row-${row.id}`} row={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableContext.Provider>
    );
}
