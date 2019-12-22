function checkRepeat(arr) {
    var arrStr = JSON.stringify(arr),
        str;
    for (var i = 0; i < arr.length; i++) {
        if (arrStr.indexOf(arr[i]) != arrStr.lastIndexOf(arr[i])) {
            return true;
        }
    }

    return false;
}