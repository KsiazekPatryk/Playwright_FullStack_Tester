export {};

// Boolean values
const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(isFalse);

// Sprawdzenie warunków

const isAdmin = true;

if (isAdmin) {
    console.log('You can edit this content');
} else {
    console.log('You cannot edit this content');
}

//Operatory logiczne

// AND && - zwraca true, jeśli oba warunki są prawdziwe.
//Jeśli pierwszy warunek jest false, nie sprawdzam drugiego.

const isLoggedIn = true;

const hasPermission = true;

if (isLoggedIn && hasPermission) {
    console.log('You can edit this content');
} else {
    console.log('You cannot edit this content');
}

//OR - zwraca true, jeśli przynajmniej jeden warunek jest prawdziwy

