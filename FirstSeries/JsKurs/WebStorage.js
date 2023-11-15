// localStorage: Her zaman ulaşılabilir oluyor, kullanıcı o veriyi bilgisayarından silmedikten sonra
// sessionStorage: o anki aktif durum sonlandığında o veri de kayboluyor.


//localStorage.setItem("name", "Erkan") // localstorage'a veri kaydetme

//const names = ["tayfun", "ahmet", "mert"]

/*const user = {
    name: "erkan",
    surnane: "gök"
}*/

//localStorage.setItem("user",user) // Hatalı halleri
//localStorage.setItem("names",names) // Hatalı halleri

/*localStorage.setItem("user",JSON.stringify(user))
localStorage.setItem("user",JSON.stringify(names))
console.log(localStorage)*/


/*localStorage.removeItem("names") // names isimli localstorage'ı siler
localStorage.clear() // tüm localstorage'ları siler

console.log(JSON.parse(localStorage.getItem("user")))*/

let basket = JSON.parse(localStorage.getItem("basket")) || [
    {
        productId: 1,
        amount: 2
    }
]
const products = [
    {
        id: 1,
        title: "MacBook Pro 2021",
        price: 40_000
    },
    {
        id: 2,
        title: "Keychron K6",
        price: 100
    },
    {
        id: 3,
        title: "NuPhy Halo65",
        price: 140
    },
]

function saveStorage(){
    localStorage.setItem("basket", JSON.stringify(basket))
}

function addBasket(productId) {
    const basketIndex = basket.findIndex(b => b.productId === productId)
    if(basketIndex > -1) {
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount: basket[basketIndex].amount + 1
        }
    }else{
        basket.push({ 
            productId,
            amount: 1
            })
        }
        saveStorage()
    }
    
    


function removeBasket(productId) {
    const item = basket.find(p => p.productId === productId)
    if(item) {
    if(item.amount === 1) {
        basket = basket.filter(p => p.productId !== productId)
    }else {
        basket = basket.map(i => {
            if(i.productId === productId) {
                i.amount -= 1
            }
            return i
        })
    }    
}
    saveStorage()
}

function totalPrice(){
    return basket.reduce((prev,basket) => {
        const product = products.find(p => p.id === basket.productId)
        return prev += (product.price * basket.amount)
    }, 0)
}

//localStorage.clear()
//addBasket(1)
removeBasket(1)

console.log(totalPrice())