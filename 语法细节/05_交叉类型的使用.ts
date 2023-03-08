//回顾：联合类型
type ID = number | string
const id:ID = 'abc'
const id2:ID = 123

//交叉类型：多种类型同时满足

interface IK{
    name:string
    age:number
}

interface IC{
    name:string
    coding: ()=>void
}

const  info:IK&IC = {
    name:'why',
    age:18,
    coding:function(){
        console.log(this.age);
        
    }

}


export{}