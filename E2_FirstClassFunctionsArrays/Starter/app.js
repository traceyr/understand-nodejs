'use strict';

//ojbect properties and methods

let obj = {
  greet: 'Hello Bitches'
};

let prop = 'greet';

console.log(obj.greet);
console.log(obj['greet']);
console.log(obj[prop]);

//functions and arrays

let arr = [];
arr.push(function(){
  console.log('Hello world 1');
});

arr.push(function(){
  console.log('Hello world 2');
});

arr.push(function(){
  console.log('Hello world 3');
});

arr.forEach(function(item){
  item();
});
