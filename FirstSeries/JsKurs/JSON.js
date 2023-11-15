/*let categories = [
    {
        name: 'css',
        count: 5
    },
    {
        name: 'javascript',
        count: 16
    },
]

let categoriesJSON = JSON.stringify(categories) // normal bir JS objecti'i JSON formatına çevirdi

console.log(categoriesJSON)*/

let persons = `[
    {
        "name" : "Erkan",
        "surname" : "GÖK"
    },
    {
        "name" : "test1",
        "surname" : "test11"
    },
    {
        "name" : "test2",
        "surname" : "test22"
    }
]`

try {
    let users = JSON.parse(persons,(key,value) => {
        //console.log("Key", key)
        //console.log("Value", value)
        return key == 'name' ? value.toUpperCase() : value
    })
    console.log(users)
} catch (error) {
    console.log(error.message)
}

