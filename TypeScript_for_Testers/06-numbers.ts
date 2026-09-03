export {};

const a = 30 
const b = 10;
const price = 19.99;

console.log(a);
console.log(price);


//operacje matematyczne
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//operator modulo, dzielenie z resztą
console.log(10 % 3); // 1, bo 10 dzielone przez 3 daje resztę 1
console.log(10 % 4); // 2, bo 10 dzielone przez 4 daje resztę 2

const number = 10;
if (number % 2 === 0) {
  console.log(`${number} jest parzysta`);
} else {
  console.log(`${number} jest nieparzysta`);
}

// maksymalne wartości
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let big: bigint = 9007199254740991111n;
console.log(big);

//Rzutowanie typów
const ten = '10';
console.log(parseInt(ten));
console.log(typeof Number(ten));

const zeroSix = '0six';
//console.log(Number(ten))