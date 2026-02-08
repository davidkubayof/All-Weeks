// const body = document.body;
// console.log(body);
// const a = document.getElementById("my-header");
// a.textContent = "DODO";
// a.style.color = "red";

// const creath1 = document.createElement("h1");
// creath1.textContent = "AAALKHSLWQA";
// creath1.style.background = "red";
// body.appendChild(creath1);
// const h2 = document.getElementsByClassName("my-header2");
// for (let i = 0; i < h2.length; i++) {
//   console.log(h2.length);
//   h2[i].textContent = "SABABA";
//   h2[i].style.color = "red";
//   console.log(h2);
// }

// const h1 = document.getElementById("my-h1");
// h1.textContent = "vcjmbgvjhgh";
// console.log(h1);

// const p = document.getElementsByClassName("my-p");
// p.textContent = "aoijhoih";
// console.log(p);

const body = document.body;
const myH1 = document.getElementById("my-header1");
myH1.textContent = "DODO";
myH1.style.color = "green";

const creatH1 = document.createElement("h1");
creatH1.textContent = "SHAPIRA";

body.appendChild(creatH1);
creatH1.innerHTML = "<h3> hiiii </h3>";

creatH1.classList.add("red");

setTimeout(() => {
  creatH1.classList.remove("red");
  creatH1.classList.add("green");
}, 1000);

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  const nameInput = document.getElementById("name");
  console.log("User entered:", nameInput.value);
});

const button = document.getElementById("my-button");

button.addEventListener('click', (event) => {
  button.style.background = "yellow";
});

button.addEventListener("mouseleave", (event) => {
  button.style.background = "red";
});

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener("click" ,(e) => {
    e.stopPropagation()
    console.log('Parent listiner fir');
})
child.addEventListener("click" ,(e) => {
    console.log('CHILD listiner fir');
})
body.addEventListener('click',(e)=>{
    console.log("body");
    
})