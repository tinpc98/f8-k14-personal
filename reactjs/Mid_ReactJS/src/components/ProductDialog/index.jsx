import { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../../api.js";

export default function ProductDialog({ product, onClose, onSuccess }) {
    const [form, setForm] = useState({ name: "", price: 0 });

    useEffect(() => {
        if (product) {
            setForm(product);
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id) {
            await updateProduct(form);
        } else {
            await addProduct(form);
        }
        onSuccess();
        onClose();
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: 20 }}>
            <h3>{product ? "Sua" : "Them"} sản phẩm</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Ten San Pham"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                    placeholder="Danh Muc"
                    value={form.price}
                    onChange={e => setForm({ ...form, price: +e.target.value })}
                />
                <input
                placeholder="So Thu Tu"
                value={form.price}
                onChange={e => setForm({ ...form, price: +e.target.value })}/>
                <button type="submit">Lưu</button>
                <button type="button" onClick={onClose}>Huy</button>
            </form>
        </div>
    );
}
