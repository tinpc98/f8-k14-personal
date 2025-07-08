import {useEffect, useState} from "react";
import {getProducts, deleteProduct, updateProduct} from "../../api.js";
import FCommonTable from "../FCommonTable/index.jsx";
import ProductDialog from "../ProductDialog/index.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState({});
    const [openDialog, setOpenDialog] = useState(false);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    const handleEdit = (id) => {
        setEditProduct(id);
        setOpenDialog(true);
    }

    const handleDelete = async (id) => {
        await deleteProduct(id);
        fetchProducts();
    }

    return (
        <>
            <button onClick={() => {
                setEditProduct(null);
                setOpenDialog(true);
            }}>Them San Pham
            </button>

            <FCommonTable
                data={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {openDialog && (
                <ProductDialog
                    product={editingProduct}
                    onClose={() => setOpenDialog(false)}
                    onSuccess={fetchProducts}
                />
            )}
        </>
    );
}
