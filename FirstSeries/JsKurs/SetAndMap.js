
const names = new Set(['Tayfun','Ahmet','Mehmet']) // Array gibi bir mantığı var

names.add('erkan')
names.delete('Tayfun')
for(let name of names) {
    console.log( 'Ad', names)
} 

console.log(names.has('erkan')) // var mı ? yok mu ? 

//names.clear() // tüm set'i temizler



/*set ile array arasındaki farklar
1-) array içerisine aynı değerden birden fazla ekleyebiliriz.
2-) fakat set her elemanın unique olmasını bekler eklendiği zaman içerisinde iki tane barındırmaz*/

// Map kullanımı object gibidir
// farkı object key value değer tutar 'key'i' string olarak tutar
// Map içerisinde istediğimiz tip olarak değer alabiliriz

const map = new Map()

map.set('name' , 'tayfun')
map.set(3 , "yaş")

console.log(map)