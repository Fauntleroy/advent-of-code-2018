const fs = require('fs');

function getSingleNonmatchingIndex (id1, id2) {
  const id1Characters = id1.split('');
  let nonMatchingIndex;

  id1Characters.some((id1Character, id1CharacterIndex) => {
    if (id2[id1CharacterIndex] !== id1Character) {
      if (typeof nonMatchingIndex === 'number') {
        nonMatchingIndex = null;
        return true;
      }
      nonMatchingIndex = id1CharacterIndex;
    }
  });

  return nonMatchingIndex;
}

const input = fs.readFileSync('input.txt', 'UTF8');
const ids = input.split('\n');
const previousIds = [];
let id1;
let nonMatchingIndex;

ids.some((id) => {
  previousIds.some((previousId) => {
    const singleNonmatchingIndex = getSingleNonmatchingIndex(id, previousId);

    if (typeof singleNonmatchingIndex === 'number') {
      id1 = id;
      nonMatchingIndex = singleNonmatchingIndex;
      return true;
    }
  });

  if (typeof nonMatchingIndex === 'number') {
    return true;
  }

  previousIds.push(id);
});

const result = id1.slice(0, nonMatchingIndex) + id1.slice(nonMatchingIndex + 1, id1.length);

console.log(result);