console.log("\n添字検索");
const o = { name: "ジェリー" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf("a"));
console.log(arr.lastIndexOf("a"));
console.log(arr.indexOf({ name: "ジェリー" }));   // 見つからない
console.log(arr.indexOf(o));
console.log(arr.indexOf([1, 2]));   // 見つからない
console.log(arr.indexOf("9"));
console.log(arr.indexOf(9));    // 見つからない

console.log(arr.indexOf("a", 5));   // "a"をarr[5]から検索する
console.log(arr.indexOf(5, 5));
console.log(arr.lastIndexOf(5, 4)); // arr[4]から左に探す
console.log(arr.lastIndexOf(true, 3));

console.log("\n添字検索（findIndex）");
const arr2 = [{ id: 5, name: "太郎" }, { id: 7, name: "花子" }];
console.log(arr2.findIndex(o => o.id === 5));
console.log(arr2.findIndex(o => o.name === "花子"));
console.log(arr2.findIndex(o => o === 2));
console.log(arr2.findIndex(o => o.id === 17));

console.log("\n要素検索");
console.log(arr2.find(o => o.id === 5));
console.log(arr2.find(o => o.id === 2));

console.log("\n要素検索（添字と配列も利用）");
const arr3 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr3.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));  // 添字が2より大きく、ルートが整数のものを検索
console.log(arr3.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x))));

console.log("\nsome: 指定の条件を満たす要素があるかを判定");
const arr4 = [5, 7, 12, 15, 17];
console.log(arr4.some(x => x % 2 === 0));
console.log(arr4.some(x => Number.isInteger(Math.sqrt(x))));

console.log("\nevery: 配列の全要素が指定の条件を満たすかを判定");
const arr5 = [4, 6, 16, 36];
console.log(arr5.every(x => x % 2 === 0));
console.log(arr5.every(x => Number.isInteger(Math.sqrt(x))));