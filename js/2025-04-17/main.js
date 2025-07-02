// ==========================
// 1. Khai báo biến
// ==========================
var a = 10;
let b = 2;
let c = 'vanh';
const d = 3;

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);
console.log('d:', d);

// ==========================
// 2. Toán tử số học
// ==========================
console.log('a + b =', a + b);
console.log('a - b =', a - b);
console.log('a * b =', a * b);
console.log('a / b =', a / b);

// ==========================
// 3. Toán tử với chuỗi
// ==========================
let name = 'viet_anh';
let vanh = 'ha_';

console.log('Nối chuỗi:', name + vanh);
console.log('Trừ chuỗi:', name - vanh); // NaN
console.log('Nhân chuỗi:', name * vanh); // NaN
console.log('Chia chuỗi:', name / vanh); // NaN

// ==========================
// 4. String chứa số
// ==========================
let e = '12324';
let f = '123';

console.log('e + f =', e + f); // Nối chuỗi
console.log('e - f =', e - f); // Tự ép kiểu
console.log('e * f =', e * f);
console.log('e / f =', e / f);

// ==========================
// 5. Lũy thừa
// ==========================
console.log('a ** 2 =', a ** 2);
console.log('a ** 3 =', a ** 3);
console.log('Căn bậc hai của a =', a ** (1 / 2));

// ==========================
// 6. Chia lấy dư
// ==========================
console.log('a % d =', a % d);
console.log('a % b =', a % b);

// ==========================
// 7. Toán tử tăng giảm
// ==========================
let g = 10;
console.log('g++ + 5 =', g++ + 5); // g = 10 + 5 = 15, rồi g tăng thành 11
console.log('++g + 5 =', ++g + 5); // g = 12 + 5 = 17

// ==========================
// 8. Kiểm tra kiểu dữ liệu
// ==========================
let h = 10;
let k = 15;

console.log('h > k:', typeof (h > k)); // boolean
console.log('Kiểu của a:', typeof a); // number

// ==========================
// 9. Ép kiểu
// ==========================

// String -> Number
let x = 'abcdfs';
x = Number(x);
console.log('String "abcdfs" thành số:', x); // NaN

// String -> Boolean
let y = '0';  // chuỗi khác rỗng => true
let z = '';   // chuỗi rỗng => false

console.log('Boolean("0"):', Boolean(y)); // true
console.log('Boolean(""):', Boolean(z)); // false

// Boolean -> Number
let i = true;
let j = false;

console.log('Number(true):', Number(i)); // 1
console.log('Number(false):', Number(j)); // 0

// Boolean -> String
let n = true;
let o = false;

console.log('String(true):', String(n)); // "true"
console.log('String(false):', String(o)); // "false"
