"use strict";
// 声明布尔类型
var isDone = false;
// 声明字符串类型
var str = '123';
// 声明数组类型
var list = [1, 2, 3];
// or
var list1 = ['1', '2', '3'];
// 元组 Tuple
var x = ['hello', 10];
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Any 在编程阶段还不清楚类型的变量指定一个类型
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
