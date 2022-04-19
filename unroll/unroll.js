function unroll(squareArray) {
  let newArr = [];

  for(let i = 0; i < (squareArray.length + squareArray.length - 1) ; i++) {
    //keep unrolling untill squareArray is empty
    while(squareArray.length > 0) {
      // get the top from left to right
      for(item of squareArray[0]) {
        newArr.push(item);
      }

      // remove the top
      squareArray.splice(0,1);

      // horizontal length is now 1 less
      // get the right side from top to bottom 
      for(let x = 0; x < squareArray.length; x++) {
        newArr.push(squareArray[x][squareArray.length])
        // remove the right side
        squareArray[x].splice(squareArray.length, 1)
      }

      // vertical length is now 1 less.
      // now get bottom from right to left
      for(let x = squareArray.length - 1; x >= 0; x--) {
        newArr.push(squareArray[squareArray.length - 1][x])
        
      }

      // remove the bottom
      squareArray.splice(squareArray.length - 1, 1)
      // horizontal length is now 1 less
      
      // get the left side from bottom to top
      if(squareArray.length > 1) {
        for(let x = squareArray.length - 1; x >= 0; x--) {
          newArr.push(squareArray[x][0])
          // remove the left side
          squareArray[x].splice(0, 1)
        }
      }
      // if only 1 nested array left
        else if(squareArray.length === 1) {
        for(item of squareArray[0]) {
          newArr.push(item);
        }
        // remove the last array
        squareArray.splice(0,1);
      }
    }

  }
  // return the new array
  return newArr;
}

module.exports = unroll;
