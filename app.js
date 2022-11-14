// let heyThere = (message) => console.log(message);

// heyThere("hey hey hey");

// setTimeout(function () {
//   heyThere("hey again");
// }, 2000);

//creates getWords function with an argument 1 argument (word).
let getWords = (word) => {
  console.log(word);
};
//logs the (word) immediately
getWords("torrent");

// logs the (word) 3 times with respect to the setTimeOut function. 1000ms, then 2000ms, then 3000ms will log in that order.
setTimeout(function () {
  getWords("coronary");
}, 3000);
setTimeout(function () {
  getWords("sphincter");
}, 2000);
setTimeout(function () {
  getWords("brain");
}, 1000);

//create a function done() to console.log a (msg).
const done = (msg) => console.log(msg);

//countDown function that takes a num, and a callback argument (callback is reference to calling another function)
const countDown = (num, callback) => {
  setTimeout(() => {
    // if statement to set the conditions for the function to start doing work.
    if (num > 0) {
      console.log(num);
      // countDown function called
      countDown(num - 1, callback);
    } else {
      //runs done() when if statement conditions are no longer met
      done("finished");
    }
  }, 1000);
};

//call countDown() to initiate the recursion (function calling itself within itself)
countDown(5);

let lunchTime = true;
//function with Promise inside of it.
const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    if (lunchTime === true) {
      let yumyum = {
        lunch: "Pickled Pig's Feet",
        drink: "Sour Mash Whiskey",
      };
      resolve(yumyum);
    } else {
      let error = new Error("It ain't eatin' time yet!");
      reject(error);
    }
  });
};
//calls function orderMeSomeFood
orderMeSomeFood()
  //defines actions immediately after calling function
  .then((resolve) => {
    return console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
