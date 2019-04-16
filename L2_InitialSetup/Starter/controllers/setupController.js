'use strict';

let Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    //test data
    let starterTodos = [
      {
        username: 'test1',
        todo: 'Buy water',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test2',
        todo: 'dentist',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test3',
        todo: 'cat stuff',
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.create(starterTodos, function(err, data) {
      if (err) {
        console.log(err);
        throw err;
      }
      res.send(data);
    });
  });
};
