function greedScore(diceArray) {
  if(diceArray.length == 0) return 0;
  if(diceArray.length > 5) return 0;

  return bonusScore(diceArray) + regularScore(diceArray);
}

function bonusScore(diceArray) {
  let tripleDie = detectTriple(diceArray);

  if(tripleDie == 1) {
    return 700; // The regular score here gives us 300 so we only need 700 more
  } else if(!tripleDie) {
    return 0;
  } else if(tripleDie == 5) {
    return 350; // The regular score here gives us 150 so we only need 350 more
  } else {
    return 100 * tripleDie; // No regular score here so we need the full bonus
  }
}

function detectTriple(diceArray) {
  let counts = countOf(diceArray);
  let arrayCount = Object.values(counts);
  let tripleValue = 0; // Return 0 if no triple is found

  for(let i = 0; i < arrayCount.length; i++) {
    if(arrayCount[i] >= 3) {
      tripleValue = i + 1; // Because Dice are 1-indexed
      break;
    }
  }
  return tripleValue;
}

function countOf(diceArray) {
  let counts = initialCounts();

  for(let i = 0; i < diceArray.length; i++) {
    let diceThrow = diceArray[i];
    counts[diceThrow]++;
  }
  return counts;
}

function initialCounts() {
  return {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
}

function regularScore(diceArray) {
  let ones = countNumberOf(1, diceArray);
  let fives = countNumberOf(5, diceArray);
  return 100 * ones + 50 * fives;
}

function countNumberOf(requested, array) {
  return countOf(array)[requested];
}

module.exports = {
  greedScore
};
