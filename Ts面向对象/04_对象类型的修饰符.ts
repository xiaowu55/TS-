type IPerson ={
    name?:string
    readonly age:number

}

interface Ikun{
    name:string
    slogan:string
}

//索引签名

interface ICollection{
    length:number

    [aaaa:number]:string
}

const names:string[] = ['abc','cba','nba']

