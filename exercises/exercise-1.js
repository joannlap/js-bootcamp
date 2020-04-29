// Only change code below this line

var remainder = 11 % 3;

// counting cards
var count = 0;

function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

// Global scope and functions

// Declare the myGlobal variable below this line
var myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);

  //Global scope vs local scope in functions

  // Setup
  var outerWear = "T-Shirt";

  function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater"
    return outerWear;

    // Only change code above this line
    return outerWear;
  }

  myOutfit();

  // replacing if else chains with switch

  function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }

    // Only change code above this line
    return answer;
  }

  chainToSwitch(7);
}


// stand in line

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  return arr.shift(item);
  // Only change code above this line


}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));