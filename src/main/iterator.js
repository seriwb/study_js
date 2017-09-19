class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    const now = Date.now();
    console.log(`ログ追加：${message}(${now})`);
    this.messages.push({ message, timestamp: now });
  }
  // イテレータとして扱われるためにはこれを実装する必要がある
  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages;
    return {
      // nextの実装がないと動作しない
      next: () => i >= messages.length ?
        {value: undefined, done: true} : {value: messages[i++], done: false}
    }
  }
}

// 利用例
const log = new Log();
log.add("海の監視初日。勤務開始");
setTimeout(() => {log.add("クジラを見た");}, 3*1000);
setTimeout(() => {log.add("1艘の船を見た");}, 7*1000);
setTimeout(() => {log.add("監視終了");}, 9*1000);

setTimeout(() => {
  console.log(`-本日の業務報告- (${new Date()}`);
  for (let entry of log) {
    const date = new Date(entry.timestamp);
    console.log(`${entry.message} (${date}`);
  }
}, 10*1000);
