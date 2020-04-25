// Here we create a curry function for a discount that takes
// just the percent but has access to the percent and price through closures
let discount = percent => price => price * percent;

// now we can set various discounts from one function.
const discount5 = discount(0.05);

//when called this will give the 5% discount from whatever amount is passed.
discount5(100); // = 5
discount5(150); // = 7.5
discount5(33); // = 1.65
