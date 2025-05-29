import { Employee } from "./employee.js";
import { Product } from "./product.js";
import { Customer } from "./customer.js";
import { Order } from "./order.js"; // sửa tên file ở đây

const employees = []
const products = []

const createEmployee = ({ id, name, address }) => {
  employees.push(new Employee(id, name, address))
}

const createProduct = ({ id, name, price }) => {
  products.push(new Product(id, name, price))
}

createEmployee({ id: 1, name: 'tets', address: 'addredd test' })
createProduct({ id: 1, name: 'tets', price: 1000 })

for (const product of products) {
  console.log(product.toString())
}

// Tạo khách hàng mới
const customer = new Customer(1, 'Nguyễn Văn A', 'a@gmail.com', '0901234567');
console.log(customer.toString());

// Tạo đơn hàng mới
const order = new Order(101, customer);
order.addProduct(products[0]);
console.log(order.toString());
console.log("Tổng đơn hàng:", order.calculateTotal().toLocaleString('vi-VN'), "VND");