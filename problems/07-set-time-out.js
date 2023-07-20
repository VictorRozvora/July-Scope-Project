/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:



***********************************************************************/
let funcTimer = (time,func) => {
setTimeout(func, time);

}


function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"
////////////////////////////////////////////////////////////////////////

// function build () {
//   console.log('I love building')
// }
// function destroy () {
//   console.log('I love destroying')
// }

// setTimeout(destroy, 2000) // 3
// setTimeout(build, 1900) // 2
// setTimeout(destroy, 500) // 1
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = funcTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
