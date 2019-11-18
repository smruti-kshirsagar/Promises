
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("In first promise")
    }, 10000);
})

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("In Second promise")
    }, 3000);
})

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("In Third promise")
    }, 5000);
})

Promise.race([promise1, promise2, promise3])
.then(function(response) {
    console.log("Response", response)
}, function(error) {
    console.log("Error occured---", error)
})