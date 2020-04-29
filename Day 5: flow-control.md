# Day 5: Flow control

## Asynchronicity

* synchronous programming model => actions happen one at a time. When you call a function that performs long-running action, it only returns when the action has finished and it can return  





## Callbacks

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