function sum(num1:number,num2:number){
    return num1 + num2
}

export{}

//函数的返回值类型可以直接指定
//也可以自动进行类型推导

function sum1(num1:number,num2:number):number{
    return num1 + num2
}

//定义对象类型
type ly ={
    time:number,
    text:string
} 

export{}