console.log('started');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved"), 2000)
})

// promise.then(data => console.log(data));


class MyPromise {
    constructor(executer) {
        this.value;
        this.isFulfilled = false;
        this.isCalled = false;

        executer(this.resolve, this.reject);
    }

    then = (cb) => {
        this.resolveCB = cb;
        console.log(this)
        if (this.isFulfilled && !this.isCalled) {
            this.isCalled = true;
            this.resolve(this.successData);
        }
        return this;
    }

    catch = (cb) => {
        this.rejectCB = cb;
        if (this.isFulfilled && !this.isCalled) {
            this.isCalled = true;
            this.reject(this.errorData);
        }
        return this;
    }

    resolve = (successData) => {
        this.isFulfilled = true;
        this.successData = successData;
        console.log(typeof this.resolveCB)
        if (typeof this.resolveCB == 'function') {
            this.resolveCB(this.successData);
            this.isCalled = true;
        }
    }

    reject = (errorData) => {
        this.isFulfilled = true;
        this.errorData = errorData;
        if (typeof this.rejectCB == 'function') {
            this.rejectCB();
            this.isCalled = true;
        }
    }
}

const myPromise = new MyPromise((resolve, reject) => {
    console.log('before');
    setTimeout(() => {
        resolve("resolved")
    }, 2000)
})

myPromise.then((data) => console.log(data))