const numbers = [12, 5,8,130,44]

//Örnek 1
console.log(numbers.filter(function(number) { // 10'dan büyük değerleri döndürür find() metodundan farklı olarak dizi döndürür tek bir eleman değil
    return number > 10
}))

//Örnek 2
const names = ["tayfun", "cem", "ece", "burak", "gül", "mehmet", "neşe"]

console.log(names.filter(name => name.length <= 4));

//Örnek 3
const users = [
    {
        name: "Tayfun",
        age: 27
    },
    {
        name: "Mehmet",
        age: 30
    },
    {
        name: "Gökhan",
        age: 22
    },
]

console.log(users.filter(user => user.age > 25))

// Örnek 4
const search = (keyword, array) => array.filter(item => item.includes(keyword))

console.log(search("ce",names))

//Örnek 5
console.log(names.filter(name => name.includes("ce")))