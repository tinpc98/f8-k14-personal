/*
arr = [33, 11, 22, 12, 34, 29]
let count = 0;
for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr.length - 1 - j; i++) {
        const curValue = arr[i]
        const nextValue = arr[i + 1]

        if (curValue > nextValue) {
            arr[i] = nextValue
            arr[i + 1] = curValue
        }
    }
    console.log(arr)
}
console.log(arr)
 */

/*
* function (hàm)
* vd: y = x + 1 x = 1 -> y = 2
*
* f(x) = x + 1 --> x = 1 ->f(1) = 2 -> co ca input and output
*
* f(x) = 2 -> no input
*
* không có đầu ra
* */

// function test(x, y){
//     const a = 1
//     console.log('test thui x = ', x, 'y = ', y)
//     return 'hello anh em'
// }
// console.log(test(100, 200))

/*
function test(x){
    if(x < 5) return
    console.log(x)
}

const log = (x) => x || 100
console.log(log(100))
*/
/* mảng
const animal = {
    name: 'dog',
    legs: 4,
    speak() {
        console.log('woof')
    },
    eating(){
        console.log('go go di nao  ')
    },
    girlFriend: {
        name: 'Anh',
        legs: 3,
        speak() {
            console.log('meow')
        },
        eating(){
            animal.speak()
            const result = 'go go di nao ' + this.name + ' oi'
            console.log(result)
        }
    }
}
animal.girlFriend.eating()
animal.speak()
animal.eating()
*/

const members = [
    {id: 1, name: 'Anh', age: 23},
    {id: 2, name: 'Viet', age: 23},
    {id: 3, name: 'Nguyen', age: 23}
]
for (let i = 0; i < members.length; i++) {
    const member = members[i]
    console.log(member)
} 