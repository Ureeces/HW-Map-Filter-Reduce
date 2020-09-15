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

let result = data
    .filter((wine) => wine.wineColor === 'red') // This is now an array of objects containing the wine objects that are red wines
    .map((wine) => wine.numBottles += 500) // This is now an array of numbers containing the wine counts of all red wines, plus 500 each
    .reduce((total, wineCount) => total + wineCount, 0); // This is the total wine count of all red wines

console.log(result);

// 3. Just Averages
//  - Using reduce, return an integer value for the average of all the index values and/or calculated values in an array.
//  - If the Value is a String, use the character Code number that represents the  first letter in the String.
//  - Use all four arguments in the callback function in your solution
//  - And a ternary wouldn't hurt
const nums1 = [8, 21.3, 16, 55, 22, 44]; // should be 27
const nums2 = [11.12, 43, 56.22, 78, 98, 11]; // should be 49
const nums3 = [2, 1222, 3444, 7254, 83.04444, 1111]; // should be 2186
const nums4 = [2, 1222,'sneeze', 3444, 7254, 8, 'abacus']; //should be 1734

// Condensed it into function so no code is repeated
const justAverages = function(arr) {
    let total = arr.reduce((total, num, index) => {
        let isNum = typeof(num) === 'number' ? true : false;
        if(isNum) {
            total += num;
        }

        else {
            total += arr[index].charCodeAt(0);
        }

        return total;
    }, 0)

    let avg = total / arr.length;

    return Math.floor(avg);
}

console.log(justAverages(nums1));
console.log(justAverages(nums2));
console.log(justAverages(nums3));
console.log(justAverages(nums4));


// 4. Choose all the companies that started after 2000 and sort them ascending
let businesses = [
    // { company: 'Amex', startYear: 2000 },
    // { company: 'Chase', startYear: 1998 },
    // { company: 'Citibank', startYear: 2010 },
    // { company: 'BOA', startYear: 1980 },
    // { company: 'TD', startYear: 2001 },
    // { company: 'Mastercard', startYear: 2011 },
    // { company: 'VISA', startYear: 2000 }
    { company: 'VISA', startYear: 2000 },
    { company: 'Chase', startYear: 1998 },
    { company: 'BOA', startYear: 1980 },
    { company: 'Amex', startYear: 2000 },
    { company: 'TD', startYear: 2001 },
    { company: 'Mastercard', startYear: 2011 },
    { company: 'Citibank', startYear: 2010 },
];

let result4 = businesses
    .filter((business) => business.startYear > 2000) // This is an array of the objects that started after 2000
    .sort((businessA, businessB) => {
        if(businessA.company > businessB.company) {
            return 1;
        }

        if(businessA.company < businessB.company) {
            return -1;
        }

        return 0; 
    }); // This array is now sorted in alphabetical order of company property
//  .sort((businessA, businessB) => businessA.startYear - businessB.startYear) - sorts based on start year

result4;


// 5. COMPUTE INTEGERS
//    Use an array method to return a new array that multiplies all integers in an array by 5.
[1,2,3,4];  // should be [5,10,15,20]
[1,2,undefined,6] // should be [5,10,30]
[1,3,25.5,4,32.9] // should be [5,15,20]


