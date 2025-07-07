import {useDispatch, useSelector} from "react-redux";
import Search from "../../components/Search/index.jsx";
import ProductTable from "../productTable/index.jsx";
import {selectFilteredProduct} from "../../store/selectors.js";

export default function ProductList({onEdit}) {
    const dispatch = useDispatch()
    const products = useSelector(selectFilteredProduct)

    const onDelete = (id) => {
        dispatch({
            type: 'products/delete',
            value: id
        })
    }

    return (
        <>
            <h2>Danh Sach San Pham</h2>
            <table>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.unit}</td>
                    </tr>
                ))}
                </tbody>

            </table>
            <Search/>
            <ProductTable onEdit={onEdit}/>
        </>
    )
}



