// Your Javascript Code Goes Here
'use strict';

let firstname = 'jane';

(function(lastname){
  let firstname = 'john';
  console.log(firstname);
  console.log(lastname);
}('doe'));

console.log(firstname);
