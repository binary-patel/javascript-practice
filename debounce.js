function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => { fn() }, delay);
    }
}
const fn = () => console.log("debounced")
const db = debounce(fn, 5000)
db();