// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("Completed!!"), 1000);
// });

// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// );

// console.log("Outside scope of promise!!")

fetch("data.json")
.then(function(response){
  console.log("First Response", response)
  return response.json();
})
.then(function(response){
  console.log("Second Response", response)
})
.catch(function(error){
  console.log("error in execution", error);
})