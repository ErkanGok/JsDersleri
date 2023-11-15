// Object ve Arrayler de kullanılır

// Destructing => şeklini bozma

// Spread => Dağılma, Yayılma

//Rest => Kalan 

const numbers = [10,12,14]

const [number1,number2] = numbers // şeklini bozduk

console.log(numbers[0]) // 10
console.log(number1) // 10

console.log(numbers[1]) // 12
console.log(number2) // 12

console.log(numbers[2]) // 14

//=============================================
const stack = [
    ["HTML", "CSS", "JAVASCRİPT"],
    ["PHP", "MYSQL", "NODEJS"]
]

const [[firstLanguage], frontend,backend] = stack

console.log(firstLanguage)
//=============================================
const nums = [1,2,3,4,5,6,7,8,9,10]

let [nums1,nums2,nums3, ...rest] = nums

console.log(rest)

//=============================================

const countries = [["Finland", "Helsinki"],["Sweden","Stockholm"],["Norway", "Oslo"]]

for([country,city] of countries) {
    console.log(country,city)
}

//=============================================

function multiply(...numbers) {
    return numbers[0] * numbers[1]
}

console.log(multiply(10,10))