//1.对象中的函数中的this
const  obj = {
    name:'why',
    studying:function(){
        console.log(this.name,'study');
        
    }
}

obj.studying()


//ThisType
interface IState{
    name:string
    age:number
}

interface IStore{
    state:IState
    eating:()=>void
    running:()=>void
}

const store:IStore & ThisType<IState>={
    state:{
        name:'why',
        age:18
    },
    eating:function(this:IState){
        console.log(this.name);
        
    },
    running:function(this:IState){
        console.log(this.name);
        
    },

}