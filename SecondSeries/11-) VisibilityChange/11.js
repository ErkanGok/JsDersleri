let seconds = 10,
span = document.getElementById("seconds")

const counter = () => {
    if(seconds > 1) {
        seconds -= 1
        span.innerText = seconds
    }
    else {
        clearInterval(countDown);
        alert("bitti")
    }
}

let countDown = setInterval(counter,1000)

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        countDown = setInterval(counter,1000)
    } else {
        clearInterval(countDown); // geri sayım durduruldu
    }
})