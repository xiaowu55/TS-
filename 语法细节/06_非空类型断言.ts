//定义接口
interface IP{
    name:string
    age:number
    friend?:{
        name:string
    }
}

const info:IP = {
    name:'why',
    age:18
}

//可选链
console.log(info.friend?.name);

//属性赋值不可以用可选链

//解决方案一 类型缩小
//解决方案二： 非空类型断言(有点危险)
info.friend!.name = 'james'
