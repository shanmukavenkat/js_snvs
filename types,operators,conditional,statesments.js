/*
* The javaScript is an interpreted,client-side,event-based,
* object-oriented scripting language that you can use to add
* dynamic interactivity to your web pages
* the javascript is a client side and the server side application
*
*
* ===> the javascript is the intrepreted language which means the code
* which it reads line by line and executes it and python is also an interpreted language
*
* it supports both the functional and the object-oriented programming
*
*javascript is not java though if you come from a java background
* you will notice that both languages look similar
*when written. Java is a full-featured and comprehensive
*programming language similar to C or C++, and although
*JavaScript can interact with Java web applications, the two
*should not be confused
*
*
* Data types in JavaScript they are  8 types total where we have 7 data types and 1 special type
* which are  primitive types and non-primitive types
*
* 1. Primitive types
* we can store only one data  type in primitive types
* in Non-primitive types we can store multiple data types
* the primitive types are
* string , number , boolean , null , undefined , symbol , bigint
*
* 2. Non-primitive types
* Objects ===> the arrays and functions are the objects
* the number datatype is used to store the numbers in the float type also
* number limits are -(2^53 -1) to (2^53 -1)
* bigint is used to store the large numbers
* AND ANOTHER KEY POINT IS THAT WHEN WE ADD THE NUMBERS THAT EXCEEDS
* THE LIMITS IT WILL RETURN THE SAME NUMBER
* BUT WHEN WE USER IN THIS WAY LIKE
* (a = 2n*100n)
* IT WILL GIVE THE ACCURATE VALUE OF THE LARGE NUMBER
*
* ===> to store the large decimal number we have to use the library
* which is called decimal.js
* Depending on a variable data type , their memory is allocated in RAM
* during execution of the program
* JS gives the special mathematical symbols like the infinity and the
* - infinity and the NAN (not a number)
*
* Mostly use the let , var ,const keywords to declare the variables
*
*
*
* */
let a = 1/0;
console.log(a); // which gives the infinity value
let b = -1/0;
console.log(b); // which gives the -infinity value
let ne = "snvskomal"/2;
console.log(ne); // which gives the NAN value
let m = 33n;
console.log(typeof(m)); // bigint
let p = Infinity
console.log(typeof(p)); // number
// the infinity and the - infinity and the NAN are special mathematical symbols
// ==> if a string occupies it is the 4 bytes and the bigint occupies it is 8 bytes or 12 bytes
/*
* In the js we can declare the variables in three ways

* */
let message = "Hello";

message = "Hello, World!";
message  = `snvskomal`; // we can use the backticks also this has more edge compared to others
console.log(message);
const myage = 21;
console.log(`my current age is ${myage}`);
// hirearchay of string ----> blackticks(string interpolation and called as the template literals) --> double ---> single ticks
// the black ticks are more powerful compared to the single and double quotes


/*----------------------------------------------------------------------------------------------------------------------------------------------*/
let new_number = Infinity;
console.log(typeof(new_number)); // number
/*
the infinity and the -infinity and the NAN are special mathematical symbols
they are integers and but not any other data type
* */

/*STRING ==> we can store the string in the js in the three
* types they are like single quotes '' and the double quotes ""
* and the black ticks `` and the black ticks has the more importance than other
* example about the black ticks  */
const name = 45646;
console.log(`I have the amount of ${name}`);
let message = "Hello, World!";
a[2] = "45";
console.log(a);
/*the string is immutable*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/


// BOOLEAN ==> it can have two values they are true and false and the Null


let name1 = null; // this value doesn't belong to any of the data types describe above
console.log(typeof(name1)); // it will return the object this is a bug in the js
// reference to non existing object / null pointer
let gender = undefined; // it means the value is not assigned

//symbols used to create the unique indentifiers
// these are use to give the completeness to the data type

let obj = {112,"hello",22n,true,{788,"snvskomal" false}}; // this is the object
// we can store any type of the data type in the object
// it is a complex and non primitive data type
///===========================================================================================================================
//// the javascript is one such programming language that which can trick the interviewers  and the candidates also
////==========================================================================================================================

console.log(typeof(null));
// it will return the object this is a bug in the js
console.log(typeof(undefined)); // it will return the undefined
let the_name = {
    name : "snvskomal",
    age : 21,
    isEarning : true
}
console.log(the_name);
console.log(typeof(the_name)); // it will return the object

/* we have the unary , binary  , ternary operators
*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*  a + b => a,b are both operands and the '+' is the operators
* /// if the operator has only one operand , then it is unary operator(-a)
* if the operator has the 2 operands , then it is the binary (a+b)
* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
* we have the {+,-,* /, %,** (exponentiation)}     */
// binary operators in js is used for the string concatenation
// when we write like this console.log("hello" * 4)
// it will return the NAN value
// In the js binary operator is used for the string concatenation as we know
/*
*  let str2 = "1213135";
*  console.log(+str2); // it will convert the string to number
*  or we can use the parseInt() function
*  or we can use the Number("1213135") function
*  let str2 = +("1213135"); // it will convert the string to number
*  ---> unary operator in js , actually used to type cast any
* data type that consist of number init  to number data type
*
* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
* let str3 = +("Hello)"
* console.log(typeof(str3),str3);
* it will return the  type as number and the value as NAN
* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
*
* */
/// let c = "3" + 2; // it will return the string 32
// console.log(typeof(c)) it will return the string
// console.log(4+4+"4") it will return the string 84
// first binary plus operator will be executed to add numbers 4+4 = 8 and the second plus operator is used to concantenate the string
// console.log("4"+4+4) it will return the string 444
// when we use the binary + , if either of the operand is actually
// a string , then the other operand will be  converted to string

// , the comma operator  used to seperate element and the  = is the assignment operator
// chaining of assignment operators a=b=c=2
// form c to b to a
// let a = 2;
// a = a+1; or // a += 1;
// a = a/2; or // a /= 2;
// a = a*2; or // a *= 2;
// modifying placement
// postfix and prefix increment or decrement
// let d = 1;
// let e = b++;//postfix or /++b;//prefix
// console.log(e,d); //it will return 1 2
/// when we use the operator ++/-- in the postfix form(++b/b++),
// when we use the operator ++/-- in the prefix form(++b/b--),

/*
let b=1;
* let c = b++ ;
* let d = ++b; // b-- =>b=b-1
* let e = b--;
* let f = --b;
* console.log(b,c,d,e,f);
* it will return 1 1 3 3 1

* */


