// This problem calculates the absolute diagonal difference in a 2D array.

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const diagonalDifference = (ar) => {
  let leftDiagonal = [];
  let rightDiagonal = [];
  for (let i = 0; i < ar.length; i++) {
    leftDiagonal.push(ar[i][i]);
    rightDiagonal.push(ar[i][ar.length - 1 - i]);
  }
  const leftDiagonalSum = leftDiagonal.reduce((acc, curr) => acc + curr);
  const rightDiagonalSum = rightDiagonal.reduce((acc, curr) => acc + curr);
  const absDiagonalDiff = Math.abs(leftDiagonalSum - rightDiagonalSum);
  console.log(absDiagonalDiff);
  return absDiagonalDiff;
};

diagonalDifference(arr);
