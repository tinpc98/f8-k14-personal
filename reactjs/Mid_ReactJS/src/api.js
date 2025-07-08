const API_URL = "http://localhost:3001/products";

export const getProducts = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
}
export const addProduct = async (product) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {}
    })
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
}
export const updateProduct = async (product) => {
    const response = await fetch(API_URL, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {}
    })
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
}
export const deleteProduct = async (productId) => {
    const response = await fetch(API_URL, {
        method: "DELETE",
    })
    if (!response.ok) throw new Error(response.statusText);

}