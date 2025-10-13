const prompt = require('prompt-sync')({sigint: true});


/*COMPARISONS  */
/* > < >= <= ==(equal to) ===(strictly equal to) !=(not equal) !==(strictly not equal to )
All comparison operators return a boolean value (true or false)
we can assign the result of a comparison to a variable
let result = 5 > 4; // result gets true
console.log(result); // true
/// string comparison : they are compared letter by letter in the dictionary order
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
// comparison starts from both the strings from the first letter G and G are same
so we move to the next letter l and l are same
so we move to the next letter o and e are not same and
o is greater than e so the result is true
console.log('Bee' > 'Be'); // true

the comparison algorithm given above is roughly equal to
the one used in the dictionary or phone books but not
exactly the same
the uppercase letters are "less" than the lowercase ones


a = Number('a')  // converts to number
console.log(a); // NaN (not a number)

console.log(0>0); // false
console.log('h'>0); // false
.... why it is false






when comparing values of different types, JavaScript converts the
values to numbers
console.log('2'>1); // true, string '2' becomes number 2

console.log('01'==1); // true, string '01' becomes number 1
// the string has converted into the number
in the javascript the  true==> 1 and false==>0
Two values are equal, one of them is true as boolean and
the other one is false as boolean
let a = 0 ;
console.log(Boolean(a)); // false
let b = "0";
console.log(Boolean(b)); // true
console.log(a==b); // true, both are converted to false

console.log('h'>0); // false
the operator the string value doesn;t convert to ascii value
-----------------------------------------------------------------------------------------
== for  equality check and the === for strict equality check
console.log(0 == false); // true, 0 becomes false

console.log(0 === false); // false, different types
when we use === then this checks both the operands value at the
same time it checks  both operand data types also
console.log('A' > 65); // false, string 'A' becomes NaN
console.log('A' > '65'); // true, both are strings
==================================================================
console.log('22'-1);
the other remaining operators that converts into the number
console.log('1h'<'2h'); // true, both are converted to NaN
when comparing the two data types  like string and number
it gives false
console.log(typeof(true) < typeof(1)); /false
the boolean true becomes 1 and the number 1 remains 1
********************************************************************************
when null or undefined are compared to other values
console.log(null === undefined); // false
console.log(null == undefined); // true
spl rule in js : these are equal each but not with others
>,<,<=,>= when used between null & undefined or null becomes 0 and undefined becomes NaN
console.log(null <= 0); // true, null becomes 0
console.log(null ==0); // false
the null will not convert to  0
== this converts null without conversion the null or
undefined will be used than <,>,<=,>= these converts null to 0 and undefined to NaN
than





*//*
console.log('o1'==1); // false, string 'o1' becomes NaN (not a number)
let a = 0 ;
console.log(Boolean(a)); // false
let b = "0";
console.log(Boolean(b)); // true
console.log(a==b);// true, both are converted to false
console.log(Nan == Nan); // it is the rule in the javascipt
console.log(Nan === Nan); // false
// NaN is never equal to anything including itself
///Not a number (NaN) is a special numeric value that represents an undefined or unrepresentable value in mathematics
console.log(typeof(NaN)); // number

console.log(true+1); // 2, true becomes 1
// binary + will convert any operand to number when the operand is not string
console.log(true+true); // 2, both true become 1
console.log(false+true); // 1, false becomes 0, true becomes 1
console.log(false-true); // -1, false becomes 0, true becomes 1
console.log(false*true); // 0, false becomes 0, true becomes 1
console.log(false/true); // 0, false becomes 0, true becomes 1
console.log(true/true); // 1, both true become 1
console.log(true/false); // Infinity, true becomes 1, false becomes 0
console.log(false/false); // NaN, both false become 0
/!*--==------------------------------------------------------------------------------------------------------------------------
* console.log(null == null); // true
* console.log(null === null); // true
* console.log(null == 0 , null === 0 ); // false false
* console.log(undefined == undefined); // true
* console.log(null == undefined); // true
* console.log(null === undefined); // false
* console.log(undefined == 0 , undefined === 0 ); // false false
* *!/
*/
//()()()()()()()()()()()()() conditional operators ()()()()()()()()()()()()()

let age = 20;
if(age<10){
    console.log('you are a child');
}

// conditional branching '?'
let year = prompt('whats your age?');
if(year >= 19){
    console.log('you are eligible to vote');
}else if(year >=15){
    console.log('you are not eligible to vote');
}
else{
    console.log('you are a child');
}

//when we have entered the age it will give the value
// when you not give any input it will give the null


//><><><>>><><><><><<><><>>><><><><><><><><><><><><><<<><><><><<><><><><><<<><>>>>><><>>>>><>>><
//conditional operator '?'
//let result = condition ? value1 : value2
let age1 = prompt('whats your age?');
// ternary operator
let accesedAllowed = (age1 > 18) ? "Allowed" : "Not Allowed";
console.log(accesedAllowed);

let the_check_age = prompt('whats your age person ?',19);
let message = (the_check_age < 3) ? 'hi baby': (the_check_age < 19) ? 'hello' :
    (age<100) ? 'greetings'
    : 'what is your actual age';
// nested ternary operator
/*
>>>>>>> 6f8b8cc (one):comparisons.js
console.log(message);


console.log('ways to take the input from the user')
/// prompt("string") in the javascript always takes the input from the user
// confirm("string")  it takes the input from the user in the form of boolean
// alert("string") it shows the message to the user
// these three are also known as the model windows
// these three are given by the browser
<<<<<<< HEAD:javascript/comparisons.js
/// the logical or and operator  => || <== or }{==> && <== AND
///================================
console.log(message);
>>>>>>> 5ab5677 (ternary):comparisons.js
=======
/// the logical or and operator  => || <== or }{==> && <== AND
>>>>>>> 6f8b8cc (one):comparisons.js
*/