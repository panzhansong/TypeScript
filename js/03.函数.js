"use strict";
function fn() {
    console.log(111);
}
function fn1(num, gender) {
    return {
        num: num,
        gender: gender
    };
}
fn1(11);
// 函数给默认值
function fn2(name, age) {
    if (name === void 0) { name = 'xiaoming'; }
    if (age === void 0) { age = 18; }
    console.log(name + "\u4ECA\u5E74" + age + "\u4E86");
}
fn2('xiaohong', 19);
fn2('xiaobai', 20);
