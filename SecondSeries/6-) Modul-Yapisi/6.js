//default export örneği

// import hello from "./utils.js";

// console.log(hello())

//export örneği

// import {hello, sayHi} from "./utils.js";

// console.log(sayHi("erkan"))


//Örnek 1
// const btn = document.getElementById("btn")
//Örnek 2
 const Utils = () => import("./utils.js")

 btn.addEventListener("click", () => {
    //Örnek 1
     //import("./utils.js")
     //.then(module => console.log(module))
     //Örnek 2
     Utils().then(module => console.log(module))
 })