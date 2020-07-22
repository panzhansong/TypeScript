// 声明布尔类型
const isDone: boolean = false

// 声明字符串类型
const str: string = '123'

// 声明数组类型
const list: number[] = [1,2,3]
// or
const list1: Array<string> = ['1','2','3']

// 元组 Tuple
const x: [string, number] = ['hello', 10]

// 枚举 enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any 在编程阶段还不清楚类型的变量指定一个类型
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false

