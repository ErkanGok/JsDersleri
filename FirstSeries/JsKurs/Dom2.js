// creating Element


for(i = 1; i<=10;i++) {
    let h1 = document.createElement("h1")
    h1.className = "test"
    h1.style.backgroundColor = "blue"
    h1.textContent = "bu javascript ile oluşturuldu" +i
    //document.body.prepend(h1); //önce ekler
    document.body.append(h1) // sonra ekler
}

// Removing a child element from a parent node

const AllH1Elements = document.querySelectorAll("h1") // tüm h1 tag'ına sahip elemanları seçiyoruz

for(const h1 of AllH1Elements) {
    console.log(h1)
    //document.body.removeChild(h1) // body altındaki seçtiğin elemanları siler
    h1.remove() // tüm h1leri siler
}