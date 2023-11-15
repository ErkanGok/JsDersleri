

const inputs = document.querySelectorAll('input[type="range"]')

//click
//change

inputs.forEach(input => input.addEventListener("input" , () => {
  localStorage.setItem(input.id,input.value)
  input.nextElementSibling.innerText = input.value
  generateBodyColor()
}))

generateBodyColor()

function generateBodyColor(){

  let rgb = [...inputs].reduce((previousValue, currentValue) => {

  let value = currentValue.value
  if(localStorage.getItem(currentValue.id)) {
    value = localStorage.getItem(currentValue.id)
  }

    return [...previousValue, currentValue.value]
  }, [])  
  document.body.style.backgroundColor = `rgb(${rgb.join(",")})`
} 