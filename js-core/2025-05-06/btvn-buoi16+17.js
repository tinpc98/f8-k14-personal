const customers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Green" },
];

const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
];

const orders = [
    { id: 1001, customerId: 1, items: [{ productId: 101, quantity: 2 }, { productId: 102, quantity: 1 }] },
    { id: 1002, customerId: 2, items: [{ productId: 102, quantity: 1 }, { productId: 103, quantity: 3 }] },
    { id: 1003, customerId: 3, items: [{ productId: 104, quantity: 5 }, { productId: 105, quantity: 2 }] },
    { id: 1004, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 103, quantity: 2 }] },
    { id: 1005, customerId: 5, items: [{ productId: 105, quantity: 10 }] },
    { id: 1006, customerId: 1, items: [{ productId: 101, quantity: 1 }, { productId: 105, quantity: 3 }] },
    { id: 1007, customerId: 2, items: [{ productId: 104, quantity: 2 }, { productId: 103, quantity: 1 }] },
    { id: 1008, customerId: 3, items: [{ productId: 102, quantity: 2 }] },
    { id: 1009, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 102, quantity: 1 }] },
    { id: 1010, customerId: 5, items: [{ productId: 103, quantity: 4 }, { productId: 104, quantity: 3 }] },
];

const productMap = {};
for (const product of products) {
    productMap[product.id] = { name: product.name, price: product.price };
}

const customerData = {};

for (const order of orders) {
    const customerId = order.customerId;
    if (!customerData[customerId]) {
        customerData[customerId] = {
            id: customerId,
            name: customers.find(c => c.id === customerId).name,
            totalSpent: 0,
            productMap: {}
        };
    }

    for (const item of order.items) {
        const product = productMap[item.productId];
        const cost = product.price * item.quantity;

        customerData[customerId].totalSpent += cost;

        if (!customerData[customerId].productMap[product.name]) {
            customerData[customerId].productMap[product.name] = {
                name: product.name,
                quantity: 0,
                totalSpent: 0
            };
        }
        customerData[customerId].productMap[product.name].quantity += item.quantity;
        customerData[customerId].productMap[product.name].totalSpent += cost;
    }
}

const result = Object.values(customerData).map(customer => {
    return {
        id: customer.id,
        name: customer.name,
        totalSpent: customer.totalSpent,
        products: Object.values(customer.productMap)
    };
});

result.sort((a, b) => b.totalSpent - a.totalSpent);

console.log(result);
