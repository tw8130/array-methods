// .Write a JavaScript function to get the last element of an array.Passing the parameter 'n' will
// return the last 'n' elements of the array.

function last(array, n) {
    if (array == null)
        return 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0))
}

console.log(last([7, 9, 0, -2])); //-2
console.log(last([7, 9, 0, -2], 3)); //[9,0,-2]
console.log(last([7, 9, 0, -2], 6)); //[ 7, 9, 0, -2 ]
console.log(last([7, 9, 0, -2], 1)); //[-2]