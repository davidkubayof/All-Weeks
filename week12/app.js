// function Person(name , age){
//     this.name = name;
//     this.age = age;
//     this.printall=()=>{
//         console.log(this.name ,this.age);
//     }
// }

// const p1 = new Person("David",18)
// p1.printall()

function Car(brand){
    this.brand = brand
    this.drive = ()=>{
        console.log("vrrroooomm");
    }
    this.fuel = ()=>{
        console.log("putting gas…");
    }
}
function Tesla(){
    // this.brand = "Tesla";
    this.fuel = ()=>{
        console.log("charge ");   
    }
}
const t = new Tesla()
Object.setPrototypeOf(t, Car.prototype)
Car.call(t,"Tesla")
console.log(t);


// const c1 = new Car("tesla")
// c1.drive()
// c1.fuel()