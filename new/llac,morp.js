// callbacks , promises and async/await
// asynchronous actions: actions that we initiate now, but they finish later
// setTimeout().real world Examples  of asynchronous actions: fetching data from an API, reading files, database operations
// and loading scripts & modules

/*Every html elements has attributes , these are properties
* <script src="index,js"></script>
* function loadScript(src, callback){
* let script = document.createElement("script");
*  script .src = src;
*  document.head.append(script); // to include script tag into html code with "SRC"
*
* }
* it inserts into the document a new script tag with the given src
* the browser automatically starts loading and executes when completes
* loadScript("my/index.js",)
*
* when we pass a function as an argument into a function is it callback function
* function loadScript(src, callback){
* let script = document.createElement("script");
* script .src = src;
* script.onload = () => callback(script);
* document.head.append(script); // to include script tag into html code with "SRC"
*
* ONLOAD event is basically executes a function after script is loaded and executed.
*
* loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",script =>{
* alert(` cool the ${script.src} is loaded`);
* console.log(_);
* }
*
*
*
* the call back function
*
* function sayHello(){
* console.log("snvs komal");
*
* }
*
* function greatUser(callback){
* console.log("my name is snvskomal");
* callback(); // calling the function that was passed
* }
*
* greetUser(sayHello);
*
* a function that does something asynchronously should provide a callback
* argument where we put  the function to run after its complete.
*
*PROMISES
* (((((  anything that you learn in any programming language it is a application of real world thing ))))
* Promise ==>  where we tell to do something , that thing may be achieved or may noy be ?
* so this is what meant promises
*
*
* Kumar's brother promised Kumar to bring an ice-cream
* Kumar brother bought ice-cream so here kumar wish has been completed
* Kumar brother might forget it - so here kumar's wish is pending
* Kumar bother told him no such ice - cream in market - so here kumar's wish is denied
*
*
* frontend and backend , to establish a communication have included
* this promises
*
*
*
*
* */


let promise = new Promise(function(resolve,reject){
    // code
})
// so here in any given  promise we have resolve, reject , which are callbacks
// that are used to tell whether your promise is completed or not

let promise2 = new Promise(function(resolve , reject){
    console.log("Hello Kumar , this is your ice-cream");
    resolve("Promise resolved")
})

console.log(promise2);

let promise3 = new Promise(function(resolve , reject){
    console.log("Hello Kumar , this is your ice-cream");
    reject("Promise Not resolved")
    // reject(new Error ("Promise not fulfilled"));
})
console.log(promise3);

let promise4 = new Promise(function(resolve , reject){
    console.log("Hello Kumar , i have forgot ice-cream");

})
console.log(promise4);

/* there are no completing the promise and
* not completing the promise happen in the same time
*  */
console.log("------------------------------------------------------------------------------------")

console.log("start of the code ")
let promise_one = new Promise(function(resolve, reject){
    setTimeout(()=>{console.log("Printed this line after 5 seconds")},5000);
    resolve("Promise resolve");
})
console.log("End of the code")

console.log(promise_one);

console.log("------------------------------------------------------------------------------------")

let promise_two = new Promise(function(resolve,reject){
    console.log("start of code ")
    setInterval(()=>console.log("Print this line for every 3 Seconds"),3000);
    console.log("end of the code")
    resolve(" Promise FulFilled successfully")
}). then (
    result => console.log(result),
    error => console.log(new Error("WHoops i am sorry")),
)