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

// Replacing characters and words
const text = 'TypeScript is awesome';
console.log(text.replace('awesome', 'great'));
console.log(text.replaceAll(' ' , '_'));


// Repeating strings

const title = 'a'
console.log(title.repeat(129));

// String length
console.log(title.length);

// String padding
console.log(firstName.padStart(firstName.length + 5, '-'));
console.log(firstName.padEnd(firstName.length + 4, '-'));

// Removing whitespace

const titleFromWebsite = '   TypeScript is awesome   ';
console.log(titleFromWebsite.trim());
console.log(titleFromWebsite.trimStart());
console.log(titleFromWebsite.trimEnd());


// Checking content

const email = 'patrick.testing@example.com';
console.log(email.includes('@'));
console.log(email.startsWith('patrick'));
console.log(email.endsWith('.com'));

// Searching
const testText = 'Test and check, no room for bugs, smooth releases, happy hugs';
console.log(testText.search('bugs'));
console.log(testText.search(/bugs/i));
console.log(testText.search(/ugs/i));

// Extracting part of a string
console.log(testText.slice(0, 13));
console.log(testText.substring(5, 10));


// Extracting from a position to the end
console.log(testText.slice(5));

// Extracting from the end
console.log(testText.slice(-5));

// Splitting strings
console.log(testText.split(' '));
console.log(testText.split(','));

// Checking a character at an index
console.log(testText.charAt(0));

// Finding the index of a character or substring
console.log(testText.indexOf('T'));
console.log(testText.indexOf('bugs'));
