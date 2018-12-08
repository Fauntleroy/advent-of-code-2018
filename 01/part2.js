const fs = require('fs');

const input = fs.readFileSync('input.txt', 'UTF8');
let frequencyDeltasAsStrings = input.split('\n');
frequencyDeltasAsStrings.pop();
const frequencyDeltas = frequencyDeltasAsStrings.map((deltaString) => parseInt(deltaString));
let currentFrequency = 0;
let matchingFrequency;
const frequencies = {
  '0': true
};

function checkFrequencies () {
  frequencyDeltas.some((frequencyDelta) => {
    currentFrequency += frequencyDelta;
    if (frequencies[currentFrequency]) {
      matchingFrequency = currentFrequency;
      return true;
    }
    frequencies[currentFrequency] = true;
  });

  if (!matchingFrequency) {
    checkFrequencies();
  }
}

checkFrequencies();

console.log(matchingFrequency);