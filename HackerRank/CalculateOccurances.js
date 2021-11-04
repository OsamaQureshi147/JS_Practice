//This problem calculates the occurances of zeros, positive and negative numbers in an array

const arr = [-4, 3, -9, 0, 4, 1];

const calcOccurance = (ar) => {
  let zeros = 0,
    negatives = 0,
    positives = 0;
  ar.forEach((value) => {
    console.log("value", value);
    if (value > 0) positives++;
    else if (value < 0) negatives++;
    else zeros++;
  });
  console.log([positives, negatives, zeros]);
  console.log([
    positives / ar.length,
    negatives / ar.length,
    zeros / ar.length,
  ]);
};

calcOccurance(arr);
