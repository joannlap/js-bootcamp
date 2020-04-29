# Day 5: Flow control

## Asynchronicity

* Synchronous programming model => actions happen one at a time, line per line. When you call a function that performs long-running action, it only returns when it has done its work. The second time you request the function will be only started when the first has finished. Your program freezes for the time the action takes. 

* Asynchronous programming model => allows multiple actions happen at the same time. Your program continues to run when you start an action. The program gets informed when the action finishes and gets access to the result. 

Also a difference between sync and async is that waiting for actions to finish is implicit in the synchronous model, while in the asynchronus model is explicit - under our control. Meaning that the developer has control over what actions can be first executed and when its implicit only the js compiler/system has the control over what actions can be executed.

## Callbacks
Since Javascript is a synchronous programming model but is possible to manipulate JS to behave in an asynchronous way, by using async callbacks. Callbacks are functions passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or function. 

But then it struck to me that this definition ressembles a lot to higher order functions. So I looked into the difference between callbacks and higher order functions and this is what I concluded: 

```javascript
function call2(y) {
    return `${y} jij bent echt lit`;
}


const call = (x) => {
    console.log(`Hoi, ${x} dit komt van de eerste functie`)

    setTimeout(() => { // setTimeout is a synchronous programming model
        console.log(`Hi, ${x} dit is van de eerste functie.. sorry, but better late than never :')`)
    }, 5000);

    return call2(x);
} 

console.log(call(`Jo-ann`));
```
