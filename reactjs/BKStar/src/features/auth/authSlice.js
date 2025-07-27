import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {loginAPI, registerAPI} from "./authAPI.js";

export const loginUser = createAsyncThunk('auth/login', loginAPI);
export const registerUser = createAsyncThunk('auth/register', registerAPI);

const authSlice = createSlice({
    name: "auth",
    initialState: {user: null, isLoggedIn: false},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
            })
    }
})

export default authSlice.reducer;