export {};

// String Creation

const single = 'single quote';
const double = 'double quote';
const template = `template literal`;
const multiLine = `This is
a multi-line
template literal`;

console.log(single);
console.log(double);
console.log(template);
console.log(multiLine);

// String Concatenation and Template Literals
const firstName = 'Patrick';
const lastName =  'Testing';

//Operator +
console.log ('My name is' + firstName + ' ' + lastName);
// Strings Templates
console.log(`My name is ${firstName} ${lastName}`); 