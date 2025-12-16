// 1
// try {
//     const response = await fetch("http://159.69.23.28:3005/random_joke");
//     const data = await response.json();
//     console.log(` setup: ${data.setup}
//  punchline: ${data.punchline}`);

    
// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }
// 2
// try {
//     const response = await fetch("http://159.69.23.28:3005/random_joke");
//     const data = await response.json();
//     const type =  data.type
//     console.log(type.toUpperCase());
    
// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }

// 3
// try {
//     const response = await fetch("http://159.69.23.28:3005/random_joke");
//     const data = await response.json();
//     const setup =  data.setup
//     const punchline =  data.punchline

//     console.log("setup: ", setup.length);
//     console.log("punchline: ",punchline.length);

// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }

//4
// while (true) {
//     try {
//         const response = await fetch("http://159.69.23.28:3005/random_joke");
//         const data = await response.json();
//         const punchline =  data.punchline
    
//         const q = punchline.includes("?")
//         if(q===true){
//             console.log("Punchline contains a question: ",data, q)
//         }
//         else if(q===false){
//             console.log("No question:",data, q);
//         }

//     } catch (erro) {
//         console.log("Failed to load joke",erro);  
//     }
// }

//5
// try {
//     const response = await fetch("http://159.69.23.28:3005/random_joke");
//     const data = await response.json();
//     const setup =  data.setup
//     const punchline =  data.punchline

//     console.log("setup + punchline: ", setup +" < setup : punchline > "+ punchline);

// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }

//6
// while (true) {
//     try {
//         const response = await fetch("http://159.69.23.28:3005/random_joke");
//         const data = await response.json();
//         const setup =  data.setup.toLowerCase()
//         const q = setup.includes("dad")
//         if(q===true){
//             console.log("setup contains a dad: ",data, q)
//         }
//         else if(q===false){
//             console.log("No dad:",data, q);
//         }

//     } catch (erro) {
//         console.log("Failed to load joke",erro);  
//     }
// }

//7
// try {
//     const response = await fetch("http://159.69.23.28:3005/random_joke");
//     const data = await response.json();
//     data.id = 1
//     data.setup = "wwww"
//     data.punchline = "pppp"
//     console.log(data.id, data.setup,data.punchline);
// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }

//8.1
// try {
//     const response = await fetch("http://159.69.23.28:3005/random_joke",{
//         metod:"GET"
//     })

//     const data = await response.json();
//     console.log("Original setup:" , data);
//     console.log("Cut setup (20 chars):", data.setup.slice(0,20));

// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }
//8.2
// fetch("http://159.69.23.28:3005/random_joke",{
//     method:"GET"
// })
//   .then(response => response.json())
//   .then(joke => {
//     const originalSetup = joke.setup;
//     const cutSetup = originalSetup.slice(0, 20);

//     console.log("Original setup:", originalSetup);
//     console.log("Cut setup (20 chars):", cutSetup);
//   })
//   .catch(error => console.error("Error fetching joke:", error));

//9
// try {
//     const response = await fetch("http://159.69.23.28:3005/random_joke",{
//         metod:"GET"
//     })

//     const data = await response.json();
//     console.log(data.punchline.split('').reverse().join(''));

// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }

// //10
////////////////////////////////////////
// try {
//     for(let i=0;i<5;i++){
//         const response = await fetch("http://159.69.23.28:3005/random_joke",{
//             method:"GET"
//         })
//         const data = await response.json();
        
//         let str = ""

//         for(let x=0;x<data.setup.length;x++){
//             if("aeiouAEIOU".includes(data.setup[x])){
//                 str +="*"
//             }
//             console.log(data.setup);
//         }
       
//     }

// } catch (erro) {
//     console.log("Failed to load joke",erro);  
// }



