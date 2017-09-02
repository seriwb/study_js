console.log("\nreduce");
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0);
console.log(sum);

const sum2 = arr.reduce((a, x) => a + x, 0);
console.log(sum2);

const sum3 = arr.reduce((a, x) => a + x); // 初期値がarr[0]でarr[1]から呼び出し始める
console.log(sum3);

console.log("\nアキュムレータにオブジェクトを利用");
const words = [
  "Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November",
  "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"
];
const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]])
    a[x[0]] = [];

  a[x[0]].push(x);
  return a;
}, {}); // オブジェクトを返す
console.log(alphabetical);
