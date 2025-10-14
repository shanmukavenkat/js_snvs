/// Logical operators
// || (or) && (and) ! (not) ?? (null
// || these are also known as the pipe operators
// OR operator (||) returns true if at least one operand is true or both are true
// AND operator (&&) returns true only if both operands are true

console.log(true || false); // true
console.log(false || false); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(!true); // false
console.log(!false); // true
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")

let time = 9;
if (time < 10 || time > 18) {
    console.log("Office is closed");
}
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")
// the OR operator which finds the first truthy value and returns it
// the || execution stops when it finds the first truthy value
console.log(null || 1 || 0 );
// null || 1 -> 1 (the first truthy value) the remaining values are ignored
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")
console.log(null || null || "Hi" );
// null || null -> null (falsy) -> "Hi" (truthy) -> returns "Hi" (the first truthy value)
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")


/*GENERALLY The null value represents  referring  to the nothing but it is a false value
*
*
*
* */
let result_1 = null|| "Hello" || 0;
console.log(result_1); // Hello (the first truthy value)
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")
let result_2 = null || null || 0 ;
console.log(result_2); // 0 (all falsy, returns the last value)
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")

// AND operator (&&)  it follows the truth table of AND
// T && T -> T
// T && F -> F
// F && T -> F
// F && F -> F
// the && operator finds the first falsy value and returns it
// this && continues its execution until it finds the value of true
// and this stops when it finds the first falsy value
console.log(1 && 0); // 0 (the first falsy value)`
console.log(1 && 5); // 5 (all truthy, returns the last value)
let new_result  = 1 && false && 0 ; // false (the first falsy value)
console.log(new_result); // false
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")
let new_result_2  = 1 && 0 && null;
console.log(new_result_2); // 1 && 0 -> 0 (the first falsy value) and the false  values are ignored
console.log("+++++++++++---------------++++++++++++++-----------------------++++++++++++++++++++++++++++++++++-----------")
// ! this converts the truth to false and vice versa
/// AND operator (&&) has a higher precedence than OR operator (||)
console.log(!!1); // false to true those like the value changes
console.log(!!0); // true to false those like the value changes

/* ==> ?? (nullish coalescing operator)
*it treats null and undefined as the only falsy values
* we'll say that a value is defined when its neither "null" nor "undefined"
* ===> undefined means that a variable is having no data
* result = a ?? b
* if 'a' is defined then 'a' will be stored in result variable
* if 'b' is defined then 'b' will be stored in result variable
* ?? returns the first argument if it's not null/undefined
* let b = 0 , a;
* let result = a ?? b;
* result will be 0    because a is undefined but b is defined
*javascript stopped using ?? together with && and ||
*
*?? returns the first defined value
*|| return the first truthy value and also last falsy value
*&& return the first falsy value and also last truthy value
* || this can be used same way as ?? , to find the defined value
* */

let a = undefined;
// a is actually undefined but it is defined  and it is
let b = null
console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
//let new_result_ = 1 && 2 ?? 3; // it will give an error
console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")

let result = 1 ?? 2;
console.log(result); // 1 (the first defined value)\
console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
let result_ = null ?? null
console.log(result_); // null (all values are null/undefined, returns the last value)
console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
let result_4 = null ?? 2 ?? 3;
console.log(result_4); // 2 (the first defined value)


/*
* you have a login page and where you have are actually trying to take the
* values of fistName,middleName, lastName
*
*
*
* */
let firstName = null;
let middleName = undefined;
let lastName = "Smith";
if(firstName ?? middleName ?? lastName) {
    console.log("You have entered the required values");
}else{
    console.log("Please enter the values");
}

console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=")
// LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPS
///                            /--> False --> body outside the loop
// Initialization --> Condition
///                            \--> True --> Body --> Increment/Decrement --> Condition


let i = 0; // initialization the variable
while(i<5){ // condition checking
    console.log(`the i value is : ${i}`); // body of the loop
    i++;
} // incrementing the variable
console.log("you are out of the loop now")
// we want only to run the loop limited number of times not infinite times
console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=")

for(let j = 0; j<5; j++){
    console.log(`the j value is : ${j}`);
}
// initialization actually happens only once which when the loop is getting started
// condition is checked before every iteration of the loop
// increment/decrement happens after every iteration of the loop
// the body of the loop is executed only when the condition is true
// if the condition is false the loop stops and control goes to the next line after the loop
console.log("you are out of the loop now")


console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=")
/*BREAK
* continue
* if the iteration is 2 then skip it and continue with the next iteration
* */

for (let k =0; k<=5;k++){
    if(k == 2){
        continue
    }
    console.log(`the k value is : ${k}`);
}
console.log("=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=--=-=-=--=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=")

for(let m =0; m<=8;m++){
    if (m == 2){
        break
    }
    console.log(`the m value is : ${m}`);
}
