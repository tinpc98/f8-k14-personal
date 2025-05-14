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

//bài 1:Lay ra ds nhan vien dang lam viec
/*

   ┌────────────────────────────────────────────────────────────┐
   │  const employees = [                                       │
   │      { id: 1, name: "Alice", age: 23, status: 'working' }, │
   │      { id: 2, name: "Bob", age: 25, status: 'working' },   │
   │      { id: 3, name: "John", age: 27, status: 'working' },  │
   │      { id: 4, name: "David", age: 23, status: 'quited' },  │
   │      { id: 5, name: "Eve", age: 20, status: 'working' },   │
   └────────────────────────────────────────────────────────────┘
                        │
                        │ quited
                 working┼──────────►  loại khỏi danh sách
                        │
                        ▼
                 thêm vào danh sách

 */
// const workingEmployees = employees.filter(function (employee) {
//     return employee.status === 'working';
// })
// console.log(workingEmployees);
//Bai 2:Lay ra nhan vien lon tuoi nhat
/*

      ┌───────────────────────────────────────────────────────────────┐
      │   const employees = [                                         │
      │       { id: 1, name: "Alice", age: 23, status: 'working' },   │
      │       { id: 2, name: "Bob", age: 25, status: 'working' },     │
      │       { id: 3, name: "John", age: 27, status: 'working' },    │
      │       { id: 4, name: "David", age: 23, status: 'quited' },    │
      │       { id: 5, name: "Eve", age: 20, status: 'working' },     │
      │   ];                                                          │
      └────────────────────────────────┬──────────────────────────────┘
                                       │
                                       │
                                       │
                          duyệt số tuổi│    age < age +1
                                       ┼──────────────────────►     loại
                        của từng người │
                                       │
                                       │
                                       │
                                       ▼
                              lớn tuổi nhất thì

                              cho vào danh sách

 */
// const oldestEmployee = employees.reduce(function (max, current) {
//     return current.age > max.age ? current : max;
// })
// console.log(oldestEmployee)

//Bai 3: Lay ra san phan gia re nhat
/*


         ┌────────────────────────────────────────────────────┐
         │                                                    │
         │    const products = [                              │
         │        { id: 1, name: "Phone", price: 1200 },      │
         │        { id: 2, name: "Laptop", price: 3000  },    │
         │        { id: 3, name: "Tab", price: 2000  },       │
         │        { id: 4, name: "PC", price: 800  },         │
         │        { id: 5, name: "Monitor", price: 1500  },   │
         │                                                    │
         └────────────────────────┬───────────────────────────┘
                                  │
                                  │
                                  │
                duyệt qua từng    │
                                  │
                sản phẩm trong    │   price > price +1
                                  ┼────────────────────────►   loại
                     mảng         │
                                  │
                                  │
                                  │ price min
                                  │
                                  │
                                  ▼
                        sản phẩm giá rẻ nhất

//  */
// const cheapestProduct = products.reduce(function (min, current) {
//     return current.price < min.price ? current : min;
// })
// console.log(cheapestProduct)

//Bai 4: Tim ra san phan ban chay nhat ( ban nhieu nhat ve so luong )
/*

  ┌────────────────────────────────────────────────────────────┐
  │  const orders = [                                          │
  │      { id: 1, employeeId: 1, productId: 4, quantity: 1 },  │
  │      { id: 2, employeeId: 2, productId: 2, quantity: 4 },  │
  │      { id: 3, employeeId: 1, productId: 5, quantity: 1 },  │
  │      { id: 4, employeeId: 3, productId: 1, quantity: 2 },  │
  │      { id: 5, employeeId: 2, productId: 5, quantity: 3 },  │
  │      { id: 6, employeeId: 4, productId: 1, quantity: 1 },  │
  │      { id: 7, employeeId: 5, productId: 3, quantity: 2 },  │
  │  ];                                                        │
  │                                                            │
  └───────────────────────────────┬────────────────────────────┘
                                  │
                                  │
                                  ▼

                 tính tổng tất cả các sản phẩm đã bán ra
                                  │
                                  ▼
                  tìm sản phẩm có số lượng bán nhiều nhất
                                  │
                                  ▼
                  id sản phẩm bán được nhiều nhất
                                  +
                   danh sách sản phẩm
         ┌────────────────────────────────────────────────────┐
         │      const products = [                            │
         │          { id: 1, name: "Phone", price: 1200 },    │
         │          { id: 2, name: "Laptop", price: 3000  },  │
         │          { id: 3, name: "Tab", price: 2000  },     │
         │          { id: 4, name: "PC", price: 800  },       │
         │          { id: 5, name: "Monitor", price: 1500  }, │
         │                         │                          │
         └─────────────────────────┼──────────────────────────┘
                                   │
                                   ▼
                    tìm ra sản phẩm bán được nhiều nhất

 */
