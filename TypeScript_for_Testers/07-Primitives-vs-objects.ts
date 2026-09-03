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