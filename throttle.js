function throttleFunction(fn, delay) {
    let lastRun;

    return function() {
        let now = new Date();
        if(!lastRun || now - lastRun >= delay) {
            fn();
            lastRun = now;
        }
    }
}

const fun = () => {
    console.log('throttled')
}

const throttle = throttleFunction(fun, 1000);

for(let i=0;i<10000000;i++) {
    throttle();
}