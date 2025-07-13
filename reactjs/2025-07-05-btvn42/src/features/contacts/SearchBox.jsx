import {useState} from "react";

export default function SearchBox({onSearch}) {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }
    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by name"
            style={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                margin: "10px 0",
                borderRadius: "10px",
                border: "1px solid #ccc",
            }}
        />
    )
}