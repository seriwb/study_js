class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}
Person.nextId = 0;
const 一郎 = new Person("一郎"),
      次郎 = new Person("次郎"),
      三郎 = new Person("三郎"),
      四郎 = new Person("四郎");
const arr = [一郎, 次郎, 三郎, 四郎];

console.log(arr.find(p => p.id === 三郎.id));
console.log(arr.find(function(p) {return p.id === this.id}, 三郎)); // thisを定数三郎に指定
console.log(arr.find(p => p.id === this.id, 三郎));   // undefined
