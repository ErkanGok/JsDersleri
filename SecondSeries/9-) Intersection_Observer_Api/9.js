const target = document.getElementById("image")
const callback = (entries) => {
    if(entries[0].isIntersecting) {
        entries[0].target.src = entries[0].target.dataset.src;
        console.log(entries[0])
    }
    
}

const options = {
    rootMargin : "30px"
    //threshold: 0.5, // sayfada gözlemlenen elementin yüzde 50'sini görmeye başladığımda çalışır
    //root: document.getElementById("container") // dontainer div elementine göre gözlem yapacak
};

const observer = new IntersectionObserver(callback,options)
observer.observe(target);