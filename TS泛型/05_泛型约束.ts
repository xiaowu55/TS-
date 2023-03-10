interface IL{
    length:number
}

function getLength<T extends IL>(arg:T){
    return arg
}

const info1 =  getLength('aaa')
// const info2 = getLength(123)



