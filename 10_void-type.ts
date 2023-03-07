//1.在ts中如果一个函数没有任何返回值，那么返回值就是void类型
//2.如果返回值是void类型，那么我们也可以返回undefined类型

function sum(num:number,num2:number){
console.log(num+num2);

}

//应用场景：用来指定函数类型的返回值时void
type LyricInfoType = {
    time:number
    text:string

}
function parseLyric(lyric:string):LyricInfoType[]{
    const LyricInfos:LyricInfoType[]=[]

    return LyricInfos
}

type FootType = () => void
const foo:FootType = () => {}

export {}