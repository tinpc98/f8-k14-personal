import {createSelector} from "@reduxjs/toolkit";

export const selectProduct = (state) => state.products;
export const selectSearchQuery = (state) => state.SearchQuery;

export const selectFilteredProduct = (state) => {
    const query = state.searchQuery?.toLowerCase() || '';
    return state.products.filter(
        (p) =>
            p.name.toLowerCase().includes(query) || p.id.toLowerCase().includes(query),
    )
}