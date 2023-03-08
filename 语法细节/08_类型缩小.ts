function printId(id:number|string){
    if(typeof id === 'string'){
        console.log(id.length); 
    }else{

    }
}


//2. === \ !== \ ==
type Direction = 'left'|'right'|'up'|'down'
function switchDirection(direction:Direction){
    if(direction==='left'){
        console.log('left');
        
    }else if(direction==='right'){
        console.log('right');
        
    }
}

// intanceof



//in
interface swim {
    swim: ()=>void
}

interface run{
    run: ()=>void
}

function move(animal:swim|run){
    if('swim' in animal){
        animal.swim()
    }else if ('run' in animal){
        animal.run()
    }
}