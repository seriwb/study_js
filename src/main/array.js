console.log("複数要素の追加");
let arr = [1, 2, 3];
let arr2 = arr.concat(4, 5, 6);
console.log(arr);
console.log(arr2);

arr2 = arr.concat([4, 5, 6]);
console.log(arr2);

arr2 = arr.concat([4, 5], 6);
console.log(arr2);

arr2 = arr.concat([4, 5], [6, 7]);
console.log(arr2);

arr2 = arr.concat([4, [5, 6]]);
console.log(arr2);  // 内側の配列は展開されない


console.log("\n途中の要素の削除や頭注への要素追加");
// splice(変更を開始する添字, 削除する要素の数, 追加する要素...)
// return 取り除かれた要素からなる配列
let a1 = [1, 5, 7];
let a2 = a1.splice(1, 0, 2, 3, 4);
console.log(a1);
console.log(a2);

a2 = a1.splice(5, 0, 6);
console.log(a1);
console.log(a2);

a2 = a1.splice(1, 2);
console.log(a1);
console.log(a2);

a2 = a1.splice(2, 1, 'a', 'b');
console.log(a1);
console.log(a2);

console.log("\n配列内の要素の削除や置換");
// 配列内をどんどん上書きしていく
// copyWithin(どこにコピーするか, どこからコピーするか, コピーを終了する場所...)
// return 更新されたオブジェクト自身
let b1 = [11, 12, 13, 14];
let b2 = b1.copyWithin(1, 2);
console.log(b1);
console.log(b2);
console.log(b1.copyWithin(2, 0, 2));
console.log(b1.copyWithin(0, -3, -1));
console.log(b2);  // こっちも参照は同じ

console.log("\nソート条件指定");
let target = [{name: "Suzanne"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanda"}];
console.log(target);
target.sort((a, b) => a.name > b.name);
console.log("-----");
console.log(target);
target.sort((a, b) => a.name[1] < b.name[1]);
console.log("-----");
console.log(target);
// Booleanだけでなく、数値も使え、結果が0の場合は2つの要素は等しいと判断される