Array.prototype.myReduce = function (callback, initial) {
  let acc = initial;
  let start = 0;
  if (acc === undefined) { acc = this[0]; start = 1; }
  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};