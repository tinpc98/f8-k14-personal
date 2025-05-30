/* tinh tien taxi


tính tiền taxi
         │
         │ <= 1km
         ├────────────►  ===15000đ
         │
         │ <= 5km
         ┼───────────► = 13500đ
         │
         │>5km = 11000đ
         ▼
   số km > 120km giảm 10% số tiền

 */
/*
const km = 12
let total = 0
if (km <= 1) {
    total = 15000
}
else if (km <= 5) {
    total = 15000 + (km - 1) * 13500
}
else {
    total = 15000 + (4 * 13500) + (km - 5) * 11000
}
if (km > 120) {
    total = total * 0.9
}
console.log(`so km da di: ${km}km`)
console.log(`tong tien: ${total}đ`)
*/
/*---------------------------------------------------------------------------------*/

/*tinh tien dien

 tinh tiền điện
       │
       │ 0 ->50kWh
       ├─────────────► 1678
       │ 51 -> 100kwh
       ┼─────────────► 1734
       │ 101 -> 200kwh
       ┼─────────────► 2014
       │
       │201 -> 300kwh
       ┼─────────────► 2536
       │
       │301 -> 400kwh
       ├─────────────► 2834
       │
       │
       │
       │>=401kwh
       │
       │
       ▼
       2927

 */
/*
const kwh = 100
total = 0
if (kwh <= 50) {
    total = kwh * 1678
}
else if (kwh <= 100){
    total = 50 * 1678 + (kwh - 50) * 1734
}
else if (kwh <= 200){
    total = 50 * 1678 + 100 * 1734 + (kwh - 100) * 2014
}
else if (kwh <= 300){
    total = 50 * 1678 + 100 * 1734 + 100 * 2014 + (kwh - 200) * 2536
}
else if (kwh <= 400){
    total = 50 * 1678 + 100 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834
}
else {
    total = 50 * 1678 + 100 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (kwh - 400) * 2927
}
console.log(`so kwh da di: ${kwh}kwh`)
console.log(`tong tien: ${total}đ`)

 */
/*-----------------------------------------------------------------------------------*/
/* Tính giá trị biểu thức
S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)
 */
/*
const n = 10
let total = 0
for (let i = 1; i <= n; i++) {
    total = total + i * (i + 1)
}
console.log(`tong: ${total}`)

 */
/*-----------------------------------------------------------------------------------*/
/*
Viết hàm kiểm tra số nguyên tố
Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?

    Hàm có 1 tham số là số cần kiểm tra
Hàm có giá trị trả về
Gọi hàm trong câu điều kiện if else
*/
/*
function isPrime(n) {
    if (n < 2) return false

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
const number = 13
if (isPrime(number)) {
    console.log(`${number} la so nguyen to`)
}
else {
    console.log(`${number} khong la so nguyen to`)
}
 */
/*-----------------------------------------------------------------------------------*/
/* ve bang cuu chuong*/
for (let i = 2; i <= 9; i++) {
    console.log(`\n Bang cuu chuong ${i}`)
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}


