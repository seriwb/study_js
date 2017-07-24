let currentTempC = 16;
console.log(currentTempC);
currentTempC = 22.5;
console.log(`現在の温度は${currentTempC}℃です。`);

const multiline = "1行目\n\
2行目";
console.log(multiline);

const multiline2 = `3行目
    4行目`;
console.log(multiline2);


console.log("\nシンボルテスト");
const RED = Symbol();
const BLUE = Symbol();
const ORANGE = Symbol("夕日の色");
console.log(RED);
console.log(ORANGE);
console.log(RED === BLUE);
console.log(RED === ORANGE);


console.log("\nオブジェクト");
const obj = {};
obj.color = "黄色";
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj.color);

const SIZE = Symbol();
obj[SIZE] = 8;
const TEST = Symbol();
obj[TEST] = 'test';
console.log(obj[SIZE]);
console.log(obj);

obj.SIZE = 12;
console.log(obj["SIZE"]);
console.log(obj[SIZE]);
console.log(obj);

delete obj[SIZE];
console.log(obj);


console.log("\n論理値変換");
const m = 1;
const c0 = !m;
const c1 = !!m;
const c2 = Boolean(m);
console.log(m, c0, c1, c2);


console.log("\n数値比較");
let x = 0;
while(true) {
  x += 0.1;
  console.log(x);
  if (Math.abs(x - 0.3) < Number.EPSILON) break;
}


console.log("\n分割代入（デストラクチャリング）");
const bcd = { b: 2, c: 3, d: 4 };
const { a, b, c } = bcd;
console.log(a, b, c);

const arr = [1, 2, 3, 4, 5];
let [a1, a2, ...rest] = arr;
console.log(a1, a2);
console.log(rest);

// 数値変換
let l = 5, r = 10;
[l, r] = [r, l];
console.log(l, r);


console.log("\n");
console.log("\n");
console.log("\n");
