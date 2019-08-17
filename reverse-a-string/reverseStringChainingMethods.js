/* So what's going on here? Well first of all we are using
es5 syntax. We are also showing an example of probably the
easiest way to write this function. We receive a the word 
apple via the argument example. We then return that word 
with some modifications.

First we split the string into an array of characters that
we will keep. 

Secondly we take that whole list of characters and reverse
the order that are in.

Finally we glue those characters back together to form the word
in reverse. We then call the function revealing the new word elppa
*/

function reverseWord(example){
    return example
        .split('')
        .reverse()
        .join('')
}
reverseWord('apple'); // returns elppa