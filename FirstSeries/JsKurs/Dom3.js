// Event Listeners

const button = document.getElementById("btn2")

//genel Kullanım
/*button.addEventListener("click" , function(e) {
    //console.log("butona tikladin !")
    console.log(e) //button eventleri 
})*/

//Arrow Kullanım
/*button.addEventListener("event", e = {

})*/

//Inline method burada da çağırılabilir
/*button.onclick = e => {
    console.log(e)
}*/
/*
function clickHandle(e) {
    console.log(e.id)
}*/

//doubleclick event
/*button.addEventListener("dblclick" , function(e) {
    //console.log("butona tikladin !")
    console.log(e) //button eventleri 
})*/

//mouse üzerine geldiğinde tetiklenir
/*button.addEventListener("mouseenter" , function(e) {
    //console.log("butona tikladin !")
    console.log(e) //button eventleri 
})*/
/*
const image = document.querySelector("img")

image.addEventListener("load", function() {
    console.log("resim yüklendi!")       
})

image.addEventListener("error", function() {
    console.log("resim yüklenirken bir sorun oluştu!" , e)       
})
*/

const input = document.getElementById("name")

//Yazılır yazılmaz alır
input.addEventListener("input", e => {
    console.log("birşeyler yaziliyor...",e.target.value)       
})

//klavyeden elimizi çektiğimiz an çalışır
/*name.addEventListener("keyup", e => {
    console.log("birşeyler yaziliyor...",e.target.value)       
})*/

//down anında çalışır
/*name.addEventListener("keydown", e => {
    console.log("birşeyler yaziliyor...",e.target.value)       
})*/

const color = document.getElementById("color-picker");


color.addEventListener("input", e => {
    document.body.style.backgroundColor = e.target.value // body'nin arkaplan rengini değiştirme    
})



const saveRulesCheckBox = document.getElementById("save-rules")

const form = document.getElementById("form")


const saveButton = document.getElementById("save-btn")

saveButton.addEventListener("click", e => {
    console.log(
        input.value,
        color.value,
        saveRulesCheckBox.checked,
        form.elements.stack.value)
})




const gender = document.getElementById("gender")

gender.addEventListener("change", e => {
    //console.log(e.target.value) // tekli seçim için
    console.log([...e.target.selectedOptions].map(el => el.value)) // çoklu seçim için
})