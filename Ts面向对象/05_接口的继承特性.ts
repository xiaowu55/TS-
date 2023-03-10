interface IPerson{
    name:string
    age:number
}

interface Ikun extends IPerson{
    slogan:string
}

const ikun:Ikun ={
    name:'wht',
    age:18,
    slogan:'1111'

}

export{}


//接口的类实现过程
class Person implements Ikun{
    name: string
    age:number
    slogan:string

}

const ikun2 = new Person()

