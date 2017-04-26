// Your Javascript Code Goes Here
'use strict';
//fnt statement
function greet(){
  console.log('hi');
}
greet();

//fnt are fist class

function logGreeting(fn){
  fn();
}
logGreeting(greet);

//fnt expression
let greetMe = function(){
  console.log('Hi me');
}
greetMe();
//its first class
logGreeting(greetMe);

//use fnt expresstion on flu
logGreeting(function(){
  console.log('Hi me again');
})
