// So this is slightly more performant than the chaining method. In this example
// you can see each character is added to the begining of the new variable

var reverseStr = str => {
    var res = "";

    for (let s of str) {
        res = s + res
    }

    return res;
}

reverseStr('hey') // returns yeh
