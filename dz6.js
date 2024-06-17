// 1
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 60,
};

function printCarInfo(car) {
    console.log(`Автомобіль ${car.manufacturer} ${car.model}, ${car.year} року.`);
    console.log(`Середня швидкість: ${car.averageSpeed} км/год.`);
}
function calculateTravelTime(distance) {
    let travelTimeHours = distance / car.averageSpeed;
    let breaks = Math.floor(travelTimeHours / 4);
    let totalHours = travelTimeHours + breaks;
    return totalHours;
}


// 2
let fraction1 = {
    numerator: 1,
    denominator: 2
};

let fraction2 = {
    numerator: 1,
    denominator: 3
};

function addFractions(f1, f2) {
    let numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    let denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
}
function subtractFractions(f1, f2) {
    let numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    let denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
}

function multiplyFractions(f1, f2) {
    let numerator = f1.numerator * f2.numerator;
    let denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
}

function divideFractions(f1, f2) {
    let numerator = f1.numerator * f2.denominator;
    let denominator = f1.denominator * f2.numerator;
    return simplifyFraction({ numerator, denominator });
}

function simplifyFraction(fraction) {
    let gcd = gcdEuclid(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / gcd,
        denominator: fraction.denominator / gcd
    };
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// 3
let time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

function printTime(time) {
    let { hours, minutes, seconds } = time;
    console.log(`${hours}:${minutes}:${seconds}`);
}

function addSeconds(time, secondsToAdd) {
    time.seconds += secondsToAdd;
    normalizeTime(time);
}

function addMinutes(time, minutesToAdd) {
    time.minutes += minutesToAdd;
    normalizeTime(time);
}

function addHours(time, hoursToAdd) {
    time.hours += hoursToAdd;
    normalizeTime(time);
}

function normalizeTime(time) {
    let { hours, minutes, seconds } = time;
    if (seconds >= 60) {
        let extraMinutes = Math.floor(seconds / 60);
        seconds %= 60;
        minutes += extraMinutes;
    }
    if (minutes >= 60) {
        let extraHours = Math.floor(minutes / 60);
        minutes %= 60;
        hours += extraHours;
    }
    time.hours = hours % 24;
}
