// //1
// class Phone {
//     constructor(brand , model){
//         this.brand = brand
//         this.model = model
//     }
//     details(){
//         console.log(`Phone: ${this.brand} ${this.model}`);
//     }
// }
// const p1 = new Phone("Samsung", "S22")
// p1.details()

// //2
// class Rectangle {
//     constructor(width , height){
//         this.width = width
//         this.height = height
//     }
//     area(){
//         return this.height * this.width
//     }
// }
// const r1 = new Rectangle(5,4)
// console.log(r1.area())

// //3
// class BankAccount {
//     constructor(owner , balance ){
//         this.owner = owner;
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//     if(this.balance >= amount){
//         this.balance -= amount;
//     }else{console.log("not enough mony")}

//     }
//     checkBalance(){
//         console.log(`balance: ${this.balance}`);
//     }
// }
// const b1 = new BankAccount("david" , 1000);
// b1.deposit(500)
// b1.withdraw(200)
// b1.checkBalance()

// //4
// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     speek(){
//         console.log(`${this.name} makes a sound`);
//     }
// }
// class Dog extends Animal {

//     bark(){
//         console.log(`${this.name} barks`);
//     }
// }
// const a1 = new Animal("Rocky")
// a1.speek()
// const d1  = new Dog("Rocky")
// d1.bark()

// //5
// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }
//   describe() {
//     console.log(`this is a type ${this.type}`);
//   }
// }
// class Car extends Vehicle {
//   constructor(brand) {
//     super("car");
//     this.brand = brand;
//   }
//   info() {
//     console.log(` This is a ${this.brand} ${this.type}`);
//   }
// }
// const v1 = new Vehicle("car");
// v1.describe();

// const c1 = new Car("BMW");
// c1.info();

// // 6
// class Shape {
//     area(){
//         return 0
//     }
// }
// class Circle extends Shape {
//     area(radius){
//         console.log( Math.PI * radius**2); 
//     }
// } 

// class Square extends Shape {
//     area(side){
//         console.log(side**2); 
//     }
// }
// const c1 = new Circle()
// c1.area(3)
// const s1 = new Square()
// s1.area(4)

// //7
// class Book {
//     constructor(title, author){
//         this.title = title
//         this.author = author
//     }
//     info(){
//         console.log(` ${this.title} by ${this.author}`);
//     }
// }
// const b1 = new Book( "The Hobbit","Tolkien")
// b1.info()

// //8
// class Person {
//     constructor(name){
//         this.name = name
//     }
//     greet(){
//         console.log(` Hello, I'm ${this.name}`);
//     }
// }
// class Studant extends Person {
//     constructor(name , school){
//         super(name)
//         this.school = school
//     }
//     study(){
//         console.log(`${this.name} is studying at ${this.school}`);
//     }
// }
// const p1 = new Person("Alice")
// p1.greet()

// const s1 = new Studant("Alice","Oxford")
// s1.study()

//9
class Employee {
    #salary
    constructor(salary){
        this.#salary = salary
    }
    getSalary(){
        return this.#salary
    }
    work(){
        console.log(`Employee is working`);
    }
}
class Manager extends Employee {
    work(){
        console.log(` Manager is managing`);
    }
}
const e1 = new Employee(4000)
console.log(e1.getSalary())
e1.work()

const m1 = new Manager(5000)
console.log(m1.getSalary())
m1.work()