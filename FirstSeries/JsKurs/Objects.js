ad = "test" // window nesnesi altında yer alır değişken tipi belirlenmediğinde

let name = 'Erkan'
let surname = 'GÖK'

function letsLearnScope(){
    console.log(name,surname)
    if(true){
        let name = 'Gökhan'
        let surname = ' Test'
        console.log(name,surname)
    }
    console.log(name,surname)
}

letsLearnScope();

console.log(name,surname) 

// 'var' değişkeni fuction scope içerisinde tanımlanabilir fakat globaldir function dışarısında erişilebilir.

const person = {} // Object tanımı
console.log(person)

const user = {
    name: "Erkan",
    surname: "GÖK",
    age: 31,
    isMarried: false,
    skills: [
        'HTML',
        'CSS',
        'Javascript',
        'PHP'
    ],
    siblings: [
        {
        name: "Ömer",
        surname: "GÖK"
        }
    ],
    getFullName: function() {
        return `${this.name} ${this.surname}` // Object içerisinde fonksiyon tanımı
    },                                         // NOT: Array fuctionı object içerisinde this ile tanımlayamayız!! onun yerine

    getFullName2: () => `${user.name} ${user.surname}`, // Şeklinde kullanabiliriz
}



console.log(user.getFullName())

console.log(user.name) //obje içerisindeki erişme yöntemi

for(let [key,val] of Object.entries(user)) { // obje içerisinde girilmiş tüm verileri göstermek için kullanılır
    console.log(`Key = ${key}`, `Value = ${val}`)
}

console.log(user.hasOwnProperty('name')) // Object içerisinde var olup olmadığını boo değer olarak döndürür.

Object.freeze(user) // object içerisine yeni bir tanımlama yapılmasını engeller (readonly)

Object.seal(user) // içerisine yeni bir tanımlama yapmayı engeller fakat tanımlı bir değişkeni değiştimeye imkan verir.
