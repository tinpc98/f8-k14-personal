/*
*vòng lặp( reduce)
* */
/*
const array1 = [1, 2, 3, 4, 5];
    //0 + 1 + 2 + 3 + 4
const initialValue = 0;

const sumWithInitial = array1.reduce((a, b) =>{
    console.log(a, b)
    return a + b
}, )

console.log(sumWithInitial)
*/
// bài tập
// const arr = [
//     ['id', 1],
//     ['name', 'test'],
//     ['age', 20],
//]
// /*
// in ra
// id: 1
// name: 'test'
// age: 20
//  */

// for
/*
const  result = {}

for (const e of arr) {
    const key = e[0]
    const value = e[1]
    result[key] = value
}
console.log(result)
*/
/*
const result = arr.reduce((acc, val) => {
    const key = val[0]
    const value = val[1]

    acc[key] = value
    return acc
},{})
console.log(result)
*/
/* loại bỏ số trùng lặp bằng thẻ set
const a = [1,1,1,2,2,2,3,3,3]
const c = Array.from(new Set(a))
console.log(c)
*/


const arr = [1, 7, 3, 6, 5, 8, 2]
/* bài 1: log ra những phép tính có kết quả bằng 4
vd  1 + 3 = 4
    2 + 2 = 4
 */
// thay chua bai
const map = {}
arr.forEach((e, i) => {map[e] = i})

const sums = 4
for (const e of arr) {
    const a = e
    const b = sums - a

    if (map[b]) {
        const indexA = map[a]
        const indexB = map[b]
        console.log(`$stt ${indexA} + $stt ${indexB} = ${sums} `)
    }
}

/* bài 2: log ra vị trí các số cộng lại bằng 4
    vị trí 0 + vị trí 2 = 4
    vị trí 3 + vị trí 6 = 4
 */
/* bài 3: tìm số tự nhiên lớn hơn 0 nhỏ nất không nằm trong array
    vd: [1, 7, 3, 2, 5, 8, 2] -> 4
    vd: [1, 3] -> 2
 */

// bai 1
/*
const sums = []
const signal = []
const indexSum = []
const indexSignal = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 4) {
            sums.push([arr[i], arr[j]])
        }
        if (arr[i] - arr[j] === 4) {
            signal.push([arr[i], arr[j]])
        }
    }
}
console.log('cac cap so co tong bang 4: ', sums)
console.log('cac cap so co tich bang 4: ', signal)
console.log('vi tri cac cap so co tong bang 4: ')
indexSum.forEach((sum) => {
    const [i, j] = sum

})
*/

