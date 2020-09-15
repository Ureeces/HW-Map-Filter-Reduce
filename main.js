// 1a. You are given an array of numbers below
//  b. Using reduce, subtract all of the numbers in the array from an 
//     initial number 200

let numbers = [12, 3, 5, 3, 5, 4];

let diff = numbers.reduce((difference, num) => difference - num, 200);
console.log(diff);

// 2. Add 500 to each bottle of red wine, then add all the red wine bottles together. Use all three methods we learned today and use method chaining.
let data = [
    {
    wineColor: 'red',
    year: '1922',
    region: 'Bordeaux',
    numBottles: 123
    },
    
    {
    wineColor: 'red',
    year: '1972',
    region: 'Beaujolais',
    numBottles: 29
    },
    
    {
    wineColor: 'white',
    year: '2020',
    region: 'Bourgogne',
    numBottles: 224
    },
    
    {
    wineColor: 'white',
    year: '1987',
    region: 'Merlot',
    numBottles: 122
    },
    
    {
    wineColor: 'white',
    year: '1963',
    region: 'Rioja',
    numBottles: 22
    },
    
    {
    wineColor: 'red',
    year: '1976',
    region: 'Napa',
    numBottles: 54
    }
];

