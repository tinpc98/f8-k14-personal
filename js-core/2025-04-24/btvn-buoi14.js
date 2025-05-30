const students = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 }
];

// bai 1: gom nhom hs theo lop
const groupByClass = {}

for (let student of students) {
    const className = student.class
    const studentName = student.name

    if (!groupByClass[className]) groupByClass[className] = []

    groupByClass[className].push(studentName)
}
console.log(groupByClass)

//Bài 2: Tìm học sinh điểm cao nhất mỗi lớp

const topStudent = {}

for (let student of students) {
    const className = student.class

    if (!topStudent[className] || student.score > topStudent[className].score) {
        topStudent[className] = student
    }
}
for (let className in topStudent) {
    const student = topStudent[className]
    console.log(`Lớp ${className}: ${student.name} - Diem ${student.score}`)
}

//Bài 3: Tìm điểm trung bình của mỗi lớp

const classAverage = {}
    for(let student of students) {
    const className = student.class
    const score = student.score

    if (!classAverage[className]) {
        classAverage[className] = {
            totalScore: 0,
            count: 0
        }
    }
    classAverage[className].totalScore += score
    classAverage[className].count+=1
}
for (let className in classAverage) {
    const average = classAverage[className].totalScore / classAverage[className].count
    console.log(`Lớp ${className}: Diem Trung Binh = ${average.toFixed(2)}`)
}
