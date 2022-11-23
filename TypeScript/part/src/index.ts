console.log('好家伙，真烦')

function sum(a:number,b:number):number{
    return a+b;
}
const obj ={name:'孙悟空',age:33};

console.log(obj);
obj.age=23;
console.log(obj);
console.log(sum(123,456));

let fn=(a:number,b:number)=>a+b;

fn(123,456);
fn(77,22)

console.log(Promise)