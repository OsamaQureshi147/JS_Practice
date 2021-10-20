const firstFunc = (callback) => {
  setTimeout(() => {
    console.log("First function called");
    callback();
  }, [2000]);
};

const secondFunc = () => {
  console.log("Second function called");
};

// without callbacks, if we call these functions like
// firstFunc()
// secondFunc()
// Ouput will be
// Second function called
// First function called

firstFunc(secondFunc);
//Output
// First function called
// Second function called
