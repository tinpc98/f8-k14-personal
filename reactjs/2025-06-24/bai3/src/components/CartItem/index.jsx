import React from "react";

function CartItem ({ item, onIncrease, onDecrease, onDelete }) {
    console.log('Rendering:', item.name)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '10px',
            }}
        >
            <div>
                <div style={{fontWeight: 'bold'}}>{item.name}</div>
                <div style={{fontSize: '13px', color: '#666'}}>
                    Số lượng: {item.quantity}
                </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button
                    onClick={() => onDecrease(item.id)}
                    disabled={item.quantity <= 1}
                >
                    -
                </button>
                <button onClick={() => onDelete(item.id)} style={{ color: "red" }}>
                    Xóa
                </button>
            </div>
        </div>
    )
}

export default React.memo(CartItem);