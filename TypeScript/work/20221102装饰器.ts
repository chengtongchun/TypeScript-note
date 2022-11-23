//类装饰器
function classDecorate(constructor:Function){
    console.log(constructor,"类装饰器")
}
//属性装饰
function propertyDecorate(target:any,propertyKey:string){
    console.log(target,propertyKey,"属性装饰")
}
//成员方法装饰
function funDecorate(target:any,methodName:string){
    console.log(target,methodName,"成员方法装饰")
}
@classDecorate
class Decorate{
    @propertyDecorate
    name:string='name'
    @funDecorate
    say():void{
        console.log(this.name,'say')
    }
    // constructor(){}
    // constructor(name:string){
    //     this.name=name
    // }
}
let dec=new Decorate;
dec.name='ctc'
dec.say()

