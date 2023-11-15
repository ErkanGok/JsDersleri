console.log("30 days of javascript")
//===========================================
console.log([",tayfın", "erbilen","prototürk"])
//===========================================
console.log({
    name: "tayfun",
    surname: "erbilen"
})
//===========================================
console.log("ben %d yasindayim ve %d yilinda dogdum", 32,1993)
//===========================================
console.log("%cDur!" , "font-size: 50px;background:black font-family:Arial; color: red; tex-shadow: 0 0 10px rgba(255,255,255,.3) ")
//===========================================
console.warn("uyari !")
//===========================================
console.error("Hata yaptin !")

//const names = ["ahmet","mehmet","ali"]
//console.table(names)
//===========================================

console.time("calculate 1m array");
new Array(10e5).fill().map((value,index) => index) ; // 1m elemanlı arrayin kaç sn içerisinde oluşturulduğunu basar
console.timeEnd("calculate 1m array");
//===========================================
let a = 5
let b = 6
console.assert(a>b, "a b'den büyük değil!")


//===========================================

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

//===========================================

const test = () => {
    console.count("test called")
}

test()
test()
test()

console.clear()