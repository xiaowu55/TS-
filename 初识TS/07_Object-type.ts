//1.对象类型的简单回顾
const info:{
    name:string
    age:number
} = {
    name:'wujiaze',
    age:10
}

//2.对象类型结合使用

type PointType = {x:number,y:number,z?:number}
function printCoordinate(point:PointType){
    console.log('x Coordinate',point.x);
    console.log('x Coordinate',point.y);
    if(point.z){
        console.log('z coordinate',point.z);
        
    }

    
}


export{}