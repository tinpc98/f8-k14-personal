const arr = [
    ['id', 1],
    ['name', 'test'],
    ['age', 20]
]

const result = arr.reduce((acc, val) =>{
    const [key, value] = val
    acc[key] = val
    return acc
}, {})

console.log(result)