import {createStore} from 'redux';

const initState = {
    searchStr: null,
    products: [],
    count: 0,
};

const searchStrReducer = (state = initState.searchStr, action) => {
    if (action.type === 'searchStr/inputting') {
        return action.value
    }
    return state
}

const productReducer = (state = initState.products, action) => {
    if (action.type === 'products/addNew') {
        return [...state, action.value]
    }
    if (action.type === 'products/delete') {
        const index = state.findIndex(e =>e.id === action.value);
        state.splice(index, 1);
        return [...state]
    }
    return state
}

const countReducer = (state = initState.count, action) => {
    if (action.type === 'count/increase') {
        return state + 1
    }

    return state
}

const reducer = (state= initState, action) => {
    return{
        products: productReducer(state.products, action),
        count: countReducer(state.count, action),
        searchStr: searchStrReducer(state.searchStr, action),
    }
}

const store = createStore(reducer)

export {
    store
}