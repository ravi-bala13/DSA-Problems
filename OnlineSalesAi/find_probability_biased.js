function getBiasedEvent(inputList) {
  let totalProbability = 0;

  // To get total probability.
  for (const item of inputList) {
    const key = Object.keys(item)[0];
    totalProbability += item[key];
  }

  // Generate a random number between 0 and the total probability(ie.- 100).
  let randomNumber = Math.random() * totalProbability;

  // Iterate over the inputList and find in which part the random number resides
  for (const item of inputList) {
    const key = Object.keys(item)[0];
    if (randomNumber <= item[key]) {
      return key;
    }
    randomNumber -= item[key];
  }
}

const input1 = [{ Head: 65 }, { Tail: 35 }];

const input2 = [
  { 1: 10 },
  { 2: 30 },
  { 3: 15 },
  { 4: 15 },
  { 5: 30 },
  { 6: 0 },
];

main(input1);
main(input2);

function main(input) {
  let obj = {};
  for (let item of input) {
    // only one key in item
    let key = Object.keys(item)[0];
    if (obj[key] == undefined) {
      obj[key] = 0;
    }
  }

  for (let i = 0; i < 1000; i++) {
    const outcome = getBiasedEvent(input);
    //   console.log(outcome);
    obj[outcome]++;
  }
  console.log("obj:", obj);
}

module.exports = getBiasedEvent;
