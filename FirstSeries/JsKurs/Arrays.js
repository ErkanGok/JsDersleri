const arr = 'Javascript'

console.log(arr.split('')); //ayırma

const arr1 = [1,2,3]
const arr2 = [4,5,6]

let result = arr1.concat(arr2) // birleştirme

console.log(result)

const words = ["ahmet" ,"mehmet", "ali", "cemil"]

console.log(words.join("#")) // elemanları belirttiğin ifade ile birleştirme

const numbers = [1,2,3,4,5,6,7,8]

console.log(numbers.slice(0,3)) //ilk üç elemanı keser ve alır

const numbers2 = [4,5,6,7,8,9,10]

console.log(numbers2.splice(2,2)) //0. elemandan başlar ve ilk iki elemanı keser ve alır

console.log(numbers2.splice(0,2,11,12)) // ilk iki elemanı diziden çıkartır ve diğer parametreleri ekler(11,12)

console.log(numbers2)

const words2 = ["a", "b", "c", "d"]

words2.push("test") //dizinin sonuna bir eleman ekler (sona ekler)

console.log(words2)

words2.pop(); // son elemanı diziden kaldırır
words2.shift(); //ilk elemanı diziden kaldırır
let test = words2.pop(); // aynı zamanda silinen değişkeni depolar, değişkeni bir başka değere atayabiliriz.
words2.unshift("ilk eleman") // ilk elemanı ekleyebiliyoruz
words2.reverse() // elemanları tersine çevirir
console.log(words2)

const elements = [54,3,2,64,5]

elements.sort() // dizideki elemanları küçükten büyüğe doğru sıralar
elements.sort().reverse() // reverse ile dizilimi büyükten küçüğe doğru yapabiliriz
console.log(elements)