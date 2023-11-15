const h1 = document.querySelector('h1')

//console.log(h1.attributes.title)
// attributes kullanımı
for(const attr of h1.attributes) {
    console.log(attr.name, attr.value)
}

//childElementCount kullanımı

const ul = document.querySelector("ul")
/*const deleteButtons = document.querySelectorAll(".delete-btn")

deleteButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        e.target.remove() 
        if(ul.childElementCount === 0) {
            ul.innerHTML = "Gösterilecek veri Kalmadi !"
        }
    })
})


console.log(ul.childElementCount)
*/
// children kullanımı elemanın çocuk ögelerini HTMLCollection objecsi olarak döndürüyor

const deleteButtons2 = ul.children

console.log(deleteButtons2);

[...deleteButtons2].forEach(btn => {
    btn.addEventListener("click", e => {
        e.target.remove() 
        if(ul.childElementCount === 0) {
            ul.innerHTML = "Gösterilecek veri Kalmadi !"
        }
    })
})

//ilk eleman ve son eleman seçme

console.log(ul.lastElementChild)
console.log(ul.firstElementChild)

// kendinden önce yada sonra gelen elementi bulma

const title = document.querySelector(".title")

console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

//after-before metotları

const adana = document.getElementById("adana")

const h1_1 = document.createAttribute("h1")

h1_1.textContent = "baslik"

adana.before(h1_1) // adananın hemen öncesine ekler
adana.after(h1_1) // adananın hemen sonrasına ekler