exports = module.exports = function() {
  'use strict';
  
  var template = require('./template'),
      body = document.querySelector('.body');
  
  body.innerHTML = template;
  
  console.log(body);
}

