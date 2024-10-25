console.log('Hello World');
// this is a single line comment
/* this is a multi-line comment */

let firstName = 'John'; 
console.log(firstName);

console.log("The first name is " + firstName);

var lastName = "Doe";
console.log(lastName);

const birthday = "01/01/2000";
console.log(birthday);
//let = variable that can be changed
//var = variable that can be changed
//const = variable that cannot be changed   

firstName = "Jane";
console.log("The first name is " + firstName);

// birthday = "02/02/2000";
console.log("The birthday is " + birthday);
// this will throw an error because birthday is a constant and cannot be changed

if(true){
    let block = "stone"; // block is only available in this block of code
    var stone = "lime"; // stone is available throughout the code
    console.log(block);
    console.log(stone);
}
    console.log(stone);
    // console.log(block);