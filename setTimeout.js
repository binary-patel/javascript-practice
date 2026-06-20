window.timers = {};
window.timeId = 1234;
window.mySetTimeout = function(cb, delay) {

    let endTime = Date.now() + delay;
    window.timers[++timeId] = {
        timerId,
        cb,
        endTime
    }

    requestIdleCallback(processTimer);
}

function processTimer() {
    function processEachTimer({timerId, cb, endTime}) {
        const now = Date.now();

        if(now - endTime >= 0) {
            cb();

            delete window.timers[timerId];
        }
    }

    Object.keys(window.timers).forEach((item) => processEachTimer(item));
}

console.log("Started");

mySetTimeout(()=>{
    console.log("Printing");
}, 2000);