const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "John", age: 27, status: 'working' },
    { id: 4, name: "David", age: 23, status: 'quited' },
    { id: 5, name: "Eve", age: 20, status: 'working' },
];


const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000  },
    { id: 3, name: "Tab", price: 2000  },
    { id: 4, name: "PC", price: 800  },
    { id: 5, name: "Monitor", price: 1500  },
]


const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 6, employeeId: 4, productId: 1, quantity: 1 },
    { id: 7, employeeId: 5, productId: 3, quantity: 2 },
];


/*
Bai: 1
Lay ra ds nhan vien dang lam viec


Bai 2:
Lay ra nhan vien lon tuoi nhat


Bai 3:
Lay ra san phan gia re nhat


Bai 4:
Tim ra san phan ban chay nhat ( ban nhieu nhat ve bat so luong )


Bai 5:
Tim ra san phan doanh thu cao nhat ( nhieu tien nhat )


Bai 6:
Tim ra nhan vien ban nhieu hang nhat


Bai 7:
Tim ra nhan vien co doanh thu cao nhat


Bai 8:
Tim ra san pham ban co doanh thu nhat cua moi nhan vien


Bai 9:
Gia su nhan vien se nhan duoc hoa hong la 3%
-> tim hoa hong cho moi nhan vien


Bai 10:
Sap xep nhan vien theo thu tu giam dan theo doanh thu
* */




// // bai 1: lay ra ds nhan vien dang lam viec
// const workingEmployees = employees.filter(employee => employee.status === 'working');
//     console.log(workingEmployees);
//
// // bai 2: lay ra nhan vien tuoi lon nhat
// const ageEmployees = employees.reduce((maxEmployees, currentEmployees) => {
//     return currentEmployees.age > maxEmployees.age ? maxEmployees : currentEmployees;
// });
// console.log(ageEmployees)
//
// // bai 3: Lay ra san phan gia re nhat
// const cheapestProducts = products.reduce((minProducts, currentProduct) => {
//     return currentProduct.price > minProducts.price ? minProducts : currentProduct;
// });
// console.log(cheapestProducts);

// // bai 4: Tim ra san phan ban chay nhat ( ban nhieu nhat ve bat so luong )
// const productsSales = {}
//
// for(let i = 0; i < orders.length; i++){
//     const order = orders[i];
//     const productId = order.productId;
//     const quantity = order.quantity;
//
//     if(productsSales[productId]){
//         productsSales[productId] += quantity;
//     } else {
//         productsSales[productId] = quantity;
//     }
// }
//
// let bestSale = null;
// let maxQuantity = 0;
//
// for(let id in productsSales){
//     if (productsSales[id] > maxQuantity) {
//         maxQuantity = productsSales[id];
//         bestSale = parseInt(id);
//     }
// }
//
// let bestSaleProduct = null;
//
// for (let i = 0; i < products.length; i++){
//     if(products[i].id === bestSale){
//         bestSaleProduct = products[i];
//         break;
//     }
// }
//
// console.log(bestSaleProduct);

//Bai 5: Tim ra san phan doanh thu cao nhat ( nhieu tien nhat )
const bestProducts = {}

for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    const productId = order.productId;
    const quantity = order.quantity;

    if(bestProducts[productId]){
        bestProducts[productId].productId += productId;
    }
    else {
        bestProducts[productId].productId = productId;
    }
}
let topProducts = null;
let maxQuantity = 0

for (let id in bestProducts) {
    if(bestProducts >= maxQuantity){
        topProducts = bestProducts[id];
        topProducts = parseInt(id)
    }
}
let bestSalesProducts = null
for (let i = 0; i < products.length; i++) {
    if(products[i].productId === maxQuantity){
        bestSalesProducts = bestProducts[i];
        break
    }
}
console.log(bestSalesProducts);

// // bai 6: Tim ra nhan vien ban nhieu hang nhat
// const employeeSales = {};
//
// for (let i = 0; i < orders.length; i++) {
//     const order = orders[i];
//     const employeeId = order.employeeId;
//     const quantity = order.quantity;
//
//     if (employeeSales[employeeId]) {
//         employeeSales[employeeId] += quantity;
//     } else {
//         employeeSales[employeeId] = quantity;
//     }
// }
//
// let topEmployeeId = null;
// let maxQuantity = 0;
//
// for (let id in employeeSales) {
//     if (employeeSales[id] > maxQuantity) {
//         maxQuantity = employeeSales[id];
//         topEmployeeId = parseInt(id);
//     }
// }
//
// let topEmployee = null;
//
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].id === topEmployeeId) {
//         topEmployee = employees[i];
//         break;
//     }
// }
//
// console.log(topEmployee);

//Bai 10: Sap xep nhan vien theo thu tu giam dan theo doanh thu
