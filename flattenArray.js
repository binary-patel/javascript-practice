
function flatten1(arr = []) {
    if(arr.length == 0) return [];
    let res = [];
    
    for(let i=0;i<arr.length;i++) {
        if(typeof arr[i] == 'number') {
            res.push(arr[i]);
        } else {
            let temp = flatten(arr.slice(i)[0]);
            res = [...res, ...temp];
        }
    }

    return res;
}

function flatten2(arr = []) {
    return arr.reduce((acc, val) => {
        if(Array.isArray(val)) {
            acc = [...acc, ...flatten2(val)];
        } else {
            acc = [...acc, val];
        }
        return acc;
    }, [])
}

console.log(flatten2([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flatten2([[[[1], 2], 3], 4])); // [1, 2, 3, 4]