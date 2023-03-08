type PointType = {
    x:number,
    y:number,
    z?:number
}


//接口 ： interface
//声明的方式
interface PointType2{
    x:number,
    y:number,
    z?:number
}

//大部分时候可以任意使用
//接口中的几乎所有特性都可以在type中使用

//区别
//1.区别一：type类型使用范围更广一些，接口类型只能用于声明对象
type MyNumber = number

//2.区别二：在声明对象时，interface可以多次声明,type不允许两个相同名称的别名同时存在

interface PT {
    x:number
    y:number
}

interface PT {
    z:number
}

const point:PT = {
    x:1,
    y:2,
    z:3
}

//3.interface支持继承
interface IP{
    name:string
    age:number
}

interface OP extends IP{
    data:string
}

const NP:OP = {
    name:'xx',
    age:12,
    data:'home'
}
//4.interface可以被类实现

export {}