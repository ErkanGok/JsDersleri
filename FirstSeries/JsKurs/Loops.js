
for(let i = 0; i<=5;i++) {
    console.log(i)
}

const names = ["Tayfun" , "Mehmet", "Gökhan"]

for(let i = 0; i<names.length;i ++) {
    //console.log(names[i])
}

const countries = ["Turkey", "Cyprus", "Azerbaijan"]
const newCountries = []

for(let i = 0; i<countries.length;i++) {
    newCountries.push(countries[i].toUpperCase());
    console.log(newCountries[i]);
}

const nums = [1,2,3,4,5,6,7]

for(const elements of nums) {
    console.log(elements) // indis değerleri önemli değilse bu kullanım ile değerleri alabiliriz
    // indiz ile kullanırsak stringi char char alır
}


