var MergeTwoSortedArray = function(leftArray, rightArray, inputArray) {
    var leftLength = leftArray.length;
    var rightLength = rightArray.length;

    var l = 0;
    var r = 0;
    var o = 0;

    while (l < leftLength && r < rightLength) {
        if (leftArray[l] < rightArray[r]) {
            inputArray[o] = leftArray[l];
            l++;
        } else {
            inputArray[o] = rightArray[r];
            r++;
        }
        o++;
    }
    while (l < leftLength) {
        inputArray[o] = leftArray[l];
        l++;
        o++;
    }
    while (r < rightLength) {
        inputArray[o] = rightArray[r];
        r++;
        o++;
    }
}

var MergeSort = function(inputArray) {
    var inputArrayLength = inputArray.length;
    var mid = Math.floor(inputArrayLength / 2);
    var leftArray = [];
    var rightArray = [];
    var outputArray = [];
    var i = 0;
    var j = 0;
    var k = 0;
    if (inputArrayLength < 2) {
        return;
    }
    while (i < mid) {
        leftArray[j] = inputArray[i];
        i++;
        j++;
    }
    while (i < inputArrayLength) {
        rightArray[k] = inputArray[i];
        i++;
        k++;
    }
    console.log('leftArray: ' + leftArray + '   RightArray: ' + rightArray);
    MergeSort(leftArray);
    MergeSort(rightArray);    
    MergeTwoSortedArray(leftArray, rightArray, inputArray);
    console.log(inputArray);
}
