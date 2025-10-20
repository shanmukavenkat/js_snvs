// Objects and also arrays
///  2 types in JS where we can define any object
// using constructor function and object literal syntax

let user = new Object(); // object constructor function
let user2 = {}; // object literal syntax
// the object is a key value pai

let user3 = {
    name:"snvskomal",
    age:'24',
    isAdmin:false,
}
//===>here object is created from another object not from a class <===
// the javascript is object based looped language
// using the DOT NOTATION we can access the properties of given object

console.log(user3);
console.log(user3.name); // accessing the name property
console.log(user3.age); // accessing the age property

// we can also access the properties using the square bracket notation

console.log(user3['isAdmin']); // accessing the isAdmin property
console.log(user3['name']); // accessing the name property
// the objects are non primitive data types
// where they can store the multiple data types at once
// we can also add new properties to the object or modify the existing properties or remove properties
delete user3.age; // deleting the age property
console.log(user3); // { name: 'snvskomal', isAdmin: false }
user3.age = 25; // adding new property age
console.log(user3); // { name: 'snvskomal', isAdmin: false, age: 25 }
user3.name = "komal"; // modifying the name property
console.log(user3); // { name: 'komal', isAdmin: false, age: 25 }
let user5 = {
    name:"john",
    age:30,
    "likes fruits":true, // multi word property name must be in quotes
};
console.log(user5);
console.log(user5["likes fruits"]); // accessing multi word property using square bracket notation
delete user5["likes fruits"]; // deleting multi word property

/*
prototype is a mechanism by which objects in JavaScript can inherit properties and methods from other objects.
It is a fundamental concept in JavaScript's object-oriented programming model.
* */
let obj = {
    0:"sample",
}
//console.log(obj.0)// invalid syntax
console.log(obj[0]); // accessing the property using square bracket notation
console.log(obj["0"]); // accessing the property using square bracket notation with string key
// there is no limitations on property names , they can be any string or symbol
// other types are automatically converted into strings
console.log(obj.__proto__); // accessing the prototype of the object
// proto is a special property , we can't set it to non-object value
obj.__proto__ = 5; // invalid operation
let user6 ={

};
console.log(user.age === undefined); // true , as age property is not defined in user6 object
///++> in OPERATOR <++

"age" in user6; // false , as age property is not defined in user6 object

let user7 = {
    age:undefined,
}
console.log("age" in user7); // true , as age property is defined in user7 object even though its value is undefined


let user8 ={
    name:"komal",
    age:24,
    isAdmin:true,
}
// for ... in loop used in objects to iterate over the properties of the object

for(let i in user8){
    console.log(i);
}
/// we can add the salary into the user8 then we do below thing
user8.salary = 1500000;
console.log(user8);


