let foo:number | string = 'abc'

foo = 123


//使用时要小心，不可以直接用需要进行类型缩小(narrow)

function printID(id:number|string){
    console.log('your id' ,id);

    //需要类型缩小
    if(typeof id ==='string'){
        console.log(id.length);
        
    }else{
        console.log(id);
        
    }
    
}

export{}