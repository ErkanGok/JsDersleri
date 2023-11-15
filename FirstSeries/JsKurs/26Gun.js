const form1 = document.getElementById("form1")

const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click", () => {
    document.forms.form1.submitBtn();
})

const resetBtn = document.getElementById("reset-btn")
resetBtn.addEventListener("click", () => {
    document.forms.form1.resetBtn();
})

//Validation 