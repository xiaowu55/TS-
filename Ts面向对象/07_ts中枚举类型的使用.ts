//定义枚举类型
enum Direction{
    UP,
    DOWN,
    LEFT,
    RIGHT
}

const d1:Direction = Direction.UP

function turnDirection(direction:Direction){

    switch(direction){
        case Direction.LEFT:
            console.log('left');
            break
            
    }
}

//监听键盘的点击
turnDirection(Direction.LEFT)