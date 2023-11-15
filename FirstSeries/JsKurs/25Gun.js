const aTags = document.querySelectorAll("a")


//Dış bir bağlantıya gitmesini engellemek için (preventDefault)
aTags.forEach(a => {
    a.addEventListener("click", e=> {
        const href = e.target.getAttribute("href")
        if(href.includes("http") && !confirm("Dış bir bağlantıya gidiyorsun, dikkat ettin mi ?")) {            
            e.preventDefault()            
        }
    })
})

//stopPropagation

const test1 = document.querySelector(".test1")
const test2 = document.querySelector(".test2")
const test3 = document.querySelector(".test3")

test1.addEventListener("click", () => console.log("test1")) // true yazılmadığında içten dışa bir yayılma olur
test2.addEventListener("click", () => console.log("test2"))
//test3.addEventListener("click", () => console.log("test3"),true)


test3.addEventListener("click", e => {
    e.stopPropagation() // yayılmayı engellemek için
    console.log("test3")
}) 

// MediaQueryList
/*const isMobile = window.matchMedia("(max-width: 480px)")
mobileDetectHandle()
function mobileDetectHandle() {
    if(isMobile.matches) {
        document.body.classList.add("mobile")
    }else {
        document.body.classList.remove("mobile") 
    }
        
}

isMobile.addEventListener("change", mobileDetectHandle)
*/
//document.designMode = "on" kodu ile tarayıcının konsoluna yazarak değişiklik yapabiliriz

//select ile girilen metnin içinden kelime almak

const input = document.querySelector("input")

input.addEventListener("select", e => {
    console.log(
        e.target.value.substring(
        e.target.selectionStart, 
        e.target.selectionEnd // Seçileni ekrana basma
    )
)    
})


//setRangeText Kullanımı
const textarea = document.querySelector("textarea")

const actionButtons = document.querySelectorAll(".action-btn")

actionButtons.forEach(button => {
    button.addEventListener("click", e => {
        let selectedText  = textarea.value.substring(
            textarea.selectionStart,
            textarea.selectionEnd
        )

        switch(e.target.dataset.type) {
            case "bold":
                selectedText = `<b>${selectedText}</b>`
                break
            case "italic":
                selectedText = `<i>${selectedText}</i>`
                break
            case "upperCase":
                selectedText = selectedText.toLocaleUpperCase("TR")
               
        }

        textarea.setRangeText(
            selectedText,
            textarea.selectionStart,
            textarea.selectionEnd,
            "end"
        )
        textarea.focus()
        console.log(e.target.dataset.type )
    })
})