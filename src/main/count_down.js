// JavaScriptでは関数の引数には値が渡される
var i;
for (i = 5; i >= 0; i--) {
  (count => {
    setTimeout(() => {
      console.log(count === 0 ? "go!" : count);
    }, (5 - count) * 1000);
  })(i);
}

// ブロックスコープ変数使うとIIFE作らなくてもOK
// ＊letを外に書くと、うまく動作しなくなる
for (let i = 5; i >= 0; i--) {
  setTimeout(() => {
    console.log(i === 0 ? "go!" : i);
  }, (5 - i) * 1000);   // ここの待ち時間の計算は同期的に行われる
}
