//1.定义函数将传入的内容返回


function bar<Type>(arg:Type):Type{
    return arg
}

const res1 = bar<number>(123)

const res2 = bar<string>('asdas')

//2.省略的写法

const res3 = bar('aaaaa') 