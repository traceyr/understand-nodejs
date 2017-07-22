'use strict';

let obj = {
  name: 'Jane Doe',
  greet: function() {
    console.log(`Hello from ${ this.name }`);
  }
};

obj.greet();

//Diff is can pass variable to call, and that is what the this will look at. So can I call this but with a different object and its property?
obj.greet.call({name : 'Jane Does Twin Sister Olivia'});

obj.greet.apply({name: 'Bennet Bennet'});

//diff between call and apply is how you would pass greet parameters if it had any. In .call params would be seperated with commas. In .apply params would be passed in an array

//call and apply allow borrowing of methods
