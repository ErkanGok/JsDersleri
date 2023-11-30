// bir fonksiyon tanımlanırken ya normal tanımlanabilir yada asycn olarak tanımlanabilir.
//js'de herşey asycn olarak çalışıyor
//bir işin başlaması için başka bir işin bitmesine gerek yok 
// await sadece asycn olarak belirlenmiş fonksiyonlar içerisinde çalışır

//==========================================================================================

// async function hello() {
//     //return new Promise(resolve => resolve("Hello World !"))
//     return "Hello World !"
// }

// const text = await hello() ----> Hatalı
// console.log(text)


// (async () => {
//      async function hello() {
//      //return new Promise(resolve => resolve("Hello World !"))
//         return "Hello World !"
//                             }

//      const text = await hello() //----> Doğrusu
//         console.log(text)
//         console.log("test")
// })()


//==========================================================================================

// document.querySelector("button").addEventListener("click" , async () => {
//     const result = await Notification.requestPermission()
//     console.log(result)
// })

//==========================================================================================
//bir işlemi senkron tanımlamak istiyorsak async kullanmalıyız dolayısıyla await kullanmalıyız
document.querySelector("button").addEventListener("click", async () => {
    const post = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json()    
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)).json()
    
    console.log(post,comments)
})