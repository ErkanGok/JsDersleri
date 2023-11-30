// filter metoduna benzer koşula uygun ilk elemana bakıyor

//Örnek 1
const numbers = [5,12,8,130,44]

console.log(numbers.find(number => number > 10)) // dizi içerisinde 10'dan büyük ilk elemanı döndürür

//Örnek 2
const users =  [
    {
        id: 1,
        name: "Erkan"
    },
    {
        id: 2,
        name: "mehmet"
    },
    {
        id: 3,
        name: "gökhan"
    },
]

console.log(users.find(user => user.id === 2)) //id değeri 2 olan nesne elemanını döndürür

// optinal olarak find() metodu içerisinde 2. parametre index'i 3. parametre arrayin kendisini verir