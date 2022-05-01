// accessing method and property
const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};
// accessing property
person.name; // John
// accessing method
person.greet(); // hello

//ARROW FUNCTION
//This function
let x = function(x, y) {
   return x * y;
}
//can be written as
let x = (x, y) => x * y;
//Example 1: Arrow Function with No Argument
let greet = () => console.log('Hello');
greet(); // Hello
//Example 2: Arrow Function with One Argument
let greet = x => console.log(x);
greet('Hello'); // Hello 
//Example 3: Arrow Function as an Expression
let age = 5;
let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');
welcome(); // Baby
//Example 4: Multiline Arrow Functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}
let result1 = sum(5,7);
console.log(result1); // 12
//this with Arrow Function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        // this is accessible
        console.log(this.age);
        function innerFunc() {
            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }
        innerFunc();
    }
}
let x = new Person();
x.sayName();
// OUTPUT
// 25
// undefined
// Window {}