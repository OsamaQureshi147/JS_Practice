// for (var index = 1; index <= 5; index++) {
//   setTimeout(() => {
//     console.log(`i`, index);
//   }, index * 1000);
// }

// for (let index = 1; index <= 5; index++) {
//   setTimeout(() => {
//     console.log(`i`, index);
//   }, index * 1000);
// }

// for (var index = 1; index <= 5; index++) {
//   function getIndex(index) {
//     setTimeout(() => {
//       console.log(`i`, index);
//     }, index * 1000);
//   }

//   getIndex(index);
// }

function outer() {
  var a = 20;
  function inner() {
    var b = 30;
    console.log(a, b);
  }

  return inner;
}

const A = outer();
A();
