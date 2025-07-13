import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const deleteContact = createAsyncThunk (
    'contacts/deleteContact',
    async (id) => {
        const res = await fetch(`https://6871932276a5723aacd24e10.mockapi.io/contacts/${id}`,{
            method: 'DELETE',
        })
        if(!res.ok) {throw new Error('Failed to delete contact.');}
        return id
    }
)
export const editContact = createAsyncThunk (
    'contacts/editContact',
    async ({id, data}) => {
        const res = await fetch(`https://6871932276a5723aacd24e10.mockapi.io/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if(!res.ok){throw new Error('')}
        return await res.json();
    }
)

export const createContact = createAsyncThunk(
    'contacts/createContact',
    async (contactData) => {
        const res = await fetch('https://6871932276a5723aacd24e10.mockapi.io/contacts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contactData),
        })
        if (!res.ok) {throw new Error('Failed to create contact!')}
        return await res.json()
    }
)

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const res = await fetch('https://mockapi.io/api/contacts'); // chỉnh lại URL thật sau
        if (!res.ok) throw new Error('Lỗi khi fetch danh bạ');
        return await res.json();
    }
);

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        list: [],
        status: 'idle', // 'loading', 'succeeded', 'failed'
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(editContact.fulfilled, (state, action) => {
                const index = state.list.findIndex((c) => c.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.list = state.list.filter((c) => c.id !== action.payload.id);
            })
        ;
    },
});

export default contactSlice.reducer;
