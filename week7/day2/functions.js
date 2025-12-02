//exe 1.1
// function sayHello(){
//     console.log("Hello from the function")
// }
// sayHello()

//exe 1.2
// function printOneToThree(){
//     for(let i=1; i<=3; i++)
//         console.log(i)
// }
// printOneToThree()

//exe 1.3
// function printLength(){
//     let arr = ["dav","dan","momo","dodo"];
//     console.log(arr.length)
// }
// printLength()

//exe 1.4
// function printStudent(){
//     let obj = {
//         name:"Dana",
//         age:16
//     }
//     console.log(obj.name,obj.age);
// }
// printStudent()

//exe 1.5
// function printEvensToTen(){
//     for(let i=1; i<=10; i++){ 
//         if(i%2===0)
//             console.log(i)
//         }
//     }
// printEvensToTen()

//exe 1.6
// function sumTwoNumbers() {
//     let a = 5;
//     let b = 7;
//     return a+b;
// }
// let x = sumTwoNumbers();
// console.log(`The sum is: ${x}`);

//exe 1.7
// function getNamesLength(){
//     let names = ["Dana", "Noa", "Yossi", "Ali"];
//     return names.length
// }
// console.log(getNamesLength());

// let len = getNamesLength()
// if(len>4){
//     console.log("Big class")
// }
// else{console.log("Small class")}

//exe 1.8
// function getGrade(){
//     let grade = 72;
//     return grade;
// }
// let studentGrade = getGrade()
// if(studentGrade>60){console.log("Passed");}
// else{console.log("Failed");}

//exe 1.9
// function getProduct(){
//     let x = 2;
//     let y = 3;
//     let z = 4;
//     return x*y*z;
// }
// let prod = getProduct() 
// console.log(`Product is: ${prod}`);

//exe 1.10
// function calculateFinalPrice(){
//     let price = 200;
//     let discount = 20;
//     return price - discount;
// }
// let finalPrice = calculateFinalPrice();
// console.log(`Final price: ${finalPrice}`);

//exe 2.1
// function printScore(score){
//     console.log(`Score is: ${score}`)
// }
// let score = 80;
// printScore(score)

//exe 2.2
// let grade = 50;
// function increaseGrade(grade){
//     grade+=10;
//     console.log(grade);
// }
// increaseGrade(grade); 
// console.log(grade);

//exe 2.3
// let counter = 0;
// function incrementCounter(){
//     counter += 1;
//     console.log(counter);

// }
// incrementCounter();
// incrementCounter();
// incrementCounter();
// console.log(counter);

//exe 2.4
// let name = "Outer";
// function printName(name){
//     console.log(name);
// }
// printName("Inner")
// console.log(name)

//exe 2.5
// function createSecret(){
//     let secret = 1234;
//     console.log(secret);
// }
// createSecret();
// console.log(secret)

//exe 2.6
// function toNum(a,b){
//     return  a+b;   
// }
// let a = 100;
// console.log(toNum(5,7))

//exe 2.7
// function changGread(student){
//     student.gred = 100;
//     console.log(`is gread${student}`)
// }

// let studant = {name:"david",gred:70};
// console.log(`befor ${studant}`);

// changGread(studant)

// console.log(`after ${studant}`)

//exe 2.8
// function sum(numbers){
//     console.log(numbers[0]+numbers[1]+numbers[2]+numbers[3])
// }
// let numbers = [1,2,3,4];
// sum(numbers);
// console.log(numbers);
//exe 2.8 
// function funcSum(numbers){
//     let sum = 0;
//     for(num of numbers){
//         sum+=num;
//     }
//     return sum 
// }
// let numbers = [1,2,3,4];
// console.log(funcSum(numbers));

//exe 2.9
// function printMessage(message){
//     if(typeof(message)==="string") {console.log(message)}
//     else if(typeof(message)==="undefined"){console.log("No message",typeof(message))}
// }
// printMessage()
// printMessage("Hi")