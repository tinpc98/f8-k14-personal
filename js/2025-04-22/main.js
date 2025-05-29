// /*
// *condition
// *
//  */
// const numbers= [1,2,3,4,5]
// let a = [1,2,3,4,5]
// a = [11,22,33,44,55]
// const length = a.length
// console.log(a.toLocaleString())
// const toString = a.toString()
// console.log(String(a))
// console.log(a[3])
// // add phan tu moi( them o cuoi)
// a.push(6)
// // add phan tu moi(them o dau tien)
// a.unshift(0)
// //change value (thay doi so trong mang)
// a[2] = 21
// //delete at lat (xoa phan tu cuoi)
// a.pop()
// // delete at first ( xoa phan tu dau)
// a.shift()
// // bo dau phay trong chuoi
// console.log(a.join('-'))
// // xoa phan tu cu the
// delete a[2]
// console.log(a)
// // noi 2 mang voi nhau
// const b = [1, 2, 3, 4, 5]
// const c = ['mot', 'hai', 'ba']
// const d = [1, 2, 3, 4, 5]
// console.log(b.concat(c, d))

/*
* Object
*   dung dể tập hợp các thông tin lại với nhau
*
* array: a = [10, 2, 23] so thu tu mang
*             0  1   2
* object
* co 1 cap key and value
* */

name: 'tin'
const info= {
    age: 23,
    address: 'ha noi',
    favoriteNumber: [1,2,3,4,5]
}
console.log(info['name'], info.name)

// sua phan tu
info.name = 'Viet'
// them phan tu moi
info.girlFriend = 'Anh'
// xoa phan tu
delete info.age
