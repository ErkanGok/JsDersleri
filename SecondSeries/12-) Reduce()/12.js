const number = [1,2,3,5]

let total = 0

// Örnek 1
number.forEach(number => {
    total += number
})
console.log(total)

//Örnek 2
let total2 = number.reduce(function(acc, number)  {
    return number + acc
})

console.log(total2)

// Örnek 3
let total3 = number.reduce(function(acc, number)  {
    return number + acc
},10) // başlangıç değeri verebiliriz böylece toplam değer 21 olur

console.log(total3)


// Örnek 4 price değerlerinin toplamını almak
const basket = [
    {
        name : "IPhone 8",
        price : 7000
    },
    {
        name : "Apple MacBook Pro",
        price : 14000
    },
    {
        name : "Harman/Kardon",
        price : 2500
    }
]

let sum = basket.reduce((acc,item) => acc + item.price, 0) // başlangıç değeri vermemizi bekler

console.log(sum)

// Örnek 5 aynı isimde olanları gruplamak
const names = ["Tayfun" ,   "Ahmet", "Mehmet", "Tayfun", "Gökhan"]

let result = names.reduce((allNames,name) => {
    if(name in allNames) {
        allNames[name]++
    }
    else {
        allNames[name] = 1
    }
    return allNames
},{}) // obje yazacağımızdan dolayı başlangıç değerini boş bir obje olarak belirleriz

console.log(result)

// Örnek 6 ürünleri markalarına göre gruplamak
const products = [
    {
        name:"NT1-a Condenser Mikrofon",
        brand: "Rode"
    },
    {
        name:"IPhone XS",
        brand: "Apple"
    },
    {
        name:"SmartLav Plus+ Yaka Mikrofonu",
        brand: "Rode"
    },
    {
        name:"M-Audio Keystation 61",
        brand: "M-Audio"
    },
    {
        name:"MacBook Pro",
        brand: "Apple"
    }
]

const groupBy = (array, property) => {
    return array.reduce((acc,product) => {
        let key =  product[property]
        if(!acc[key]) {
            acc[key] = []
        }   
        acc[key].push(product)
        return acc
        
    }, {})
}


console.log(groupBy(products,"brand"))

// Örnek 7 post içerisindeki tüm tagları tek bir dizide birleştirme

const posts = [
    {
        title: "Post1",
        tags:   ["php", "css"]
    },
    {
        title: "Post2",
        tags:   ["javascript", "html5"]
    },
    {
        title: "Post3",
        tags:   ["html5", "json"]
    },
]

const allTags = posts.reduce((acc,post) => [...acc, ...post.tags], [])

console.log(allTags)

//Örnek 8 tekrarlanan değerleri silmek

const array2 = ["a", "b", "b", "c", "a", "d", "e", "d", "e"]

const result2 = array2.reduce((acc,item) => {
    if (!acc.includes(item)) {
        acc.push(item)
    } 

    return acc
}, [])

console.log(result2)

//örnek 9

const numbers2 = [-5,6,2,0]

console.log(numbers2.filter(number => number > 0)) // dizideki 0'dan büyük elemenları ekrana basar
console.log(numbers2.filter(number => number > 0).map(number => number * 2)) // 0'dan büyük elemanları 2 ile çarpar

//reduce kullanımı
const result3 = numbers2.reduce((acc,item) => {
    if(item > 0) {
        acc.push(item *2)
    }
    return acc
}, [])

console.log(result3)