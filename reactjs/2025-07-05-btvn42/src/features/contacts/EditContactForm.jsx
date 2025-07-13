import { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "./ContactSlice.js";

export default function EditContactForm({ contact, onClose }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ ...contact });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editContact({ id: contact.id, data: form }));
        onClose(); // đóng form
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px", backgroundColor: "#f1f1f1", borderRadius: "10px" }}>
            <h3>Sửa liên hệ</h3>
            {["firstName", "lastName", "email", "phone", "avatar"].map((field) => (
                <input
                    key={field}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field}
                    style={{ display: "block", marginBottom: "10px", width: "100%", padding: "10px" }}
                />
            ))}

            <button type="submit">Lưu</button>
            <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>Hủy</button>
        </form>
    );
}
