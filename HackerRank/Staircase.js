const staircase = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1), "#".repeat(i + 1));
  }
};

staircase(6);
