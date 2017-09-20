function sum(arr, f) {
  // fが指定されなければ何もしない関数を作る
  if (typeof f !== 'function') f = x => x;

  return arr.reduce((a, x) => a += f(x), 0);
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3], x => x * x));

// 関数fを使って合計を作成する関数を返す
function newSummer(f) {
  return arr => sum(arr, f);
}

const sumOfSquares = newSummer(x => x * x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfCubes([1, 2, 3]));