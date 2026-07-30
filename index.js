console.log('hello');
console.log('i like pizza');

// window.alert('this is an alert')

document.getElementById("myh1").textContent = "Hello";
//document.getElementById("myp").textContent = "Hi "+ username +" . How are you or how are you doing";

// for exponent use ** okey.
let age = 20;
let gpa = 6.8;
console.log(age)

let username;

username = window.prompt("What Is Your user Name");
console.log(username);

document.getElementById("mySubmits").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = "Hello " + username;
    console.log(username);
    document.getElementById("myp").textContent = "Hi "+ username +" . How are you or how are you doing";
}