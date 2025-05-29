export function listOrdersByCustomer(customers, orders) {
    const result = new Map()

    for (const customer of customers) {
        result.set(customer.getId(), {
            customer,
            orders: [],
            totalAmount: 0
        })
    }

    for (const order of orders) {
        const customer = order.getCustomer()
        const entry = result.get(customer.getId())
        entry.orders.push(order)
        entry.totalAmount += order.calculateTotal()
    }

    return result
}

export function displayOrdersByCustomer(orderMap) {
    for (const { customer, orders, totalAmount } of orderMap.values()) {
        console.log(`\nKhách hàng: ${customer.toString()}`)
        console.log(`Số đơn hàng: ${orders.length}`)
        console.log(`Tổng tiền: ${totalAmount.toLocaleString('vi-VN')} VNĐ`)
        console.log("Danh sách đơn hàng:")
        orders.forEach((order, index) => {
            console.log(`${index + 1}. ${order.toString()} (Tổng: ${order.calculateTotal().toLocaleString('vi-VN')} VNĐ)`)
        })
    }
}

export function findHighestValueOrder(orders) {
    if (orders.length === 0) return null
    let maxOrder = orders[0]
    let maxTotal = maxOrder.calculateTotal()

    for (const order of orders) {
        const total = order.calculateTotal()
        if (total > maxTotal) {
            maxTotal = total
            maxOrder = order
        }
    }

    return maxOrder
}
