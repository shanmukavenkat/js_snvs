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
console(!!1); // false to true those like the value changes
console(!!0); // true to false those like the value changes

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
* result will be 0 because a is undefined but b is defined
* */

let a = undefined;
// a is actually undefined but it is defined  and it is
let b = null
