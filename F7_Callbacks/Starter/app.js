'use strict';

function greet(cb) {
  console.log('Hello!');
  let data = {
    name: 'Me Bitches'
  };
  cb(data);
}

greet(function(data){
  console.log('The cb is invoked');
  console.log(data);
});

greet(function(data){
  console.log('The cb is invoked the second time');
  console.log(`${data.name} inside the second cd call`);
});
