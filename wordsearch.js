const transpose = function(matrix) {
  const newMatrix = matrix[0].map((L, x) => matrix.map(y => y[x]));
  return newMatrix;
};

const horizontalWordSearch = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
    
  for (let l of horizontalJoin) {
    if (l.search(word) !== -1) return true;
  }

  return false;
};

const diagonalDownRightLeft = function(words) {
  let sum = words[0].length + words.length - 1;
  let downLeftToRight = Array.apply(null, Array(sum)).map((() => []));
  
  
  for (let x = 0; x < sum; x++) {
    for (let i = 0; i < words.length; i++) {
      for (let y = 0; y < words[i].length; y++) {
        if (i + y === x) {
          downLeftToRight[x].push(words[i][y]);
        }
      }
    }
  }
  return downLeftToRight;
};

const wordSearch = (letters, word) => {

  const diagonalLettersDLTR = diagonalDownRightLeft(letters);

  if (horizontalWordSearch(letters, word)) return true;

  const verticalLetters = transpose(letters);

  if (horizontalWordSearch(verticalLetters, word)) return true;

  let reversedLetters = letters.slice();
  reversedLetters = reversedLetters.map(l => l.reverse());

  if (horizontalWordSearch(reversedLetters, word)) return true;

  let reversedVerticalLetters = verticalLetters.slice();
  reversedVerticalLetters = reversedVerticalLetters.map(l => l.slice().reverse());

  if (horizontalWordSearch(reversedVerticalLetters, word)) return true;

  if (horizontalWordSearch(diagonalLettersDLTR, word)) return true;

  let diagonalLettersURTL = diagonalLettersDLTR.map(l => l.slice().reverse());

  if (horizontalWordSearch(diagonalLettersURTL, word)) return true;


  return false;
};
 
module.exports = wordSearch;