/*
const productSales = {};
orders.forEach(order => {
    if (productSales[order.productId]) {
        productSales[order.productId] += order.quantity;
    } else {
        productSales[order.productId] = order.quantity;
    }
});

let maxQuantity = 0;
for (const quantity of Object.values(productSales)) {
    if (quantity > maxQuantity) {
        maxQuantity = quantity;
    }
}

const bestSellingProductIds = Object.keys(productSales)
    .filter(productId => productSales[productId] === maxQuantity)
    .map(id => Number(id));

const bestSellingProducts = products.filter(product =>
    bestSellingProductIds.includes(product.id)
);
console.log(bestSellingProducts);

 */
//bài 5: Tim ra san phan doanh thu cao nhat ( nhieu tien nhat )
/*


          const products + const orders
                        │
                        │
                        ▼
              tính ra số lượng của từng sản phẩm
             X
              giá của sản phẩm

                        │
                        ▼
           tìm ra sản phẩm có doanh thu cao nhất
                        │
                        │
                        ▼
        trả về sản phẩm có do┌┐h thu cao nhất

 */
/*
const productSales = {}
orders.forEach(order => {
    if (productSales[order.productId]) {
        productSales[order.productId] += order.quantity;
    } else {
        productSales[order.productId] = order.quantity;
    }
})
const productRevenue = {}
for (const product of products) {
    const quantity = productSales[product.id] || 0;
    const revenue = product.price * quantity;
    productRevenue[product.id] = revenue;
}
let maxRevenue = 0;
for (const revenue of Object.values(productRevenue)) {
    if (revenue > maxRevenue) {
        maxRevenue = revenue;
    }
}
const bestRevenueProducts = products.filter(product =>
    productRevenue[product.id] === maxRevenue
);
console.log(bestRevenueProducts);
*/
//Bai 6: Tim ra nhan vien ban nhieu hang nhat
/*


                   const orders
                        │
                        │
                        ▼
  tìm id nhân viên và số lượng hàng nhân viên đó bán
                        │
                        │
                        ▼
   tìm số lượng hàng bán ra được nhiều nhất
                        │
                        │
                        ▼
    tìm tất cả nhân viên có số lượng hàng bán ra nhiều nhất
                        │
                        │
                        ▼
    kết hợp với employees tìm ra thông tin chi tiết của nhân viên

 */
/*
const employeeSales = {};
orders.forEach(order => {
    if (employeeSales[order.employeeId]) {
        employeeSales[order.employeeId] += order.quantity;
    }
    else {
        employeeSales[order.employeeId] = order.quantity;
    }
})

let maxQuantity = 0;
for (const quantity of Object.values(employeeSales)) {
    if (quantity > maxQuantity) {
        maxQuantity = quantity;
    }
}
const topEmployeeIds = Object.keys(employeeSales)
    .filter(id => employeeSales[id] === maxQuantity)
    .map(id => Number(id));
const topEmployees = employees.filter(employee =>
    topEmployeeIds.includes(employee.id)
);
console.log(topEmployees);
*/
//Bai 7: Tim ra nhan vien co doanh thu cao nhat
/*

  Duyệt orders, tra productId để biết giá
                    │
                    │
                    ▼
      tính doanh thu
       Doanh thu = product.price * quantity
                    │
                    │
                    ▼
      Cộng dồn doanh thu vào employeeId
                    │
                    │
                    ▼
       Tìm nhân viên có doanh thu cao nhất
                    │
                    │
                    ▼
        Lấy thông tin nhân viên từ employees

 */
/*
const priceMap = {}
products.forEach(product => {
    priceMap[product.id] = product.price;
})
const employeeRevenue = {};
orders.forEach(order => {
    const price = priceMap[order.productId];
    const revenue = price * order.quantity;

    if (employeeRevenue[order.employeeId]) {
        employeeRevenue[order.employeeId] += revenue;
    }
    else {
        employeeRevenue[order.employeeId] = revenue;
    }
})
let maxRevenue = 0;
for (const revenue of Object.values(employeeRevenue)) {
    if (revenue > maxRevenue) {
        maxRevenue = revenue;
    }
}
const topEmployeeIds = Object.keys(employeeRevenue)
    .filter(id => employeeRevenue[id] === maxRevenue)
    .map(id => Number(id));

const topEmployees = employees.filter(emp => topEmployeeIds.includes(emp.id));

console.log(topEmployees);

 */
