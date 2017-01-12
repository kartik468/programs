// -- Find out number of occurrences of a number in an sorted array
// using binary search
// time complexity log(n)


var getNoOfOccurences = function(inputArray, input) {
    var firstOccurrence = getOccurrence(inputArray, input, true);
    var secondOccurrence = getOccurrence(inputArray, input, false);
    var noOfOccurrences = firstOccurrence;
    if (secondOccurrence) {
        noOfOccurrences = secondOccurrence - firstOccurrence + 1
    }
    return noOfOccurrences;
}

var getOccurrence = function(inputArray, input, isFirst) {
    var low = 0;
    var high = inputArray.length - 1;
    var result = -1;

    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var midValue = inputArray[mid];
        if (midValue === input) {
            result = mid;
            if (isFirst) {
                high = mid - 1
            } else {
                low = mid + 1
            }
            // return mid;
        } else if (midValue < input) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}


var inputArray = [1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7]
var input = 4

var noOfOccurrences = getNoOfOccurences(inputArray, input);
console.log('noOfOccurrences: ' + noOfOccurrences);