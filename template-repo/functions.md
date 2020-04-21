# Day 2: Functions

Functions are a way to organize a program.
* P5 = functions library

* Modularity > keeping code organized by having lines of code and break those into modular pieces that all contains their own function.
* Reusibility > reusing functions by calling them multiple times using different parameters.

* When JavaScript compiles all of your code, all variable declarations using var are lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”. (Sandhu, 2018).

* JS doesn't hoist function expressions, only function declarations.

```javascript
//function declaration
function greet(){
    console.log('Faka');
};

//function expression
function speak = function(){
    console.log('adieu!');
};
```
### Arguments & parameters

Passing values into functions:

```javascript
function speak = function(name, time){
    console.log('adieu ${name} ${time}!');
};

speak('Jenny', 'morning')
```

name = local variable (cant acces the variable outside the function) => parameters
'Jenny' = argument => are the values passed into a function
* the order of the parameters must match the order of the arguments

### Returning values

* This is part of the function code. It lets you define what value to send back to the function caller.

* It can be a constant value, a variable, or a calculation where the result of the calculation is returned.

```javascript
function calcArea = function(radius){
return 3,14 * radius ** 2 
};

const area = calcArea(5)
console.log(area)

const arena = calc
```
### Arrow function

```javascript
const calcArea = (radius) => {
    return 3,14 * radius ** 2 
}

const area = calcArea(5)
console.log('area is', area)
```

### methods

calling methods with "." notation. A method is an object property with a value set to a function.
