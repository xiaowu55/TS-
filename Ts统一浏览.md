# TS类型

## 类型

1. 顶级类型 any unknow
2. Object
3. Number String Boolean
4. number string boolean
5. 1      小满    false
6. never

**unknow类型**只能赋值给自身或者是any，也没有办法都任何属性，方法也不可以调用

tips：unkown类型比any更加安全，如果不知道要用什么类型就用unknow

## Object、object、以及{}这三者的理解

* Object包含了所有类型
* object表示包含了所有非原始类型的，所有引用类型都支持（常用于泛型约束）
* {}可以理解成new Object 也是包含所有类型，虽然可以赋值任意类型但是没法修改（少用较好）

## 接口和对象类型

interface
    1. 不能多属性也不能少属性
    2. 遇到重名的时候会重合
    3. 索引签名
    4. ?：非必填，可选
    5. readonly 可读不可改
    6. 接口继承
    7. 定义函数类型

* 定义对象数组使用interface
* 定义二维数组
* ..arg的伪数组

## 函数类型

1. 函数定义类型和返回值
2. 箭头函数定义类型和返回值
3. 函数的默认参数
4. 函数的可选参数
5. 参数是一个兑现如何定义
6. 函数this类型
7. 函数重载

## 联合类型

用 | 两个类型中满足一个就可以

## 交叉类型

用 & 两个类型要同时满足，多用于对象

## 类型断言

用 as 来将一个类型转换为一个新类型

## 内置对象

new出来的实例类型就是它的new

HTML 元素名称 Element HTMLElement

## 代码雨

## class

1. class的基本用法继承和类型约束implements
2. class的修饰符readonly private public protected
3. super原理
4. 静态方法
5. get set
