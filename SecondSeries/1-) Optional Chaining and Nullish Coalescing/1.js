// ?? nullish coalescing
// ?. optinal chaining


//===========================optinal chaining kısmı========================================
// const user = {
//     name : "Tayfun" 
// }

// console.log(user.name.getName()) // is not a function hatası döner
// console.log(user?.name?.getName?.()) // bunun yerine undefined hatası alabilmek için bu şekilde yazılır

//müdahale edemediğimiz kodlarda kullanırız.

//=====================================================

// function sayHello(msg, callback) {
//     console.log("Msg", msg)
//     callback?.() // parametrenin verilmeme durumunda doğru hali
//     //callback() // parametrenin verilmeme durumunda yanlış hali
// }

// sayHello("Erkan GÖK") // ikinci parametreyi yazmadığımızı varsayarsak hata mesajı alırız
// sayHello("Erkan GÖK", () => console.log("callback çalişti")) // doğru çalışacak hali
// sayHello("Erkan GÖK", () => console.log("callback çalişti"))

//===========================nullish coalescing kısmı========================================
 const user = {
    name : "Erkan" ,
    cat : {
        name: "Tekir"
    }

}

 console.log("Köpek Adı ", user?.dog?.name ?? "bilinmiyor")
