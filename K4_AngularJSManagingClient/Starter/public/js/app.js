angular.module('TestApp', []);

angular.module('TestApp')
  .controller('MainController', ctrlFnt);

function ctrlFnt() {
  this.message = 'Hello';

  this.people = [
    {
      name: 'Callipso'
    },
    {
      name: 'Tracey'
    },
    {
      name: 'carlos'
    }
  ];
}
