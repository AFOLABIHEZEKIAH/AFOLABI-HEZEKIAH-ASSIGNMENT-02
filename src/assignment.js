// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

function sumOfNumbers(arrayOfNumbers) {

    var total=0;
    for (var i in arrayOfNumbers){
    total+= arrayOfNumbers[i];
}

return total;
}

let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sum= sumOfNumbers(Numbers)

console.log(sum)


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(array){
	var count = 0;
	for(let i = 0 ; i < array.length; i++) {
		if (array[i] % 2 === 0){
			count++;
		}
	}
	return count;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var Count_even= countEvenNumbers(arr)

console.log(Count_even)


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

