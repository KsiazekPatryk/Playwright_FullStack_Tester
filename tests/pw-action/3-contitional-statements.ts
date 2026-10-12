
export {};

let isRaining = false;

if (isRaining) {
    console.log("It's raining outside.");
} else {
    console.log("It's not raining outside.");
}


//warunek konieczny ? : -skrócony czas
//jako zamiennik if / else
//console.log(warunek ? prawda : fałsz)

const weatherForecast = isRaining ? "It's raining outside." : "It's not raining outside.";
console.log(weatherForecast);

const ENV = 'PROD';
console.log(ENV === 'PROD' ? "Odpalam testy na prodzie!" : "Odpalam testy na QA!");

let statusCode = '200';
if (statusCode.startsWith('2xx')) {
    console.log('status code: 2xx');
} else if (statusCode.startsWith('4xx')) {
    console.log('status code: 4xx');
} else {
    console.log('Unknown status code');
}

//switch-case
let statusClass  = statusCode.charAt(0);
switch (statusClass) {
    case '2':
        console.log('status code: 2xx');
        break;
    case '4':
        console.log('status code: 4xx');
        break;
    default:
        console.log('Unknown status code');
        break;
}

