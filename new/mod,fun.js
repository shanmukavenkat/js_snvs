// function in the js
function sum (a,b){
    return a+b;

}
// in this syntax we use the function keyword followed by the name of the function and parentheses which may include parameters

let sub = function (a,b){ // Function definition
    return a-b
}
//Arrow function are used as a shorthand notation for waiting a function , => (arrow symbol)
let  multiply = (a,b) => {
    return a*b;
}
let div = (a,b) => {return a/b};

console.log(sum(2,4));
console.log(sub(78,12));
console.log(div(4,2));
// declaring the array in constructor way
/*
* let obj = new Object(); / let arr = new Array(); / let date = new Date();
* constructor function are function that are used for specific
* purpose , these are spl function any constructor will have their starting letter capital
* function Snvskomal(){} , to use a constructor function we do need 'new' keyword.
*
*
*
*
* */
let bus = new Function();
console.log(bus); // [Function: bus]
// function are also objects in JS
/*--------------------------------------------------------------------------------------------------------------------------*/

/// DOM manipulations
/// javascript was initially created for web browsers to make the web pages interactive
// it evolved into a language with many uses and platforms
// js specifications calls that platforms as a host environment
// a host environment provides its own objects and functions in addition to
// the language core
// web browser is one such a host where it provides features to control web pages
// node js provides server-side features , and so on
// the root object is called 'window object' it has 2 rules
// 1. it represents the browser window and methods 2. it is the global object for js code
// to control it
function sayHi(){
    console.log("Hello from window");
}
// it is a part of window object
window.sayHi(); // Hello from window
sayHi(); // Hello from window
// we can call directly without window object also
// the window  object has different methods and properties

console.log(window.innerHeight); // height of the window
console.log(window.innerWidth); // width of the window

//DOM _________________________
/*
* Document object model and it represents all page content as objects that can be modified
*
* Pre suppose to change the background of the web page we use the following code
* document.body.style.background = "lightblue";
* document object is main entry point to the page
* we can change anything on the page or document object
* ()()()()()()()()()))()()(()()())()()())(()()()()()()()()()
* DOM specifications the structure of the document and provides
* object to manipulate it. THERE  are non-bowser instruments that uses DOM TOO
* ()()()()))())()()())()()()()()()))())()())()()()()()()()()()()()
* CSSOM = cascading style sheets object model for css rules
* ()()()()()())()(()()()()()()()()()()())(()()()()()()()()()()()()
*
* BOM = browser object model
* it represents additional objects provided by the browser for working with everything except the document
* navigator object background info about the browser
* console.log(navigator.userAgent);
* it gives the info about the browser
* console.log(navigator.platform);
* it gives the info about the platform
* console.log(location.href);
*location and  gives the info about the current url and can redirect the browser to another url
*  if(confirm("do you want to visit google")){
*    location.href = "https://www.google.com";
*    }
* alert and conform and prompt are part of BOM  as these are browser related method
* conform => shows the dialog with ok and cancel button
*  to get the data from the user we use the prompt method
* we use the conform method to get the confirmation from the user
*
* */


console.log("DOM TREE")

/*
*
* it is a backbone of HTML Document is tags
* ACC to DOM , every HTML tag is an object .
* everything that is present on the screen itself is js object
* everything that will be rendered on to the screen itself is js object
* we can apply the object methods and also array methods onto HTML
*
* DOM represents HTML as a tree structure of tags
* ---- EVERY tree node is an object, Tags are element nodes ,
* HTML is root  HEAD and BODY are child nodes of HTML element itself
* ALL operations on DOM start with document object as it
* is entry point to the page to the DOM
*document ==> document.head/document.body
* document.documentElement ==> document.html
* 
* */



document.body.style.background = "green";
// the style.background is used to change the background color of the web page
