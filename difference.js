// Write a JavaScript
// function to find the difference between two arrays.

// Test Data:
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


function difference(array1, array2) {
    const result = [];
    for (const value of array1) {
        if (!array2.includes(value)) {
            result.push(value);
        }
    }
    for (const value of array2) {
        if (!array1.includes(value)) {
            result.push(value);
        }
    }
    return result;
}


const array1 = [1, 2, 3];
const array2 = [100, 2, 1, 10];

const result = difference(array1, array2);

console.log(result);