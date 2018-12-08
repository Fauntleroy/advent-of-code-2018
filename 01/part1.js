const fs = require('fs');

const input = fs.readFileSync('input.txt', 'UTF8');
let frequencyDeltasAsStrings = input.split('\n');
frequencyDeltasAsStrings.pop();
const frequencyDeltas = frequencyDeltasAsStrings.map((deltaString) => parseInt(deltaString));
const frequency = frequencyDeltas.reduce((result, frequencyDelta) => result + frequencyDelta, 0);

console.log(frequency);