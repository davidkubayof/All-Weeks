// class Person {
//     #age = 0;
//     #name = "" 
//     constructor(name ){
//         this.name = name 
//     }
//     setName(name){
//         this.#name = name
//     }
//     addToAge(){
//         this.#age +=1;
//     }
//     getName(){
//         return this.#name
//     }
//     getAge(){
//         return this.#age 
//     }
// }
// const p = new Person("David")

// class Car {
//     #id = 0
//     constructor(id ,brand , maxSpeed , isElectric){
//         this.#id = id
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//         this.isElectric = isElectric
//     }
//     setNewMaxSpeed(speed){
//         this.maxSpeed = speed
//     }
//     show(){
//         console.log(this.#id , this.brand ,this.maxSpeed ,this.isElectric);
//     }
// }

// const c1 = new Car(5,"dan" , 150 , false )
// c1.setNewMaxSpeed(100)
// c1.show()
 
// class Person {
//     constructor(name){
//         this.name = name
//     }
// }
// class Studant extends Person {
//     constructor(name ,classID) {
//      super(name)
//      this.classID =classID       
//     }
// }
// const s = new Studant("david" , 3)
// console.log(s.classID);
class Animal {
    constructor(name , breed , numOfLegs , isVegan){
        this.name = name
        this.breed = breed
        this.numOfLegs = numOfLegs
        this.isVegan = isVegan
    }
}

class Dog extends Animal {
    bark(){
    console.log(`is bark ${this.name}`);
    
    }
}
class Cat extends Animal {
    constructor(name , breed){
        super(name , breed)
        this.name = name
        this.breed = breed
    }
    scratch(){
    }
}
// const a1 = new Animal("david" , "BMV" , 4 , false)
const d1 = new Dog("david" , "BMV" , 4 , false)
d1.bark()