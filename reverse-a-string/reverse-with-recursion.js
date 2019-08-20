// ES6 Recursive way of reversing a string. Ok for normal sizes of strings. Not suitable for really really large strings.

const reverseString = str => {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
