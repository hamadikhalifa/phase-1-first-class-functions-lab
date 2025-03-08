const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Test case
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Expected output: ['Antonia', 'Nuru']

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Test case
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Expected output: ['Amari', 'Mo']

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Test case
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Expected output: ['Antonia', 'Nuru']

console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
// Expected output: ['Amari', 'Mo']

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Test case
const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(5)); 
// Expected output: 20

const fareDoubler = createFareMultiplier(2);

// Test case
console.log(fareDoubler(10)); 
// Expected output: 20

const fareTripler = createFareMultiplier(3);

// Test case
console.log(fareTripler(10)); 
// Expected output: 30

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};

// Test cases
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
// Expected output: ['Antonia', 'Nuru']

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 
// Expected output: ['Amari', 'Mo']