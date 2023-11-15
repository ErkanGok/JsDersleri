//Promise-Fetch-Asycn/Await

// A Promise is one of these states:
//pending : başlangıç durumu
//fullfilled: operasyon başarılı bir şekilde tamamlandı
//rejected: bir problem var demek

//Not: fullfilled olduğu zaman proimise'de yer alan değeri alabilmemiz için Promise.prototype.then() Kullanıyoruz
//Not: rejected olduğu zaman proimise'de yer alan değeri alabilmemiz için Promise.prototype.catch() Kullanıyoruz
/*
const test = callback => {
    setTimeout(() =>{
        callback("hata oluştu !" , [])
    },2000)
}

const callback = (err,data) => {
    if(err) {
        console.log("hata",err)
    }else{
        console.log("data",data)
    }
}
*/
//test(callback)

//============================================================
/*
const promise = new Promise((resolve,rejected) =>{
    setTimeout(() => {
        resolve("işlem basarili!")
    }, 1500);
//resolve("işlem basarili!")
//rejected("işlem başarısız")
})

promise.then(()=> {
console.log(data)
}).catch(err => {
    console.warn(err)
})
*/
//================================Fetch API===================================

const API_URL = "https://jsonplaceholder.typicode.com/posts"

fetch(API_URL/*, {
    method: "Post", //=> Post yada Get olabilir
    body: formData //sunucuya değer göndermek istendiğinde bunu body ile gönderiyouz
}*/)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))

//================================Asycn/Await===================================

async function getPosts() {
    try {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
    /*.then(response => response.json()) 
    .then(data => console.log(data))  */ 
}

getPosts()