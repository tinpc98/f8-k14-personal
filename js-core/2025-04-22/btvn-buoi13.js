/* Bai 1: Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất,
nhỏ nhất trong mảng và vị trí*/
/*
const arr = [1, 5, -3, 9, 10, -5, 7, 16]

let max = arr[0]
let min = arr[0]
let maxIndex = 0
let minIndex = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
    }
    if (arr[i] < min) {
        min = arr[i]
        minIndex = i
    }
}

console.log(`Mang: [${arr.join(', ')}]`)
console.log(`Số lớn nhất: ${max}, vị trí: ${maxIndex}`)
console.log(`Số nhỏ nhất: ${min}, vị trí: ${minIndex}`)
*/


/*Bai 2: Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau
thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý*/
/*
const arr = [1, 3,4,5,1,4,6,9,0,9,5,4,0,2,5,7,5,8,3,2,6,8]

const uniqueArr = arr.filter((value, index) => {
    return arr.indexOf(value) === index
})
console.log(`Mang: [${arr.join(', ')}]`)
console.log(`Mang sau khi xử lý: [${uniqueArr.join(', ')}]`)
 */

/*Bài 03
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

Bước 1: Sắp xếp mảng theo thứ tự tăng dần

Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng*/

var numbers = [1, 5, 3, 9, 10, 7, 16];
var element = 12;

// Bước 1: Sắp xếp mảng theo thứ tự tăng dần
numbers.sort(function (a, b) {
    return a - b;
});
console.log(`sau khi sắp xếp: ${numbers}`);
// bước 2 chèn thêm phần tử vào bất kỳ vị trí nào trong mảng
let inserted = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > element) {
        numbers.splice(i, 0, element);
        inserted = true;
        break;
    }
}
if (!inserted) {
    numbers.push(element);
}
console.log(`sau khi chèn: ${numbers}`);