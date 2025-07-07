import {ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, SET_SEARCH_QUERY} from "./actionTypes.js";

const initialProductReducer = []

export const productReducer = (state = initialProductReducer, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products:[...state.products,action.payload],
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.map((p) =>
                p.id === action.payload.id ? {...p, ...action.payload}:p
                )
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((p) =>
                p.id === action.payload.id? {...p, ...action.payload}:p
                )
            }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            }
        default:
            return state;
    }
}