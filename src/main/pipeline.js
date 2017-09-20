// 配列に関数を格納することで、連続処理を実現する

const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];

// 2Dの変換処理3つ
const pipeline = [
  function rotate(p) {
    return {
      x: p.x * cos(theta) - p.y * sin(theta),
      y: p.x * sin(theta) + p.y * cos(theta),
    };
  },

  function scale(p) {
    return {
      x: p.x * zoom,
      y: p.y * zoom,
    };
  },

  function translate(p) {
    return {
      x: p.x + offset[0],
      y: p.y + offset[1],
    };
  },
];

console.log(pipeline);

const p = { x: 1, y: 1 };
console.log(p);
let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
  p2 = pipeline[i](p2);
  console.log(p2);
}
