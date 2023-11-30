const button = document.getElementById("btn")

button.addEventListener("click", e => {
    e.preventDefault();
    if(navigator.share) {
        const shareData = {
            title: "test1",
            text: "test2",
            url: "test3"
        };
        navigator.share(shareData)
        .then(() => {
            alert("Paylaşıldı")
        })
        .catch(e => {
            alert(e)
        });
    }
})