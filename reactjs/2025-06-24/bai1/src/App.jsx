import { useState, useMemo } from 'react'
import './App.css'
import {FilterBar, ProductList} from "./components/index.js";

const products = [
  { id: 1, name: 'Áo thun thể thao', price: 350000, category: 'Áo', brand: 'Nike' },
  { id: 2, name: 'Quần jogger', price: 750000, category: 'Quần', brand: 'Adidas' },
  { id: 3, name: 'Nón lưỡi trai', price: 250000, category: 'Phụ kiện', brand: 'Puma' },
  { id: 4, name: 'Áo hoodie', price: 1200000, category: 'Áo', brand: 'Nike' },

];

function App() {
  const [priceFilter, setPriceFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [brandFilter, setBrandFilter] = useState('all')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchPrice =
          priceFilter === 'all' ||
          (priceFilter === 'lt500' && product.price <= 500000) ||
          (priceFilter === 'bt500to1m' &&
          product.price >= 500000 &&
          product.price <= 1000000) ||
          (priceFilter === 'gt1m' && product.price > 1000000)

      const matchCategory =
          categoryFilter === 'all' || product.category === categoryFilter

      const matchBrand =
          brandFilter === 'all' || product.brand === brandFilter

      return matchPrice && matchCategory && matchBrand
    })
  }, [priceFilter, categoryFilter, brandFilter])

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <FilterBar
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        brandFilter={brandFilter}
        setBrandFilter={setBrandFilter}
        />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
