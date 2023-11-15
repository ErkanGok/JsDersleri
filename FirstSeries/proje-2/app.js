
const button = document.getElementById("generate-color-btn")



const generateRandomNumber = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber + 1))
}

const generateRGBColor = ()  => {
    return [
        generateRandomNumber(255),
        generateRandomNumber(255),
        generateRandomNumber(255),]
}

button.addEventListener("click", () => {      
    document.body.style.backgroundColor = `rgb(${generateRGBColor().join(', ')})`
})