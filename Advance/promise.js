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

// const promisefour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     console.log("hello Promisefour complete");
//     if (!error) resolve({ username: "Prabin Kumar Sahu", PhoneNum: 938797213 });
//     reject("Error:Something went wrong");
//   }, 1000);
// })
//   .then((user) => {
//     console.log(user);
//     // console.log(user.PhoneNum)
//     // return user.PhoneNum;
//     return user.username;
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const promisefive = new Promise(function(resolve , reject)
// {
//   setTimeout(function()
//   {
//     let error = true
//     console.log("This Promisefive either resolve or rejected ")
//     if(!error)  {resolve({username : 'javascript',  password :1234})}
//     reject('Error : javascript went wrong' )

//   },1000)
// })

// async function consumepromisefive()
// {
//   try {
//     const response = await promisefive
//   console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }

// consumepromisefive()



// async function getuserdetails()
// {
//     const response = await fetch("https://api.github.com/users/Prabin-Kumar-Sahu")
//   try {
//     const data =await response.json()
//     console.log(data)
//   } 
// catch(error)
// {
//   console.log("E: ", error);
// }
  // const data =response.json()
  //   console.log(data)

// }
// getuserdetails()


fetch("https://api.github.com/users/Prabin-Kumar-Sahu").then((response)=>
{
  return response.json()

}).then((data)=>
{
  console.log(data)
}).catch((error)=>{
console.log('Error :' , error)
})