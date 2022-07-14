function countEvenNumbers(array){
	var count = 0;
	for(let i = 0 ; i < array.length; i++) {
		if (array[i] % 2 === 0){
			count++;
		}
	}
	return count;
}
const numbers = [
    17,
    0,
    67,
    41,
    49,
    21,
    1,
    86,
    76,
    2,
    54,
    14,
    93,
    84,
    14,
    77,
    35,
    7,
    29,
    64]

var Count_even= countEvenNumbers(numbers)

console.log(Count_even)