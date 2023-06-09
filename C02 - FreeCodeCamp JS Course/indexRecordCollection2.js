// TASK DESCRIPTION
// Complete the function using the rules below to modify the object passed to the function.
// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. 
// First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.

// CODE EXPLANATION
// This solution re-orders the code to make the if clauses simpler.
// First checks if value is a blank string. If so, then the key (prop) is removed from the object.
// If that first check doesn’t pass, then we know that value is not a blank string. It next checks if prop is equal to "tracks". The "tracks" array is initialized if it does not exist, and then value is pushed into the tracks array. (This step uses shortcircuit evaluation)
// If both these checks fail (meaning value is not an empty string and prop is not "tracks"), then either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
// Lastly, the entire records object is returned.

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
  if (value === '') {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');