//Bai 8:Tim ra san pham ban co doanh thu nhat cua moi nhan vien
/*


    Tạo priceMap để tra giá sản phẩm dễ dàng
                     │
                     │
                     ▼
   Duyệt orders, cộng doanh thu theo employeeId + productId
                     │
                     │
                     │
                     ▼
   Với mỗi nhân viên, duyệt qua các sản phẩm họ bán → lấy sản phẩm có doanh thu cao nhất
                     │
                     │
                     │
                     ▼

  Ghép tên sản phẩm từ products vào kết quả

 */
/*
const priceMap = {};
products.forEach(product => {
    priceMap[product.id] = product.price;
});

const employeeProductRevenue = {}; // { employeeId: { productId: revenue } }

orders.forEach(order => {
    const { employeeId, productId, quantity } = order;
    const revenue = priceMap[productId] * quantity;

    if (!employeeProductRevenue[employeeId]) {
        employeeProductRevenue[employeeId] = {};
    }

    if (employeeProductRevenue[employeeId][productId]) {
        employeeProductRevenue[employeeId][productId] += revenue;
    } else {
        employeeProductRevenue[employeeId][productId] = revenue;
    }
});

const result = [];

for (const employeeId in employeeProductRevenue) {
    const productsRevenue = employeeProductRevenue[employeeId];

    let maxRevenue = 0;
    let bestProductId = null;

    for (const productId in productsRevenue) {
        const revenue = productsRevenue[productId];
        if (revenue > maxRevenue) {
            maxRevenue = revenue;
            bestProductId = productId;
        }
    }

    const employee = employees.find(e => e.id === Number(employeeId));
    const product = products.find(p => p.id === Number(bestProductId));

    result.push({
        employeeName: employee.name,
        bestProductName: product.name,
        revenue: maxRevenue
    });
}

console.log("Sản phẩm có doanh thu cao nhất của mỗi nhân viên:");
console.table(result);
*/
/*Bai 9:Gia su nhan vien se nhan duoc hoa hong la 3%
-> tim hoa hong cho moi nhan vien*/
/*

     Duyệt qua orders để tính tổng doanh thu của mỗi nhân viên
     (doanh thu = quantity * product price)
                             │
                             │
                             ▼
           Sau đó, tính hoa hồng = 3% của doanh thu

                             │
                             │
                             ▼
     Lấy tên nhân viên từ employees để hiển thị kết quả rõ ràng

 */
/*
const priceMap = {};
products.forEach(product => {
    priceMap[product.id] = product.price;
});

const employeeRevenue = {}; // { employeeId: totalRevenue }

orders.forEach(order => {
    const revenue = priceMap[order.productId] * order.quantity;
    if (employeeRevenue[order.employeeId]) {
        employeeRevenue[order.employeeId] += revenue;
    } else {
        employeeRevenue[order.employeeId] = revenue;
    }
});

const commissionResult = [];

for (const employeeId in employeeRevenue) {
    const revenue = employeeRevenue[employeeId];
    const commission = revenue * 0.03;

    const employee = employees.find(e => e.id === Number(employeeId));
    commissionResult.push({
        employeeName: employee.name,
        totalRevenue: revenue,
        commission: commission.toFixed(2) + " $"  // làm tròn 2 số lẻ
    });
}

console.log("Hoa hồng 3% của mỗi nhân viên:");
console.table(commissionResult);
*/

//Bai 10: Sap xep nhan vien theo thu tu giam dan theo doanh thu
/*

  Duyệt qua orders, tính tổng doanh thu của từng nhân viên
  (doanh thu = price * quantity)
                            │
                            │
                            │
                            ▼
    Duyệt qua orders, tính tổng doanh thu của từng nhân viên
    (doanh thu = price * quantity)

                            │
                            │
                            │
                            ▼
     Sắp xếp mảng theo doanh thu giảm dần

 */
const priceMap = {};
products.forEach(product => {
    priceMap[product.id] = product.price;
});

const employeeRevenue = {}; // { employeeId: totalRevenue }

orders.forEach(order => {
    const revenue = priceMap[order.productId] * order.quantity;
    if (employeeRevenue[order.employeeId]) {
        employeeRevenue[order.employeeId] += revenue;
    } else {
        employeeRevenue[order.employeeId] = revenue;
    }
});

const revenueList = [];

for (const employeeId in employeeRevenue) {
    const revenue = employeeRevenue[employeeId];
    const employee = employees.find(e => e.id === Number(employeeId));

    revenueList.push({
        employeeName: employee.name,
        totalRevenue: revenue
    });
}

revenueList.sort((a, b) => b.totalRevenue - a.totalRevenue);

console.log("Danh sách nhân viên theo thứ tự doanh thu giảm dần:");
console.table(revenueList);
