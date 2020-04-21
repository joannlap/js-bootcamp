# Day 1: ECMAScript

## Introduction to javascript

* A sense of what a good program looks like is developed in practice, not learned from a list of rules.

### Why language matters

At the beginning of computing, programming languages where non existence. So programs looked like this:

| 00110001 | 00000000 | 00000000 |
| ---------| :--------| --------:|
| 00110001 | 00000001 | 00000001 |
| 00110011 | 00000001 | 00000010 |
| 01010001 | 00001011 | 00000010 |
| 00100010 | 00000010 | 00001000 |
| 01000011 | 00000001 | 00000000 |
| 01000001 | 00000001 | 00000001 |
| 00010000 | 00000010 | 00000000 |
| 01100010 | 00000000 | 00000000 |

All these numbers where manually entered. Nowadays, since the rise of different programming languages such as Javascript, these numbers can be
written more compiled with more improvements:

```javascript
let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// -> 55
```

The point of showing this program is to see how programming languages has improved, how programs can be expressed in both long and short, readable and unreadable ways. A good programming language
helps the programmer by allowing them to talk about the actions that the computer has to perform on a higher level.
It provides convenient building blocks, allows the programmer define his own building blocks and make 
those blocks easy to compose.

## What is Javascript?

Javascript was introduced in 1995 as a way to add programs to webpages in a browser. Ever since the language has been dominating other major
graphical web browsers.

```javascript
 ECMAScript === JavaScript
 ```
 Pros and cons of Javascript; it was intended to make programming easier for beginners. In reality, it mostly makes finding difficulties
 in your programs harder since the system wont point them out for you. This flexibility has its advantages. It leaves a lot of space for a lot
 of techniques that are impossible in more rigid languages, it can be used to overcome some of Javascript's shortcomings.

 Besides web browsers where Javascript is used, also some databases such as MongoDB use JS as their scripting and query language.
 Node.js provides an environment for programming JS outside of the browser.

 
# ECMAScript versions

ECMAScript is the standard upon which Javascript is based. Its often abbreviated to ES. 
Beside JS, other languages implement ECMAScript, including:

* Actionscript (Flash scripting language), which is losing popularity since Flash will be
officially discontinued in 2020.
* JScript (Microsoft scripting dialect), since at the time JS was only supported by Netscape and
the browser wars were at their peak, Microsoft had to build its own version for Internet Explorer.

Ecma International is a Swiss standards accosiation who's in charge of defining international standards.
Currently using ES6 introduced in 2015.

## You don't know JS yet: Get started

The name JS was based of marketing shenanigans because this language was originally designed to appeal to Java programmers and the word
"script" was popular at the time to refer to lightweight programs. Basically JS tried to position its language as a acceptable alternative
of the more well known Java of the day. 
* the JavaScript/JS that runs in your browser or in Node.js, is an implementation of the ES2019 standard.


### Language Specification

TC39 is the committee that evolves JS. Their main task is managing the official specification for the language.
There are not multiple versions of JavaScript in the wild. There's just one JS, the official standard as maintained by TC39 and ECMA.

* Forwards compatibility means including a new addition to the program wouldn't cause that program to break if it run in an older JS engine. But JS is not forwards-compatible.

* Backwards compatibility means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS. Code written in 1995 should still work today.  The cost of sticking to this principle creates a very high bar to including changing or extending the language; any decision becomes effectively permanent, mistakes and all. Once it's in JS, it can't be taken out because it might break programs.

#### special numbers
* Infinity and -Infinity that represents the positive and negative infinities. (not mathimatically sound)

* The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time.

* unary operator: an operator that takes only one value/argument for its operation. Ex: i++, --i, typeof.

# JS guidelines

* Use textContent, not innerHTML; textContent is a lot more efficient, and less error-prone than innerHTML.

* Where possible, use the function declaration to define functions over function expressions:

```javascript
function sum(a, b) {
  return a + b;
}
```

not this:
```javascript
let sum = function(a, b) {
  return a + b;
}
```

* When using anonymous functions inside a method that requires a function as a parameter, it is acceptable to use an arrow function to make the code shorter and cleaner.

So instead of this:

```javascript
const array1 = [1, 2, 3, 4];
let sum = array.reduce(function(a, b) {
  return a + b;  
});
```
you can write this:

```javascript
const array = [1, 2, 3, 4];
let sum = array.reduce((a, b) =>
  a + b
);
```

### Difference between let and const

* let is a block scope unlike var that is a function scope. let > var.
* const is just like let but you cant
reassign const. 
* use const if you find not to make
adjustments to the variables.

```javascript
let x = 1
x = 2
console.log(x)

2
```

```javascript
const x = 1
x = 3
console.log(x)

error
```
in contrary while using objects:

```javascript
const x = {
    y: 5
}
x.y = 6
console.log(6)

{ y: 6}
```
