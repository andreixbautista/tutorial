// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  let txt = 'Error';
  let big = "Biggest integer is ";
  if (x > y ) {
    return (big , x );
  } else if (y > x ){
    return (big , y);
  }else if (x === y || y === x) {
   return (big , x || y);
  }else{
    return (txt);
  }
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  
if (language === 'German'){
  let Guten = 'Guten Tag!';
  return (Guten);
  }else if (language === 'Mandarin'){
  let Ni = 'Ni Hao!';
  return (Ni);
  }else if (language === 'Spanish'){
    let Ho = 'Hola!';
    return (Ho);
  }else{
    let French = 'Hello!'
    return ( French);
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5){
    return true;
  }else if(num !== 10 || num !== 5) {
    return false;
  }else{}
 }

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if (num < 50 && num > 20){
    return true
  }else{
    return false
  }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (Math.floor(num) || num === 0){
    return true;
  }else{
    return false;
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num

  if (num % 3 === 0 && num % 5 !== 0){
    return 'fizz';
    } else if (num % 5 === 0 && num % 3 !== 0){
      return 'buzz';
    } else if (num % 3 === 0 && num % 5 === 0){
      return 'fizzbuzz';
    } else {
      return num;
    }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(num < 2) return false;
  for (const i = 2; i < num; i++)
    if(num % i === 0){
      return false;
    } else {
      return true;
    }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};