import {useState, useCallback} from 'react'
import CartItem from './components/CartItem/index.jsx'

const initialCart = [
    { id: 1, name: 'Áo thun', quantity: 1 },
    { id: 2, name: 'Quần jeans', quantity: 2 },
    { id: 3, name: 'Nón lưỡi trai', quantity: 1 },
];

export default function CartUI (){
   const [cart, setCart] = useState(initialCart);

   const handleIncrease = useCallback((id) => {
       setCart((prevCart) =>
           prevCart.map((item) =>
           item.id === id ? { ...item, quantity: item.quantity +1 } : item
           )
       )
   }, [])

    const handleDecrease = useCallback((id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        )
    },[])

    const handDelete = useCallback((id) => {
        const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')
        if (!confirmDelete) return

        setCart((prevCart) =>
            prevCart.map((item) =>prevCart.filter((item) => item.id !== id)
            )
        )
    },[])

    return (
        <div style={{ maxWidth: 480, margin: '0 auto', padding: 20 }}>
            <h2 style={{ textAlign: 'center' }}>🛒 Giỏ hàng</h2>
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onDelete={handDelete}
                />
            ))}
        </div>
    )
}