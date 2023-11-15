function sayHello2(){
    console.log("Hello Word !")
}

sayHello2();

function topla() { // parametre sayısı belli olmadığında fonksiyonları bu şekilde kullanabiliriz.
    let total = 0;
    for(let i = 0; i<arguments.length;i++) {
        total += arguments[i]
    }
    return total
}


console.log(topla(1,2,3,4,5,6))

const sayHello = function(name) { // anonim fonksiyon kullanımı
    return `Hello, ${name}`;
} 

console.log(sayHello("Erkan"))

// Self Invoking Function
;(function() {
console.log("test")
})()

let sayHello3 = (function(name) {
    console.log(`Hello, ${name}`);
})("Erkan3")

//Arrow Function
const hello2 = name =>  `Hello, ${name}`; // =>>> Tek parametre alan fonksyionlar için

console.log(hello2("Erkan4"));

const hello3 = (name,surname) =>  `Hello, ${name} ${surname}`; // =>>> birden çok parametre alan fonksyionlar için

console.log(hello3("Erkan4", "anonim"));


//Rest operatorü ile parametre sayısı bilinmeyen fonksyionlar için kullanılır
const toplam = (... numbers) => {
    console.log(numbers);
}
 
toplam(1,2,3,4,5,6,7,8,9)

// dedfault value parameter in function
function multiply(num1,num2 = 2) {
    return num1*num2
}

console.log(multiply(10))

