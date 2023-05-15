// Write a JavaScript
// function to filter false, null, 0 and blank values from an array.

// Test Data:
//     console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function filter_array_values(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== "");
}

const arr = [58, "", "abcd", true, null, false, 0];

const filtered_arr = filter_array_values(arr);

console.log(filtered_arr);