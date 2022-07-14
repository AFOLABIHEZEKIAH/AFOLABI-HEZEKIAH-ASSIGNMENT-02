
function sumOfNumbers(arrayOfNumbers) {

    var total=0;
    for (var i in arrayOfNumbers){
    total+= arrayOfNumbers[i];
}

return total;
}

let Numbers = [68,
    -68,
    27,
    94,
    72,
    -25,
    -51,
    32,
    10,
    64,
    -94,
    4,
    34,
    -86,
    90,
    81,
    20,
    -56,
    -91,
    -50
];

var rhyme= sumOfNumbers(Numbers)

console.log(rhyme)