export const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export const generateMatrix = (arr) => {
    const result = [[], [], [], []];
    let y = 0;
    let x = 0;

    for (let i = 0; i < arr.length; i += 1) {
        if (x >= 4) {
            y += 1;
            x = 0;
        }
        result[y][x]  = arr[i];
        x += 1;
    }
    return result;
}

const animationStyle = (node, x, y) => {
    const shiftPs = 100;
    node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`;
}
export const setPositionSquare = (matrix, arr) => {
    for (let y = 0; y < matrix.length; y += 1) {
        for (let x = 0; x < matrix[y].length; x += 1) {
            const value = matrix[y][x];
            const node = arr[value - 1];

            animationStyle(node, x, y);
        }
    }
}

  

