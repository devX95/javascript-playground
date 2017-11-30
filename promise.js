//Promises
var asyncAdd = (a, b) =>{
    return new Promise((resolve, reject) => {
        if (typeof a === "number" && typeof b === "number"){
            resolve(a + b);
        } else {
            reject("Arguments must be numbers");
        }
    });
}

asyncAdd(5, 6).then((result) => {
    console.log("Result:", result);
    return asyncAdd(result, 30);
}).then((result) => {
    console.log("Result: ", result);
}).catch((err) => {
    console.log(err);
})