// TASK DESCRIPTION
// Complete the function using the rules below to modify the object passed to the function.
// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. 
// First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.

// CODE EXPLANATION
// This version of the code explicitly handles every possible case with separate if clauses.
// First it checks if the value is an empty string. If it is, then the prop is deleted.
// Then, if prop is not "tracks" and the value is not an empty string. The prop is set to the value.
// If that check doesn’t pass, it next checks if prop is equal to tracks, the value is not an empty string, and the record does not have a tracks array. The "tracks" array is initialized with the only contents being value.
// It next checks if prop is equal to tracks, the value is not an empty string. The "tracks" array must exist because the case above was not true. The value is pushed onto the end of the "tracks" array.
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
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records [id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }  
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');