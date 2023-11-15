
/*
try {
let firstName = "erkan"
let surName = "gök" 
let fullName = firstName + " " + surName
}catch(err) {
console.log(err.name)
console.log(err)
}*/

let age = prompt("Kaç Yaşindasin")

try{
    if(age >29) throw new Error("Yalan Söylüyorsun")
}
catch(e){
    alert(e.message)
}

