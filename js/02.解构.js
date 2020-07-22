"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 1.解构数组
var arr = [1, 2, 3, 4];
var first = arr[0], second = arr[1];
console.log(first); // 1
// 在数组里使用...语法创建剩余变量：
var _a = [1, 2, 3, 4], one = _a[0], rest = _a.slice(1);
console.log(one); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var _b = [1, 2, 3, 4], two = _b[1], fourth = _b[3];
// 解构对象
// 属性重命名
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var newName1 = o.a, newName2 = o.b;
// 在对象里使用...语法创建剩余变量
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
