// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getAge = () => {
//     return this;
//   };
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getThis = () => {
    return this;
  };
}
function person(name, age) {
  return {
    name,
    age,
    getThis: function () {
        return () => this
    }
  };
}   
const nis = new Person("nis", 45);
const { getThis } = nis;
console.log(getThis());
