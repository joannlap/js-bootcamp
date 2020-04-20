# Introduction to javascript

* A sense of what a good program looks like is developed in practice, not learned from a list of rules.

## Why language matters

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

All these numbers were manually entered. Nowadays, since the rise of different programming languages like Javascript these numbers can be
written in a much tidier way with more improvements:

```javascript
let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// -> 55
```

The point of showing this program is to show how programming languages has improved 
how programs can be expressed in both long and short, readable and unreadable ways. A good programming language
helps the programmer by allowing them to talk about the actions that the computer has to perform on a higher level.
It provides convenient building blocks, allows the programmer define his own building blocks and make 
those blocks easy to compose.

## What is Javascript?

Javascript was introduced in 1995 as a way to add programs to webpages in a browser. Ever since the language has been dominated other major
graphical web browsers.

```javascript
 ECMAScript === JavaScript
 ```
 Pros and cons of Javascript, it was intended to make programming easier for beginners. In reality, it mostly makes finding difficulties
 in your programs harder since the system wont point them out for you. This flexibility has its advantages. It leaves a lot of space for a lot
 of techniques that are impossible in more rigid languages, it can be used to overcome some of Javascript's shortcomings.

 Besides web browsers where Javascript is used, also some databases such as MongoDB use JS as their scripting and query language.
 Node.js provides an environment for programming JS outside of the browser.

 ## Code, and what to do with it

 

