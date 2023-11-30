// bir ifade içerisinde içerip içermediğini kontrol eder ve boolean bir değer döndürür
//Büyük küçük harfe duyarlıdır


// Örnek 1
// const numbers = [1,3,5,7]

// console.log(numbers.includes(5))

//Örnek 2

// const names = ["tayfun","gökhan","mehmet"]

// console.log(names.includes("GÖkhan"))

// Örnek 3

// const numbers = [1,3,5,7]

// const addNumber = number => {
//     if(!numbers.includes(number)){
//         numbers.push(number)
//     }
        
// }

// addNumber(5)
// addNumber(5)
// addNumber(6)
// addNumber(8)

// console.log(numbers)

// Örnek 4
const names = ["tayfun","gökhan","mehmet"]
console.log(names.includes("mehmet" , 3)) // bu eşleşmeye 3. indisten başlasın demektir, 3. indisten sonra ilgili ifade yer almadığı için false dönecektir.
