//  const promiseone = new Promise(function(resolve, reject)
// {
//     setTimeout(function()
// {
//     console.log("Asy task Complete")
//     resolve()
// },2000)

// })
// promiseone.then(function()
// {
//     console.log("Promise Consumed")
// })

// new Promise (function(resolve , reject)
// {
//     setTimeout(function() {
//         console.log("Hello Promise Complete")
//         resolve()
//     }, 1000);
// }).then(function()
// {
//     console.log("Promise 2 done")

// })

// const promisethree = new Promise(function(resolve , reject)
// {
//     setTimeout(() => {
//         console.log("I am Promise 3")
//         resolve({username : "Prabin Kumar Sahu" , gmail:"Prabin@gmail.com"})
//     }, 1000);
// })

// promisethree.then(function(user)
// {
//     console.log(user)
// })

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    console.log("hello Promisefour complete");
    if (!error) resolve({ username: "Prabin Kumar Sahu", PhoneNum: 938797213 });
    reject("Error:Something went wrong");
  }, 1000);
})
  .then((user) => {
    console.log(user);
    // console.log(user.PhoneNum)
    // return user.PhoneNum;
    return user.username;
  })
  .then((user) => {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  });
