function fn ():void{
  console.log(111)
}

function fn1(num:number,gender ?:string){
  return {
    num,
    gender
  }
}
fn1(11)

// 函数给默认值

function fn2 (name:string = 'xiaoming',age:number = 18):void {
  console.log(`${name}今年${age}了`)
}
fn2('xiaohong',19)
fn2('xiaobai',20)