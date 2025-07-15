import React from "react";

const formatPrice = (price) => {
    price.toLocaleString('vi-VN', {style: 'currency',currency:'VND' })
}

function ProductList({products}){
    console.log('Render ProductList')
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} - {formatPrice(product.price)} - {product.category} - {product.brand}
                </li>
            ))}
        </ul>
    )
}

export default React.memo(ProductList);