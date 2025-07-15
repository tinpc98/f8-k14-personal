export default function FilterBar ({
    priceFilter,
    setBrandFilter,
    categoryFilter,
    setCategoryFilter,
    brandFilter,
    setPriceFilter
}){
    return (
        <div>
            <label>
                Giá:
                <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                    <option value="all">Tất cả</option>
                    <option value="lt500">Dưới 500K</option>
                    <option value="bt500to1m">500K - 1 triệu</option>
                    <option value="gt1m">Trên 1 triệu</option>
                </select>
            </label>

            <label>
                Loại:
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="all">Tất cả</option>
                    <option value="Áo">Áo</option>
                    <option value="Quần">Quần</option>
                    <option value="Phụ kiện">Phụ kiện</option>
                </select>
            </label>

            <label>
                Thương hiệu:
                <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
                    <option value="all">Tất cả</option>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Puma">Puma</option>
                </select>
            </label>
        </div>
    )
}