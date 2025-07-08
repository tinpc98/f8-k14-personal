export default function FCommonTable({ data, onEdit, onDelete }) {
    return (
        <table border={1} style={{ width: '100%', boxShadow: 'none', border: 'none', borderColor: 'gray' }}>
            <thead>
            <tr>
                <th>ID</th><th>Ten San Pham</th><th>Danh Muc</th><th>So Thu Tu</th><th>Thao Tac</th>
            </tr>
            </thead>
            <tbody>
            {data.map(p => (
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.price}</td>
                    <td>
                        <button onClick={() => onEdit(p)}>Sửa</button>
                        <button onClick={() => onDelete(p.id)}>Xóa</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
