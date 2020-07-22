// 1.解构数组
const arr = [1, 2 ,3 ,4]
const [first,second] = arr
console.log(first) // 1

// 在数组里使用...语法创建剩余变量：
let [one, ...rest] = [1, 2, 3, 4];
console.log(one); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
let [, two, , fourth] = [1, 2, 3, 4];

// 解构对象
// 属性重命名
const o = {
  a: "foo",
  b: 12,
  c: "bar"
};
const { a: newName1, b: newName2 } = o;

// 在对象里使用...语法创建剩余变量
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;