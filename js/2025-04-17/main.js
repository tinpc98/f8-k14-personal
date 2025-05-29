// document.write('<h1>hello anh em</h1>')
// document.write('hello anh em')
// console.log('hello anh em')
// console.log('1234', 5678 ) //trong dấu '' là ký tự, khoong trong dau '' là so
// console.log(1+2, 3-6, 3*6, 9/0)

// this is comment
/*
* this is comment
* https://asciiflow.com/#/
* biến: variable
* use to store any temp value(lưu dữ liệu tạm thời)
* store -> ram (lưu tại ram)
* reset -> remove (reset sẽ biến mất)
* declear a variable -> 4 way (khai báo biến có 4 cách)
* var(<2015)
* let / const (>2015 - EC6)
 */

// khai báo biến
/*var a
a = 1
//initial variable (khởi tạo biến)
var b = 1
let c = 1
const d = 1 //hằng so
a = a + 1
c = a + b
console.log(a, b, c, d)
*/
/*
* operator + - * / ( toán tử)
* number + number = number
* number - number = number
* number * number = number
* number / number = number
*
* RAW STRING
* string + string = string
* string - string = NaN (Not A Number) lỗi
* string * string = NaN (Not A Number) lỗi
* string / string = NaN (Not A Number) lỗi
*
* STRING LINK NUMBER
* string + string = string
* string - string = number
* string * string = number
* string / string = number
*
* (*) JS cố gắng đưa phép toán về phép toán hợp lệ -> không nên phụ thuộc vào nó
* */

/*
* lũy thừa
* a ** 2 = a * a
* a ** 3 = a * a * a
* căn
* can bậc 2: a ** (1/2)
* căn bậc 3: a ** (1/3)
*
* chia lấy dư: 10 % 3 = 1
*
* tăng đơn vị của a
*
* */
// let a = 5
// a++
// ++a
// console.log(a++)  //chọn a trước -> sau đó tăng 1 đơn vị
// console.log(++a) //tăng a trước -> sau đó mới chọn a
/*
*phép nhân a vs chính nó
* a = a + 5 -> a += 5
* a = a * 5 -> a *= 5
 */

/*
*toán tử so sánh
* so sánh bằng: ==/=== (* nên  dùng ===)
* lớn hơn: >
* bé hơn: <
* lớn hơn hoặc bằng: >=
* bé hơn hoặc bằng: <=
* so sánh khác: !=/!===
 */

/*
*data type ( dữ liêu)
* string ( chuỗi)
* number ( số)
* bool
* null / undefine / unknown
* objeck
* function
* để kiểm tra data type ta dùng
* typeof <variable>
 */

// const a = 'test'
// console.log(typeof a)

/*
*concat: convert data type
*DataType(<variable>)
*
* string <-> number -> ok
* string -> bool (số + chữ)
*    số ký tự >0 -> true ngược lại false
*
* number -> bool
*   0 -> fase else true
*
* bool -> string
* true -> 'true'
* false -> 'fales'
*
* bool -> number
* true -> 1
* false -> 0
 */
let a = '123'
a = Boolean(a)
console.log(a)






















