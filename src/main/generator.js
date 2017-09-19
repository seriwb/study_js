// *をつけて、ジェネレータであることを示す
function* rainbow() {
  yield '赤';
  yield '橙';
  yield '黃';
  yield '緑';
  yield '青';
  yield '水色';
  yield '紫';
  return 'この色は出ねぇよぅ！';
}

const it = rainbow();
for (let color of it) {
  console.log(color); // next出ない呼び出しだと、returnの値（done:trueの値）は出力されない
}
console.log(it.next());


console.log("\n双方向コミュニケーション");
function* interrogate() {
  const name = yield "お名前は？";
  const color = yield "お好きな色はなんですか？";
  return `${name}さんの好きな色は${color}だそうですよ。`;
}

const it2 = interrogate();
console.log(it2.next());
console.log(it2.next('楓'));
console.log(it2.next('緑'));
console.log(it2.next());
