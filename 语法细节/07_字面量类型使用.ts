//1.字面量类型的基本形式

const name:'why' = 'why'
let age:18 = 18

//2.将多个字面量类型联合起来

type Direction = 'left'|'right'|'up'|'down'


//例子：封装请求方法
type MethodType = 'get'|'post'
function request(url:string,method:MethodType){
    
}


//TS细节
const info ={
    url:'xxx',
    method:'post'
}
//下面的做法是错误的：info.method获取的是string类型
//request(info.url,info.method)

//解决方案一 ：info.method进行类型断言
//request(info.url,info.method as 'post')

//解决方案二 ： 直接让info对象类型是一个字面量类型
// const info2:{url:string,method:'post'} = {
//     url:'xxx',
//     method:'post'
// } 

const info2 = {
    url:'xxx',
    method:'post'
} as const


export {}