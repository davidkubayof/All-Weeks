//exe 1
// function david(){

// }
// function multiple(x,y) 
//     { console.log(x*y); };

//exe 2
// function add(x,y)
//     {return console.log(x+y);};

//exe 3
// multiple(2,4);
// add(2,3);

//exe 4
// function get_name(name){
//     console.log(name.toUpperCase())
// }
// get_name("david")

//exe 5
// function getAges(age){
//     return 2025 - age}
// console.log(getAges(25))

//exe 6 
// const add = (a,b)=>{
//     return a+b;
// }
// const subtract = (a,b)=>{
//     return a-b;
// }
// const multiply = (a,b)=>{
//     return a*b;
// }
// const divide = (a,b)=>{
//     return a/b;
// }
// console.log(add(1,2))
// console.log(subtract(1,2))
// console.log(multiply(1,2))
// console.log(divide(0,0))

//exe 7
// function logger(fn){
//      console.log("start function"); 
//      fn(); 
//      console.log("end function"); 
//     } 
// const add = (a,b)=> a+b; 
// logger(add);

//exe 8
// const multiply = (a)=> a*2;
// const subtract = (a)=> a-5;
// const divide = (a)=> a/10;


// const start = (a,fn)=>{
//     return fn(a);
// }
// console.log(start(5 , multiply))

//exe 9
//error, const/let are block scoped
// if(true)
// {
//     const name ="david";
// }
// {
//     console.log(name);
// }
// // let is not block scoped
// if(true)
// {
//     let name ="david";
// }
// {
//     console.log(name);
// }

// function momo(){
//     let name ='david'
// }
// momo();
// console.log(name);

// const age = 34; 
// function sayAge(){
//      console.log(`age is: ${age}`);
//      }

// function test(){
//     let x = 5; 
//     if (true){
//         x = 10; 
// }  
//     console.log(x); 
// } 
// test();

// 1. הצהרת פונקציה רגילה (Function Declaration)
// function names(name) {
//     return name;
// }
// console.log(names("Dana")); // "Dana"

// // 2. פונקציה אנונימית המושמת למשתנה (Function Expression)
// const f1 = function(name) {
//     return name;
// };
// console.log(f1.name); // "f1"
// console.log(f1("Eli"));

// // 3. פונקציית חץ (Arrow Function)
// const f2 = (name) => {
//     return name;
// };
// console.log(f2("Noa")); // "Noa"


// function outer(){
//     let leveler = 0;

//     function inner(){
//         leveler++;
//         return leveler;
//     }
//     return inner
// }
// let level = outer();

// console.log(level());
// console.log(level());

// function make(z){
//     return function(y){
//         return x*y;
//     }
// }
// const by5 = make(5)
// const by10 = make(10)

// console.log('2*5:>>',by5(2));
// console.log('2*10:>>',by10(2));


    
// function spelle(name){
//     let powerLevel = 0;
    
//     function inner(){
//         powerLevel++;
        
//         return `name: ${name} powerLevel: ${powerLevel}`;
//     }
//     return inner;
// }
// const fireball = spelle(`fireball`);
// const advancedFireball = spelle("adFireball")

// console.log(advancedFireball()) 
// console.log(advancedFireball()) 
// console.log(fireball())
// console.log(fireball())

//
// function makeFunc(){
//   const name = "Mozilla";

//   function displayName(){
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// const add15 = makeAdder(15);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12