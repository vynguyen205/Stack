// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  const sortedArr = arr.sort()
  console.log(sortedArr)
  //map has 3 args, but don't need to pass all of them. GO I 
  let totalSongs = 0;
  let totalTime = 0;
  sortedArr.forEach((currentItem, index, arr) => {
    if(currentItem + totalTime < 60) {
      totalSongs += 1
      totalTime += currentItem
    }
  })
  return totalSongs
};

var arr = [
  3,
  5,
  7,
  2,
  1,
  4,
  8,
  5,
  3,
  2,
  2,
  1,
  5,
  7,
  4,
  2,
  3,
  1,
  3,
  4,
  7,
  8,
  8,
  2
];

console.log(mostSongsInPlaylist(arr));