abstract class Shape {
    abstract getArea()
}

class Rectangle extends Shape{
    constructor(public width:number,public height:number){
        super()
    }

    getArea(){
        return this.width*this.height
    }
}

class Circle extends Shape{

    constructor(public radius:number){
        super()
    }
    getArea(){
        return  this.radius**2*Math.PI
    }

}


//通用的函数
function getArea(){
    
}
export{}