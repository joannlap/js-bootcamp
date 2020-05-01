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


//Record collection.

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop === "tracks" && collection[id][prop] === undefined) {
    collection[id][prop] = [];
  } else if (prop === "tracks" && value !== "") {
    collection[id][prop].push(value)
  } else if (prop !== "tracks" && value !== "") {
    collection[id][prop] = value
  } else if (value === "") {
    delete collection[id][prop]
  }
  return collection;

}

updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(1245, "album", "Riptide")

// 1. if prop is tracks but the element does not have the property, create the property of the pair(by an empty array)
// 2. if prop is tracks and value isn't empty, push the value onto the end of the album existing tracks array.
// 3. if prop isnt tracks and value isnt blank, update or set the value for that record album's property.
// 4. if value is blank, delete that prop from the album