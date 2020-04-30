# Day 4: Concepts


## Scope

Scope is how you search for a variable with a given name. A variable consists of a scope where the whole area in which that variable can be accessed by name (Akar, 2019).

- Global scope => When a variable is declared outside all functions or curly braces. It can be accessed by any line of code in the program including inside blocks. Last as long as the application is running
- Local scope => Are only visible within the function they are declared. New local scope gets created when a new function is written and every declared variable. Last as long as the function is running
turns into a local variable. Meaning variables with the same name can be used in different functions. 
- Block scope => Block statements don't create a new scope and the block scope does not apply to var keyword. Const and let can define scope to block statements. 

### Lexical scope vs Local scope


## Hoisting
A general way of thinkng about how execution contexts work in javascript. 

* JS puts function declarations into memory before it executes any code segment and that allows you tu use a function before you declare it in the code.

Ex. expectation:

```javascript
function myName(name) {
  console.log("My name is" + name) 
}

myName("Jo-Ann")

// results: "My name is Jo-Ann"
```
Ex. swapped:

```javascript

myName("Jo-Ann")

function myName(name) {
  console.log("My name is" + name)
}
```

Eventhough the function is called before its written, the code still works. This is because of how the context execution works in javascript. 

## Closures

Whenever we have a function defined inside another function, the inner function has access to the variables declared in the outer function. 

![alt text](https://uploads-ssl.webflow.com/5dc87b3620589749198717e1/5dd5846e5572e43fecce7e79_lets-learn-javascript-closures-1.png "Closures")
(Kasireddy, 2016
)