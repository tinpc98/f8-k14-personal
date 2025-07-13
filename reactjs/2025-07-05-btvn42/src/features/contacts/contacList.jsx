import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchContacts} from "../../features/contacts/ContactSlice.js";
import SearchBox from "./SearchBox.jsx";
import AddContactForm from "./AddContactForm.jsx";
import EditContactForm from "./EditContactForm.jsx";

export default function ContactList() {
    const dispatch = useDispatch();
    const {list, status, error} = useSelector((state) => state.contacts);
    const [editingContact, setEditingContact] = useState(null);
    const [search, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchContacts());
    },[dispatch]);

    if(status === 'loading') return <p>Loading...</p>;
    if(status === 'error') return <p>Error: {error}</p>;

    const filteredContacts = list.filter((contact) => {
        const fullName = `${contact.name.first} ${contact.name.last}`.toLowerCase();
        const email = contact.email.toLowerCase();
        const query = searchTerm.toLowerCase();

        return fullName.includes(query) || email.includes(query);
    })

    return (
        <div style={{padding:'20px'}}>
            <AddContactForm list={filteredContacts} status={status} />
            <SearchBox onSearch={setSearchTerm}/>
            {editingContact && (
                <EditContactForm
                    contact={editingContact}
                    onClose={() => setEditingContact(null)}
                />
                )}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px'
            }}>
                {filteredContacts.map(contact => (
                    <div key={contact.id} style={{
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2) ',
                    }}>
                        <button>Sửa</button>
                        <button>Xoá</button>
                        <img src={contact.image} alt={contact.name} style={{ width: '100%', borderRadius: '50%' }} />
                        <h3>{contact.name}</h3>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                        <p>{contact.address}</p>
                        <button>Add to Contact</button>
                    </div>
                ))}
            </div>
         </div>
    )
}