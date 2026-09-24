/* eslint-disable no-console */

export {};

console.log (0/0);

const five = 'n5';

console.log(typeof five);

console.log(typeof Number(five))
console.log(typeof parseInt(five));


console.log(Number(five));
console.log(parseInt(five));


//Ciekawostka !!
 
console.log(String === String);
console.log(Number === Number);
console.log(Boolean === Boolean);

//Porównanie NaN
console.log(isNaN(NaN));
console.log(isNaN(NaN));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN('NaN'));
console.log(Number.isNaN('abc'));
console.log(Number.isNaN(123));


//Sprawdzenie czy wartość jest liczbą!
//Sprawdzenie typu nie wystarczy bo NaN jest typu 'number
console.log(typeof five === 'number');


