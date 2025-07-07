import {useDispatch, useSelector} from 'react-redux'
import {deleteProduct} from '../../store/action.js'
import {selectFilteredProduct} from "../../store/selectors.js";

export default function ProductTable({onEdit}) {
    const dispatch = useDispatch();
    const products = useSelector(selectFilteredProduct);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    }
    return (
        <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
            <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Giá bán (VNĐ)</th>
                <th>Số lượng</th>
                <th>Đơn vị</th>
                <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {products.length === 0 &&(
                <tr>
                    <td colSpan='6' align='center'>Khong Co San Pham</td>
                </tr>
            )}
            {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.unit}</td>
                    <td>
                        <button onClick={() => onEdit(product)}>Sửa</button>
                        <button onClick={() => handleDelete(product.id)}>Xoá</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>

    )
}