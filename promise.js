function conditionalPromise(condition) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            if (condition) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected!");
            }
        }, 1000);
    });
}

// Usage
conditionalPromise(true)
    .then(result => console.log(result))
    .catch(error => console.log(error));
