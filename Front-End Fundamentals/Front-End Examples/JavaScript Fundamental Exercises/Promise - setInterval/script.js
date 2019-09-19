var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
        reject()
    }, 5000);
});

promise1.then(function (value) {
    console.log(value);
    // expected output: "foo"
})

console.log(promise1);
    // expected output: "resolved"

console.log("piyuuu");

// setInterval(() => {
//     console.log("Hello")
// }, 2000);

// console.log("piyuuu - 2");