const getSquare = (num, timer) => {
    if(num === 3) {
        return new Promise((_, reject)=>{
            setTimeout(()=>{reject(num*num)}, timer);
        })
    }
    return new Promise((resolve, _)=>{
        setTimeout(()=>{resolve(num*num)}, timer);
    })

    
//     return new Promise((res, reject) => {
//     setTimeout(() => {
//       res(timer);
//     }, timer);
//   });
}



Promise.myAll = function(tasks = []) {
    let result = [];
    let c = 0;
    return new Promise((resolve, reject) => {
        tasks.forEach((task, index) => {
            task.then(data => {
                result[index] = data;
                c++;
    
                if(c === tasks.length) {
                    resolve(result);
                }
            }).catch(err => reject(err));
        })
    })
}

Promise.myAllSettled = function(tasks = []) {
    let result = [];
    let c = 0;
    return new Promise((resolve, reject) => {
        tasks.forEach((task, index) => {
            task.then(data => {
                result[index] = data;
                c++;
    
                if(c === tasks.length) {
                    resolve(result);
                }
            }).catch(_ => {
                result[index] = 222222;
                c++;

                if(c === tasks.length) {
                    resolve(result);
                }
            });
        })
    })
}

Promise.myAllSettled([getSquare(2, 5000), getSquare(3, 2000), getSquare(4, 6000)]).then(data => {
    console.log(data)
})