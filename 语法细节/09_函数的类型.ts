//函数类型表达式
//格式： (参数列表）=>返回值

type BarType = (num1:number) => number

const bar1:(num1:number)=>number = (arg:number):number =>{
    return 123
}

const bar2:BarType = (arg:number):number =>{
    return 123
}

export{}

//例子
type CalcType = (num:number,num2:number)=>number

function calc(calcFn:CalcType){
    const num1 = 10
    const num2 = 20
    const res = calcFn(num1,num2)
    console.log(res);
}

function sum(sum1:number,sum2:number):number{
    return sum1 + sum2
}

calc(sum)
//TS对于传入的函数类型的多余的参数会被忽略掉
//TS对于传入的函数参数的参数个数不进行检测（校验）
//TS对于很多类型的检测报不报错，取决于它的内部规则


//调用签名（从对象的角度看待这个函数，也可以有其他属性）

// const bar:any = (num1:number):number=>{
// return 123
// }

//修改之后



interface IBar {
   name:string,
    //函数可以调用：函数调用签名
    (num1:number):number
}

const bar:IBar = (num1:number):number=>{

    return 123
    
}

bar.name = 'asdf'

bar(123)

//开发中如何选择




//构造签名
class Person{

}

interface ICTORPerson{
    new ():Person
}

function factory(fn:ICTORPerson){
    const f = new fn()
    return f
}

factory(Person)


function foo(x:number,y?:number){
    if(y!==undefined){
        console.log(y+10)
    }
}