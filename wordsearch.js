/** wordsearch.js
 *  Search for a word in an arry of letters.  Word can be present horizontally, vertically, backwards or diagonally
 */

// Transpose function from Week 4
const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push(matrix.map(row => row[i]));
  }
  return newMatrix;
};

// Create an array of all the diagonals
const daigonalArrs = function(matrix) {
  let newMatrix = [];

  // Maps top right quadrant of diagonals
  for (let i = 0; i < matrix[0].length; i++) {
    let count = -1;
    newMatrix.push(matrix.map(row => {
      count += 1;
      return row[i + count];
    }));
  }

  const tmatrix = transpose(matrix);
  // Maps botom left quadrant of diagonals
  for (let i = 1; i < tmatrix[0].length; i++) {
    let count = -1;
    newMatrix.push(tmatrix.map(row => {
      count += 1;
      return row[i + count];
    }));
  }

  return newMatrix;
};

// Function to check for words in various directions, returns true if found
const wordSearch = (letters, word) => {
  if (!word) return false;
  if (!letters.length) return false;
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  const forwardDiagonals = daigonalArrs(letters).map(ls => ls.join(''));
  const backwardDiagonals = daigonalArrs(letters.map(row => row.reverse())).map(ls => ls.join(''));
  const diagonalJoin = forwardDiagonals.concat(backwardDiagonals);

  const wordReverse = word.split('').reverse().join('');

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(wordReverse)) return true;
  }

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(wordReverse)) return true;
  }

  for (const l of diagonalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(wordReverse)) return true;
  }

  return false;
};

module.exports = wordSearch;