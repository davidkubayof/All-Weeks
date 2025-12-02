// const age = 25;
// const name = "david"
// const address = "nyc"
// const areYouVegan = "no"
// const numberOfKids = 5

// const { useReducer } = require("react");

// console.log(age , name , address, areYouVegan, numberOfKids);

// // console.log(`my age ${age} my name ${name} my addres ${Address} are i? ${areYouVegan} numnber of kid ${Number_of_kids}`);
// console.log(`my age ${typeof(age)}\n my name ${typeof(name)} my addres ${typeof(address)} are i? ${typeof(areYouVegan)} numnber of kid ${typeof(numberOfKids)}`);
// const num = false - 5
// console.log(typeof(num))
// console.log(num)

// console.log(process.argv);
// const [, ,first,second]=process.argv;
// console.log(first.toUpperCase(),2025 -second)

// let names;
// names.forEach((name))=>{console.log(name)}
// names("david")

//1
// const arr = [1,2,3,4];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// 2
// for(const num of arr){
//     console.log(num);
// }

//3
// arr.forEach((num,i)=>{
//     console.log(num,i)

// })

// const evens = [1,2,3,4,5,6]
// 				.map((num)=>{
// 					if(num%2 === 0){
// 						return num;
// 					}
// 				})
// evens = [undefiend, 2, undefined, 4, undefined, 6]

// const arr = ["david","ko","bo","do"];

// const arr2 = arr.map((name,i)=>{
//     console.log({name,i})
//     // return {
//     //     name,
//     //     i
//     // }
// })
// // console.log(arr2)

// const names = ["david","dan","fk"];
// const dname = names.filter((name)=>{
//     if(name.startsWith("d")) return true
   
// })


// const cars = [
//     {name: "bmw",speed:260},
//     {name: "tyota",speed:70},
//     {name: "merch",speed:100},
//     {name: "bmw",speed:50},
//     {name: "tyota",speed:70},
//     {name: "trt",speed:90},
// ]
// const  filterCars = cars.filter(car =>{
//     return car.speed > 80;
// })

// const mapping = filterCars.map(car=>{
//     return car.name + ":" +car.speed;
// })

// const students = [
//   { name: "Aaron", grades: [90, 95, 85] },
//   { name: "Bob", grades: [70, 75, 72] },
//   { name: "Jonnah", grades: [88, 92, 91] },
// ];
// const filterstudant = students.filter(s=>{
//     const sum = s.grades.reduce((total ,currVal)=>{
//         return total + currVal
//     },0)
//     return (sum / s.grades.length) > 85;
// })

// const mapess = filterstudant.map(s =>{

// })

// console.log(mapess);

// students.sort((a,b)=> a.name - b.grades)
// console.log(students)