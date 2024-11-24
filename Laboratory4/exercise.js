const { Observable } = require('rxjs');

function promiseToObservable(promise) {
    return new Observable(observer => {
        promise.then(
            value => {
                observer.next(value);
                observer.complete();
            },
            error => {
                observer.error(error);
            }
        );
    });
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello, Observable!"), 1000);
});

const myObservable = promiseToObservable(myPromise);

myObservable.subscribe({
    next: (value) => console.log("Received value:", value), 
    error: (err) => console.error("Error:", err),           
    complete: () => console.log("Observable complete!")   
});  