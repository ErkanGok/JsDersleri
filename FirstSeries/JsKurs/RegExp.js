//RegEx ===>> Bilinmeyeni bulmak
// 1 - RegExp constructor
// regex tanimi

let str = 'Ben 30 yaşindayim ve 1993 yilinda dogdum.' // bu ifade içerisinde sadece sayıları çıkartmak isteseydik.

//let pattern = 'love'
//let flag = 'gi'
//let regEx = new RegExp(pattern,flag)

/*
let word = /salak/i  // i: büyük küçük harf hassasiyetini kaldırır
let comment = prompt("yorumunu yaz ama dikkatli ol")

if(word.test(comment)) {
alert("hayir sen salaksin kardesim")
}*/

/*
let string = 'I love Javascript'
console.log(string.match(/love/))
console.log(string.search(/love/)) // indexi verir
*/

/*
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/g,'Javascript') // g flag'i ile metin içerisinde yer alan tüm 'python' kelimelerini değiştirdi.
console.log(matchReplaced)*/

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

/*
let matchReplaced = txt.replace(/%/g, " ")
console.log(matchReplaced)*/

let firstName = '1tayfun';
console.log(/^[a-z]+$/.test(firstName))