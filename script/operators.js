
console.log("you made it to the console!");





let number= [4,7,13,99,0,100,5,1,'1']

//simpleOperators
function simpleOperators (numberA, numberB){
let adding= numberA + numberB
let subtraction= numberA - numberB
let multiplying= numberA * numberB
let division= numberA / numberB
let modulus= numberA % numberB
console.log(numberA, numberB, 'adding', adding);
console.log(numberA, numberB,'subtraction',subtraction);
console.log(numberA, numberB,'multiplying',multiplying);
console.log(numberA, numberB,'division',division);
console.log(numberA, numberB,'modulus',modulus);

}

skip count by ____ for ____ times starting at ____
function skipCpinting (interval, times, startingNumber){
  for (let i=1; i <= times; i++ ) {
  startingNumber = startingNumber + interval
  console.log(startingNumber);
}

}


function howManyTimes (numberStart, numberEnd, SkipCountTimes){
  while (numberStart<numberEnd){

  numberStart =+ skipCount;
  console.log(numberStart);
  }
}

function looseEquality (firstOperand, secondOperand){
  console.log(firstOperand === secondOperand);
}
function customerType (points){
  return type = points > 100
}

let number = [4,7,13,99,0,100,5,1,'1'];



simpleOperators(number[0],number[1]);
simpleOperators(number[2],number[3]);
simpleOperators(number[4],number[5]);
simpleOperators(number[6],number[7]);

skipCpinting (number[0], number[6], number[1]);
skipCpinting (number[5], number[3], number[1]);
howManyTimes (number[0], number[5], number[1]);

looseEquality (number[7], number[8]);
strictEquality (number[7], number[8]);

console.log(customerType(number[3]));
