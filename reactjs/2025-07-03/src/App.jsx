import './App.css'
import {store} from './store/index.js'
import {useDispatch, useSelector} from "react-redux";
import {v7} from 'uuid'
import ProductList from "./components/ProductList/index.jsx";
import Search from "./components/Search/index.jsx";
import ProductForm from "./components/ProductForm/index.jsx";
import {useState} from "react";

function App() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleAddClick = () => {
        setEditingProduct(null)
        setIsFormOpen(true);
    }
    const handleEdit = (product) => {
        setEditingProduct(product)
        setIsFormOpen(true);
    }
    const handleCloseForm = () =>{
        setIsFormOpen(false);
        setEditingProduct(null);
    }

  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  const onAddNew = () => {
    const id = v7()
    dispatch({
      type: 'products/addNew',
      value: {
        id, name: `product ${id}`,
      }
    })
  }


  return (
    <>
      <h1>Quan Ly San Pham</h1>
        <button onClick={handleAddClick}>New Product</button>
        <ProductList onEdit={handleEdit} />
        {isFormOpen && (
            <ProductForm editingProduct={editingProduct} onClose={handleCloseForm} />
        )}

    </>
  )
}

export default App
