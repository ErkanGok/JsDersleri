// spread => (objeyi ya da diziyi yay)
// rest
// ... 3 dots syntax (...)

// const user = ["Tayfun", "Mehmet", "Gökhan", "Ali", "Erkan", "Ömer"]

// function getName(name1,name2,...otherNames) { // rest örneği (resti parametre olarak birden fazla kullanamayız!!!)
//     console.log(name1);
//     console.log(name2);
//     console.log(otherNames);
    
// }

// getName(...user) // spread örneği


//========================================

const user = {
    name: "Tayfun",
    surname: "Test"
}

//const newUser = user;

//newUser.surname = "Test2" // her iki objede etkilenir

const newUser = {
    ...user
}
newUser.surname = "Test2" // etkilenmemesi için böyle yapılır

console.log(user)
console.log(newUser)

//=========================================

// const numbers = [1,2,3,4,5]

// console.log([0,...numbers,56]) // başa yada sona ekleme


//=====================================

const titles = document.querySelectorAll("h3");

[...titles].map(title => console.log(title))