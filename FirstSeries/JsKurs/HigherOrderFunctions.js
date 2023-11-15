
const fonksiyon = number => number**2

function cube(cb, number) { // callback fonksiyon tanımı
    return cb(number)* number
}

console.log(cube(fonksiyon, 3))

const a = s1 => { // ikinci örnek
    const b = s2 => {
        const c = s3 => {
            return s1+s2+s3
        }
        return c
    }
    return b
}

console.log(a(5)(10)(20))

const numbers = [1,3,5,7,9]
let total = 0
numbers.forEach(number => total += number) // foreach kullanımı
console.log(total)

function sayHello(){
    console.log("Hello !")
}

//setInterval(sayHello, 1000) // her saniye fonksyionu çalıştırma

//setTimeout(sayHello, 2000) // 2 saniye sonra çalıştırmaya başlıcak

const interval = setInterval(sayHello, 1000)

 setTimeout(() => {
    clearInterval(interval)
    console.log("interval işlemi iptal edildi")  // 5 saniye boyunca çalışmaya devam edicek 5. saniyede duracak
}, 5000);

console.log(numbers.filter(number => number > 3)) // dizi içerisinde yer alan 3ten büyük sayıları alır



console.log(numbers.reduce((oldValue, currentValue) => {
    return oldValue + currentValue
},0))

console.log(
    numbers.every(number => number < 5) // dizideki tüm elemanlar 5ten küçük mü ?
)

console.log(
    numbers.some(number => number < 5) // dizideki en az bir eleman 5ten küçük mü?
)

console.log(
    numbers.find(number => number > 5) // dizide 5ten büyük gelen ilk sayıyı buldu ve o elemanı aldı
)

const names = ["Zeki","Altan", "Metin"]
const numaralar = [43,2,5,325]
console.log(names.sort()) // string ifadeleri küçükten büyüğe doğru doğru sıraladı
console.log(numaralar.sort()) // fakat integer değerleri doğru sıralayamaz

console.log(numaralar.sort((a,b) => a-b)) // küçükten büyüğe doğru sıralama bu şekilde kullanılır büyükten küçüğe b-a olarak