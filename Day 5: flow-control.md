# Day 5: Flow control

## Asynchronicity

* Synchronous programming model => actions happen one at a time, line per line. When you call a function that performs long-running action, it only returns when it has done its work. The second time you request the function will be only started when the first has finished. Your program freezes for the time the action takes. 

* Asynchronous programming model => allows multiple actions happen at the same time. Your program continues to run when you start an action. The program gets informed when the action finishes and gets access to the result. 

Also a difference between sync and async is that waiting for actions to finish is implicit in the synchronous model, while in the asynchronus model is explicit - under our control. Meaning that the developer has control over what actions can be first executed and when its implicit only the js compiler/system has the control over what actions can be executed.

## Callbacks

Since Javascript is a synchronous programming model, it is possible to manipulate JS to behave in an asynchronous way, by using async callbacks. Callbacks are functions passed into another function as parameters, which is then invoked inside the outer function to complete some kind of action or function. 
* Async code is used to write or complete actions which have different outcomes, where you dont know whether it will be succesful or not. It can simply turn into an error. You are also aware how long it takes when the action is completed.

But then it struck to me that this definition ressembles a lot to higher order functions. So I looked into the difference between callbacks and higher order functions and this is what I concluded: 
 
Higher order functions takes another functions as an argument and returns a function to its callers. Callbacks are functions that is passed to another function expecting that the other function will call it. 

Example how async code works:
We have two functions here, whattup() and whattup2u(). whattup() consist of a console.log() and a setTimeout callback function thats on 5 seconds. The whattup() function returns whattup2u().
This is an example how JS can manipulate async code what makes JS looking like async programming.

```javascript
function whattup2u(y) {
    return `${y} jij bent echt lit`;
}


const whattup = (x) => {
    console.log(`Hoi, ${x} dit komt van de eerste functie`)

    setTimeout(() => { // setTimeout is a synchronous programming model
        console.log(`Hi, ${x} dit is van de eerste functie.. sorry, but better late than never :')`)
    }, 5000);

    return whattup2u(x);
} 

console.log(whattup(`Jo-ann`));
```

1. whatsup() gets called
2. That function prints console.log() tot the terminal
3. Function calls setTimeout function and executes the callback from the callback after 5 seconds.
4. whatsup calls whatsup2u in a return. The function has been executed.
5. whatsup2u() returns "Jo-Ann jij bent echt lit"
6. After 5 seconds the callback function calls: 'Hi, Jo-Ann dit is van de eerste functie... sorry, but better late than never :'

## Promises

Instead of bundling all dependecies of callbacks into one code block to send it off to the browser, with promises you can you can prevent these callback hells - calling multiple callbacks in a function. 

Promises are asynchronous actions that may complete at some point and produces a value. They simplify the use of asynchronous functions. The only difference between promise-based functions and regular ones is that the output may not be available yet, it might already be there or might appear at some point in the future. 

```javascript
let twenty = Promise.resolve(20)
twenty.then(value => console.log('Got ${value}'))
// Got 15
```
- calling a promise by calling Promise.resolve
- twenty.then registers a callback function when the promise resolves and produces a value.

