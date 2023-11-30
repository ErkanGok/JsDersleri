// dizideki (tüm)!!! değerleri bizim belirlediğimiz bir koşulda test eder

const array1 = [2,4,6,8,10]

//Örnek 1
const result1 = array1.every(function(number) {
    return number > 2
})

console.log(result)

//Örnek 2

const users = [
    {
        name: "Tayfun",
        age: 27
    },
    {
        name: "ahmet",
        age: 27
    },
    {
        name: "mehmet",
        age: 32
    }
]

console.log(users.every(user => user.age === 27))