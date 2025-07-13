import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createContact} from "./ContactSlice.js";

export default function AddContactForm() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        avatar: "",
    })

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.firstName || !form.lastName || form.email || form.phone) {
            setError("Please enter first name and last name");
            return
        }
        dispatch(createContact(form))
        setForm({firstName: '', lastName: '', email: '', phone: '', avatar: '', })
        setError("")
    }

    return (
        <form onSubmit={handleSubmit} style={{
            marginBottom: "30px",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
        }}>
            <h3>Thêm liên hệ mới</h3>
            {error && <p style={{color: "red"}}>{error}</p>}

            {['firstName', 'lastName', 'email', 'phone', 'avatar'].map((item, index) => (
                <input
                    key={field}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    style={{
                        display: "block",
                        width: "100%",
                        marginBottom: "10px",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                    }}
                />
            ))}

            <button type="submit" style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
            }}>
                Save
            </button>

        </form>
    )
}