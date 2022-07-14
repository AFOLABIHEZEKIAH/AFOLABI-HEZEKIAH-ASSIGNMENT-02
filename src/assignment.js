// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



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

