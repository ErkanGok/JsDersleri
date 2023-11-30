// function hello() {
//     return "Hello World !"
// }

//export default hello // default tanımlandıysa ismin hiçbir önemi yok diğer tarafta import ederken herhangi bir isim verilebilir.


export function hello() {
    return "Hello World !"
}

export let sayHi = name => `hello ${name}`
let test1 = "test1"
let test2 = "test2"

//çoklu export
export {
test1,
test2
}