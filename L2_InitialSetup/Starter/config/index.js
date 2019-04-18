'use strict';

let configValues = require('./config');

module.exports = {
  getDBConnectionString: function() {
    return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0-k4jj7.mongodb.net/test?retryWrites=true`;
  }
};
