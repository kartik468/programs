
var getMax = function(a, b) {
    return (a > b) ? a : b;
}

var kadaneAlgo = function(inputArray) {
    var maxCurrent = inputArray[0];
    var maxGlobal = maxCurrent;
    var currentElement;

    for (var i = 1; i < inputArray.length; i++) {
    	currentElement = inputArray[i];
        maxCurrent = getMax(currentElement, maxCurrent + currentElement);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent
        }
    }
    return maxGlobal;
}
