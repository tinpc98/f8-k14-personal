import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct, updateProduct} from "../../store/action.js";
import {v4 as uuidv4} from "uuid";

export default function ProductFrom({editingProduct, onClose}) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        id:'',
        name:'',
        price:'',
        quantity:'',
        unit:'',
    })

    //neu la sua thi dien du lieu vao form
    useEffect(()=>{
        if(editingProduct){
            setFormData(editingProduct)
        }
        else { //reset from khi them moi
            setFormData({
                id:'',
                name:'',
                price:'',
                quantity:'',
                unit:'',
            })

        }
    },[editingProduct])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editingProduct){
            dispatch(updateProduct(formData))
        }
        else {
            const newProduct = {
                ...formData,
                id: uuidv4(),
                price: Number(formData.price),
                quantity: Number(formData.quantity),
            }
            dispatch(addProduct(newProduct));
        }
        onClose()
    }
    return (
        <div style={popupStyles.backdrop}>
            <div style={popupStyles.popup}>
                <h3>{editingProduct ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                    name='name'
                    placeholder='Ten San Pham'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                    <input
                    name='price'
                    placeholder='Gia Ban'
                    value={formData.price}
                    onChange={handleChange}
                    required
                    />
                    <input
                    name='quantity'
                    placeholder='So Luong'
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    />
                    <input
                        name='unit'
                        placeholder='Don Vi'
                        value={formData.unit}
                        onChange={handleChange}
                        required
                    />
                    <div style={{maginTop: '1rem'}}>
                        <button type='submit'>Save</button>
                        <button type= 'button' onClick={onClose} style={{maginLeft: 8}}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const popupStyles = {
    backdrop: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    popup: {
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '300px',
    }
}