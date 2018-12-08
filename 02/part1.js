const fs = require('fs');

function getLetterCountsForId (id) {
  const letterCounts = {};
  const idCharacters = id.split('');

  idCharacters.forEach((character) => {
    letterCounts[character] = (letterCounts[character] || 0) + 1;
  });

  return letterCounts
}

function hasNCharacters (id, n) {
  const letterCounts = getLetterCountsForId(id);  

  for (letter in letterCounts) {
    if (letterCounts[letter] === n) {
      return true;
    }
  }

  return false;
}

const input = fs.readFileSync('input.txt', 'UTF8');
const ids = input.split('\n');
let idsWithTwo = 0;
let idsWithThree = 0;

ids.forEach((id) => {
  if (hasNCharacters(id, 2)) {
    idsWithTwo++;
  }
  if (hasNCharacters(id, 3)) {
    idsWithThree++;
  }
});

const checksum = idsWithTwo * idsWithThree;

console.log(checksum);