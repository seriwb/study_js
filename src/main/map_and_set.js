console.log("map test");

const u1 = { name: '和洋' };
const u2 = { name: '花子' };
const u3 = { name: '涼子' };
const u4 = { name: '哲人' };

const userRoles = new Map([
  [u1, 'ユーザー'],
  [u2, 'ユーザー'],
  [u3, '管理者'],
]);

console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));   // false
console.log(userRoles.get(u4));   // undefined
console.log(userRoles.size);

console.log("\nchange u1 role");
userRoles.set(u1, '管理者');
console.log(userRoles.get(u1));

console.log("\nget userRoles data");
for (let u of userRoles.keys()) console.log(u.name);
for (let r of userRoles.values()) console.log(r);
for (let ur of userRoles.entries()) console.log(`${ur[0].name}: ${ur[1]}`);
for (let [u, r] of userRoles.entries()) console.log(`${u.name}: ${r}`); // 上と同じ
// entriesはデフォルトイテレータなのでこれでもOK
for (let [u, r] of userRoles) console.log(`${u.name}: ${r}`);

console.log("\ndelete element");
console.log(userRoles.values());
console.log([...userRoles.values()]);
userRoles.delete(u2);
console.log(userRoles.size);
console.log([...userRoles.values()]);
userRoles.clear();
console.log(userRoles.size);
console.log([...userRoles.values()]);


console.log("\nWeekMap");
// キーはオブジェクトでなければならない
// キーがGCの対象になる
// イテレーションしたりクリアしたりできない

const SecretHolder = (function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('秘密A');
b.setSecret('秘密B');
console.log(a.getSecret());
console.log(b.getSecret());


console.log("\n\nSet section");
const roles = new Set();
roles.add("ユーザー");
console.log(roles);
roles.add("管理者");
console.log(roles);
console.log(roles.size);
roles.add("ユーザー");  // 何も起きない
console.log(roles);

console.log(roles.delete("管理者")); // true
console.log(roles);
console.log(roles.delete("管理者")); // エラーにはならない:falseが返る


console.log("\nWeekSet");
// 指定のオブジェクトが、あるセットにあるかどうかをチェックところで利用する

const naughty = new WeakSet();
const children = [
  { name: "和洋" },
  { name: "哲人" },
];

naughty.add(children[1]);

for (let child of children) {
  if (naughty.has(child)) {
    console.log(`${child.name}クンには石炭をあげる！`);
  } else {
    console.log(`${child.name}クンにはプレゼントをあげる！`);
  }
}