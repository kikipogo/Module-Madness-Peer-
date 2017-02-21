var firstNumber = require('./module-one.js');
var accountBalanceString = require('./module-two.js');


 function functionOne(firstNumber){
    return accountBalanceString.toUSD(firstNumber);
};
 function functionTwo(){
    return 'Account balance:\r';
};

module.exports = {
  randomNumberToUSD: functionOne,
  accountBalance: functionTwo
};
