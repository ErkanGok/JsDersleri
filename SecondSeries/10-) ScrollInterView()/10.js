
// document.querySelector(".active").scrollIntoView({
//     block : "center",
//     inline : "center", // clası active olan elementi horizantal ve vertical olarak ortaladı
//     behavior : "smooth"
// })

// document.getElementById("to-top").addEventListener("click", (e) => {
//     e.preventDefault()
//     document.body.scrollIntoView({       
//         behavior:"smooth",        
//     })
// })

const lists = document.querySelectorAll("nav ul li")

lists.forEach(list => {
    list.addEventListener("click", (e) => {
        e.preventDefault(); //varsayılan işlemi yapılmasını engelliyoruz
        [...lists].map(list => list.classList.remove("active"));
        list.classList.add("active");

        let target = list.querySelector("a").getAttribute("href").replace("#","");
        document.getElementById(target).scrollIntoView({       
            behavior:"smooth",  
            block:"center",
            inline: "center"
        });

        var scrollTimeOut;
        addEventListener("scroll", () => {
            clearTimeout(scrollTimeOut);
            scrollTimeOut = setTimeout(() => {
                list.scrollIntoView({ 
                    behavior:"smooth",  
                    block:"center",
                    inline: "center"
                });
            },100)
        })

        


    });
});