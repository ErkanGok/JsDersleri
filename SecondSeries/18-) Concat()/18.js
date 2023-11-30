// iki diziyi birleştirir ve tek dizi haline getirir

const array1 = ["a","b","c"]

const array2 = ["d","e","f"]

const newArray = array1.concat(array2, "g") // son indise ikinci parametredeki değeri de ekler

console.log(newArray)

const numbers = [[1,2],[3,4]]

console.log(numbers.concat(5))
console.log(numbers.concat([[5,6]])) // nested eleman olarak bu şekilde eklenebilir