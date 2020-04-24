# Day 3: Data Structures

## Arrays

* Data type specifically to store sequences of values.
* first index of an array is zero, not one.
* main distinction of array vs objects is the order of elements inside an array.

### Properties

The two main ways to access properties in JavaScript are with a dot and with square brackets. 
When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name.
Property names are strings. They can be any string, but the dot notation works only with names that look like valid binding names.
The length property of an array tells us how many elements it has. To find the length of an array, you write array.length. 

## Objects

* A way to organize collections of variables and being used conceptually. A way to store properties of a variable in a container.
* It sets a foundation of working with data that comes from other sources.
* An object declared as const can be changed.

```javascript
const person = {
  name: JoAnnie,
  age: 19,
  lenght: 162
}

person.age = 22 // (*)

console.log(person.name)
```
Might seem that that the line (*) would cause an error, but the const fixes only the value of the person itself. Person stores the reference to the same object all the time. The (*) goed inside the object, it doesn't reassign person.

* Different datatypes can be used for properties for objects:
** string
** number
** boolean
** arrays

* A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it.
–––
* When an object variable is copied – the reference is copied, the object is not duplicated.

For instance:

```javascript
let user = { name: "John" };

let admin = user; // copy the reference
```
---
* Two objects are equal only if they are the same object.

```javascript 
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
```