// module one
var moduleOne = require('./utils/module-one.js');
console.log(moduleOne.randomNumber(100, 1000000));


//module two
var moduleTwo = require('./utils/module-two.js');
var number = moduleOne.randomNumber(100, 1000000);
console.log(moduleTwo.toUSD(number));


//module three
var moduleThree = require('./utils/module-three.js');
console.log(moduleThree.accountBalance());
console.log(moduleThree.randomNumberToUSD(number));
var randomNumberToUSD = moduleThree.randomNumberToUSD(number);
var accountBalance = moduleThree.accountBalance();


//http request
var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write('This works');
  res.end();
}).listen(5000);
