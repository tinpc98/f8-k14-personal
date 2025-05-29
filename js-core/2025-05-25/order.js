export class Order {
    #id
    #customer
    #products
    #orderDate

    constructor(id, customer, orderDate = new Date()) {
        this.#id = id
        this.#customer = customer
        this.#products = []
        this.#orderDate = orderDate
    }

    addProduct(product) {
        this.#products.push(product)
    }

    removeProduct(productId) {
        this.#products = this.#products.filter(p => p.getId() !== productId)
    }

    calculateTotal() {
        return this.#products.reduce((sum, p) => sum + p.getPrice(), 0)
    }

    getCustomer() {
        return this.#customer
    }

    getProducts() {
        return this.#products
    }

    toString() {
        return `Đơn hàng #${this.#id}, khách hàng: ${this.#customer.getName()}, ngày đặt: ${this.#orderDate.toLocaleDateString('vi-VN')}`;
    }
}
