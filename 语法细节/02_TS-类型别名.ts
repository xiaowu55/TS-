
//type:类型别名
type MyNumber = number
const age :MyNumber = 18

//给ID的类型起个别名
type IDType = number |string

function printID(id:IDType){
    console.log(id);
    
}

export{}
