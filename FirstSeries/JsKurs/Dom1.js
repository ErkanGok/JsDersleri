// Document Object Model (DOM)

//const h1 = document.getElementsByTagName("h1"); // tag ile erişme

//const h1 = document.getElementsByClassName("title-1"); // class adı ile erişme

//const div = document.getElementById("div"); // id ile erişme

//console.log(h1.length)
/*
for(let i = 0; i<h1.length; i++) {
    console.log(h1[i])
}
*/

/*
[...h1].forEach(element => {
    console.log(element)
});*/
/*
console.log(document.querySelector(".title-1")) // ilk eşleştiği elemanı getirdi

console.log(document.querySelector(".title-1 + #div")) // div idsine sahip elemanıda getir.

console.log(document.querySelectorAll(".title-1")) // nodelist döndürür

document.querySelectorAll(".title-1").forEach(item => console.log(item)) //nodelist içerisindeki her bir item'ı tek tek basabiliriz.

*/

const title = document.getElementById("title"); 
/*title.style.color = "blue"
title.style.backgroundColor = "yellow"
title.title = "test baslik"
title.className = "adana"*/

title.setAttribute("style" , "color: blue; background-color: yellow")
title.setAttribute("title", "test baslik")
title.setAttribute("className", "adana") 

title.textContent = "yeni deger" // düz yazı eklemek istersek bu şekilde

title.innerHTML = "yeni deger <b>test</b>" // fakat aynı zamanda style değiştirmek istiyorsak bu şekilde kullanmalıyız
 