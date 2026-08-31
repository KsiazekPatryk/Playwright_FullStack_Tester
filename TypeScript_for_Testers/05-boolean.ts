export {};

// Boolean values
const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(isFalse);

// Checking conditions

const isAdmin = true;

if (isAdmin) {
    console.log('You can edit this content');
} else {
    console.log('You cannot edit this content');
}

// Logical operators

// AND && - returns true if both conditions are true.
// If the first condition is false, the second condition is not checked.

const isLoggedIn = true;

const hasPermission = true;

if (isLoggedIn && hasPermission) {
    console.log('You can edit this content');
} else {
    console.log('You cannot edit this content');
}

// OR || - returns true if at least one condition is true.
const isSuperAdmin = true;
const isModerator = false;

if (isSuperAdmin || isModerator) {
    console.log('You can edit this content');
} else {
    console.log('You cannot edit this content');
}

// NOT ! - returns true if the condition is false.
const isGuest = false;

if (!isGuest) {
    console.log('You are not a guest');
} else {
    console.log('You are a guest');
}

