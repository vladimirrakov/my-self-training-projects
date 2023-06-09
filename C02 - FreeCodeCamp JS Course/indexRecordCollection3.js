// TASK DESCRIPTION
// Complete the function using the rules below to modify the object passed to the function.
// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. 
// First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.

// CODE EXPLANATION
// This solution uses the fact that objects are passed into functions as references to slightly simplify the solution syntax.

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];
  // Update the album
  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    album["tracks"] = album["tracks"] || []; // shortcircuit evaluation
    album["tracks"].push(value);
  }
  // Return the full collection
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');