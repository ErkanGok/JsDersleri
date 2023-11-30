// const textareas = document.querySelectorAll("textarea")

// const resizeObserver = new ResizeObserver(entries => {
//     for(let entry of entries) {
//         const size = entry.contentRect.height / 3
//         entry.target.style.fontSize = size + "px"
//         entry.target.style.lineHeight = size + "px"
//     }
// })

// textareas.forEach(textarea => resizeObserver.observe(textarea))// Textarea elementi observe edebiliyoruz

const resizeObserver = new ResizeObserver(entries => {     
    for(let entry of entries) {
        const visibles = Math.floor(entry.contentRect.width / 200) // 3 kutuyu göster kalanı gizle
        entry.target.querySelectorAll(".box").forEach((box,index) => {
            if ((index+1) <= visibles) {
                box.style.display = "flex"
            }else {
                box.style.display = "none"
            }
        })
    }
})

document.querySelectorAll(".boxes").forEach(boxes => resizeObserver.observe(boxes))



const genres = [
    {
        title: "Aile"
    },
    {
        title: "Fantastik"
    },
    {
        title: "Komedi"
    },
    {
        title: "Korku"
    },
    {
        title: "Gerilim"
    },
    {
        title: "Aksiyon"
    },
    {
        title: "Macera"
    },
    {
        title: "Belgesel"
    },
]





const observer = new ResizeObserver(entries => {
    for(let entry of entries) {
        const visibles = Math.floor((entry.contentRect.width - 130) / 130);
    let html = ''
    if(visibles) {
        html += genres.slice(0,visibles-1).reduce((prev,current) => {
            return prev += `<a href="#">${current.title} </a>`   
        }, '')
    }    
    const invisibles = genres.slice(visibles > 0 ? visibles-1 : 0)
    if(invisibles.length > 0) {
        html += `<div class="dropdown">`
        html += `<button>Türler</button>`
        html += `<nav>`
        html += invisibles.reduce((prev,current) => {
            return prev += `<a href="#">${current.title} </a>`   
        }, '')
        html += `</nav>`
        html += `</div>`
    }
    entry.target.innerHTML = html
    }
})

observer.observe(document.querySelector(".menu"))

document.querySelectorAll(".menu").forEach(menu => observer.observe(menu))