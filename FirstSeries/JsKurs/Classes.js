
class Person {
    constructor(firstName, lastName,age,country = "Turkiye",city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.skills = []
    }
    getFullName(){
        return this.firstName + " " + this.lastName
    }

    get getSkills() {
        return this.skills
      }

    set setSkill(skill) {
        this.skills.push(skill)
      }

      static adana(){
        return "adana !"
      }
}



const person1 = new Person("Erkan", "GÖK", 29, "Turkiye", "30")
const person2 = new Person("test", "abc")
const person3 = new Person("test2", "def")
console.log(person1,person2,person3)

console.log(person1.getFullName())

person1.setSkill = "Javascript"
person1.setSkill = "React"

console.log(person1.getSkills)

console.log(Person.adana())

class Teacher extends Person {
    constructor(firstName, lastName,age,country ,city,gender){ 
        super(firstName, lastName,age,country ,city)
        this.gender = gender
    }
    teach() {
        return "matematik dersi öğretiliyor..."
    }
    get getGender(){
        return this.gender == 1 ? "Erkek" : "Kadin"
    }

    get getFullName(){
        return super.getFullName() + '('+ this.getGender + ')'
    }
}

class Student extends Person {
    learn(){
        return " ders öğreniliyor..."
    }
}
const person12 = new Person("ert", "fgh", 30, "Turkiye", "Eskisehir")
const teacher1 = new Teacher("Erkan", "GÖK", 30, "Turkiye", "Eskisehir",1)
const student1 = new Student("abc", "def", 30, "Turkiye", "Eskisehir",2)

console.log(
    teacher1.getGender
    )

console.log(
    student1.learn()
    )

    console.log(
        teacher1.getFullName
        )