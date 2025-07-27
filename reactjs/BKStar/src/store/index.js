import {configureStore, createStore} from "@reduxjs/toolkit";
import authReducer from "../../src/features/auth/authSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})

export default store;