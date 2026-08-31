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


// String conversion
// Uppercase and lowercase letters
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

//Zmiana znaków/słów
const text = 'TypeScript is awesome';
console.log(text.replace('awesome', 'great'));
console.log(text.replace(' ' , '_'));

