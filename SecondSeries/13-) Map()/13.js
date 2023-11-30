// dizideki bütün elemanları bir işlemden geçirmemizi sağlıyor

const numbers = [1,4,9]

//Örnek 1
// numbers.forEach((number,index)  => { // orjinal dizi değişir
//     numbers[index] = number * 2;
// })

//console.log(numbers)


//Örnek 2
// const result = numbers.map(function(number) { // orjinal diziyi değiştirmez
//     return number * 2;
// })

// console.log(result)

//Örnek 3
// const result = numbers.map(number => number * 2) // Arrow function versiyonu

// console.log(result)

//Örnek 3
// const users = [
//     {
//         name: "Erkan",
//         surname: "test",
//         age: 29
//     },
//     {
//         name: "test2",
//         surname: "test3",
//         age: 28
//     },
//     {
//         name: "test4",
//         surname: "test5",
//         age: 55
//     },
// ]

// const date = new Date()
// const result = users.map(user => {
//     return {
//         fullname: `${user.name} ${user.surname}`,
//         yearOfBirth: date.getFullYear() - user.age
//     }
// })

// console.log(result)


//Örnek 4
const todos = [
    {
        id: 1,
        name: "Todo 1",
        completed: false

    },
    {
        id: 2,
        name: "Todo 2",
        completed: false

    }
]

console.log(todos.map(todo => {
    if(todo.id === 2) {
        todo.completed = true;
    }
    return todo;
}))