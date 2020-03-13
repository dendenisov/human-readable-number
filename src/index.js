module.exports = function toReadable (number) {
<<<<<<< HEAD
    console.log(number);
    let units = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
        ],
        from10to19 = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen"
        ],
        tens = [
            "null",
            "null",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety"
        ];

    let numberArray = number.toString().split("");

    if (numberArray.length === 1) {
        return units[Number(numberArray[0])];
    }

    if (numberArray.length === 2) {
        if (Number(numberArray[0]) === 1) {
            return from10to19[Number(numberArray[1])];
        } else if (Number(numberArray[1]) === 0) {
            return tens[Number(numberArray[0])];
        } else {
            return (
                tens[Number(numberArray[0])] + " " + units[Number(numberArray[1])]
            );
        }
    }

    if (numberArray.length === 3) {
        if (Number(numberArray[1]) == 1) {
            return (
                units[Number(numberArray[0])] +
                " hundred " +
                from10to19[Number(numberArray[2])]
            );
        } else if (Number(numberArray[1]) !== 0 && Number(numberArray[2]) !== 0) {
            return (
                units[Number(numberArray[0])] +
                " hundred " +
                tens[Number(numberArray[1])] +
                " " +
                units[Number(numberArray[2])]
            );
        } else if (Number(numberArray[1]) == 0 && Number(numberArray[2]) == 0) {
            return units[Number(numberArray[0])] + " hundred";
        } else if (Number(numberArray[1]) == 0) {
            return (
                units[Number(numberArray[0])] +
                " hundred " +
                units[Number(numberArr[2])]
            );
        } else {
            return (
                units[Number(numberArray[0])] +
                " hundred " +
                tens[Number(numberArray[1])]
            );
        }
    }
}
