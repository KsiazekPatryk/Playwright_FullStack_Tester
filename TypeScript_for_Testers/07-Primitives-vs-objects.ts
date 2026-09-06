export {};

//primitives
const number: number = 10;

const name: string = 'Bartek';

const isActive: boolean = false;

console.log(number);
console.log(name);
console.log(isActive);

if (isActive) {
    console.log('Primitive this is active');
}

//object wrappers

const newNumber = new Number(10);
const newName = new String('Patryk');
const newIsActive = new Boolean(false);

console.log(newNumber);
console.log(newName);
console.log(newIsActive);

if (newIsActive.valueOf()) {
    console.log('Object wrapper this is active');
}

// rzutowanie typów - string  

console.log('rzutowanie typów - string');
const numberToString = 123;
const booleanTruetoSting = true;
const booleanFalseToString = false;

console.log(String(numberToString));
console.log(String(booleanTruetoSting));
console.log(String(booleanFalseToString));

console.log(numberToString.toString());
console.log(booleanTruetoSting.toString());
console.log(booleanFalseToString.toString());

// null / undefined

const nullValue: null = null;
const undefinedValue: undefined = undefined;

console.log(nullValue);
console.log(undefinedValue);

//rzutowanie typów - number

console.log('rzutowanie typów - number');
console.log(Number('42'));
console.log(Number(''));
console.log(Number('abc'));
console.log(Number(true));
console.log(Number(false));
console.log(parseInt('42'));
console.log(parseInt(''));
console.log(parseInt('abc'));
console.log(parseInt('null'));
console.log(parseInt('undefined'));


//rzutowanie typów - boolean

console.log('rzutowanie typów - boolean');
console.log(Boolean('true'));
console.log(Boolean(''));
console.log(Boolean('abc'));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(undefined));

