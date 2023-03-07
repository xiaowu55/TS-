//保存我的个人信息
//1.使用数组
    const info1 :any[] = ['wujiaze',20]//不合适，数组中最好存放相同的数据类型，获取值之后不能明确知道对应的数据类型

//2.对象类型（最多）
    const info2 = {
        name:'wujiaze',
        age:21
    }

//3.元组类型 tuple,介于对象与数值之间的
//元组数据结构中可以存放不同的数据类型，取出来的item也是有明确的类型
    const info3:[string,number,number] = ['wujiaze',18,1.88]
    const value2 = info3[2]

//在函数中是哟元组类型是最多的

function useState(initialState:any):[number,(newValue:number)=>void]{
    let stateValue = initialState
    function setValue(newValue:any){
        stateValue = newValue
    }

    return [stateValue,setValue]
}

const [count,setCount]= useState(10)

setCount(100)

export{}