// Promise : Bir işlem bittiğinde diğer işlemi yaptırmak için kullanılır.

const box = document.querySelector(".box")


/*//CallBack Hell Örneği
setTimeout(() => {
    box.classList.add("bigger")
    setTimeout(() => {
        box.classList.add("circle")
        setTimeout(() => {
            box.classList.add("move")
            setTimeout(() => {
                box.classList.add("colored")
                setTimeout(() => {
                    box.classList.remove("colored")
                    setTimeout(() => {
                        box.classList.remove("move")
                    },500)
                    setTimeout(() => {
                        box.classList.remove("circle")
                    },500)  
                },500)
            },500)             
        },500)
    },500)  
},500)*/

//===========================================================
/*
new Promise((resolve,reject) => {
    //işlem bitmiş ve başarılı ise
    resolve("çözüldü")
    //işlem hatalı ise
    reject("çözülmedi")
})
.then(data =>  {
    console.log(data) // resolve çalışıyorsa bu blok çalışıyor
}).
catch(data => {
    console.log(data)// reject çalışıyorsa bu blok çalışıyor
})
.finally(() => console.log("işlem bitti !"))
*/
//===========================================================
/*
const wait = ms => new Promise(resolve => setTimeout(resolve,ms))
// callback hell durumundan kurtulduk
wait(500)
.then(() => {
    box.classList.add("bigger")
    return wait(500)
})
.then(() => {
    box.classList.add("circle")
    return wait(500)
})
.then(() => {
    box.classList.add("move")
    return wait(500)
})
.then(() => {
    box.classList.add("colored")
    return wait(500)
})
.then(() => {
    box.classList.remove("colored")
    return wait(500)
})
.then(() => {
    box.classList.remove("move")
    return wait(500)
})
.then(() => {
    box.classList.remove("circle")
    return wait(500)
})
.then(() => {
    box.classList.remove("bigger")
    return wait(500)
})
.finally(() => console.log("Animasyon Bitti !"))
*/

//==============================================================

//Promise.all() => hepsi resolve olursa
//Promise.race() => ilk sonuçlanan (resolve yada reject)
//Promise.AllSettled => hepsi tamamlandığında
//Promise.Any() => ilk resolve olan

const prom1 = new Promise(resolve => setTimeout(resolve, 1000, "test1"))
const prom2 = new Promise(resolve => setTimeout(resolve, 800, "test2"))
const prom3 = new Promise((resolve,reject) => setTimeout(reject, 1000, "test3"))

Promise.all([prom1,prom2,prom3])
.then(response => console.log(response))
.catch(err => console.log(err))