//console.log(new Date().toLocaleDateString())

/*
for(let i = 1; i<=10;i++) {
    console.log(i)
}
*/
// declaring object literal
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
    isMarried: true
  }
  // iterating through object keys
  for(const key in person) {
      console.log(key, person[key])
  }

  // objectler her zaman const tipinde oluştulmalı

  let isRaining = true

  isRaining 
  ? console.log("You need a rain coat")
  : console.log("No need for a raining coat")

  //sınıflar tanımlanırken isimlerin baş harfleri büyük olmalı değişkenler camelCase