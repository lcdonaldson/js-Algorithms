let a = "98567";
let b = "2646";

const numberOfCarryOperations = (a, b) => {

    //  Initialise the value of carry to 0
    let carry = 0;  
  
    //  Counts the number of carry operations
    let count = 0;  
  
    // Initialise len_a and len_b with the sizes of strings
    let len_a = a.length;
    let len_b = b.length; 

    while (len_a != 0 || len_b != 0) {
        let x = 0;
        let y = 0;

        if (len_a > 0) {
            x = parseInt(a[len_a - 1]) + parseInt('0');
            len_a -= 1;
        }

        if (len_b > 0) {
            y = parseInt(b[len_b - 1]) + parseInt('0');
            len_b -= 1;
        }

        // Add both numbers / digits
        let sum = x + y + carry;

        //  If sum > 0, set carry to 1 and increment count
        if (sum >= 10){
            carry = 1;
            count += 1;  
        } else {
            carry = 0;
        }
    }
    console.log(count);
}

let count = numberOfCarryOperations(a, b);
    // if (count == 0){
    //     console.log("0");
    // } else if (count == 1){
    //     console.log("1");  
    // } else {
    //     console.log(count); 
    // }

// https://www.geeksforgeeks.org/count-the-number-of-carry-operations-required-to-add-two-numbers/