"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//类装饰器
function classDecorate(constructor) {
    console.log(constructor, "类装饰器");
}
//属性装饰
function propertyDecorate(target, propertyKey) {
    console.log(target, propertyKey, "属性装饰");
}
//成员方法装饰
function funDecorate(target, methodName) {
    console.log(target, methodName, "成员方法装饰");
}
let Decorate = class Decorate {
    constructor() {
        this.name = 'name';
        // constructor(){}
        // constructor(name:string){
        //     this.name=name
        // }
    }
    say() {
        console.log(this.name, 'say');
    }
};
__decorate([
    propertyDecorate
], Decorate.prototype, "name", void 0);
__decorate([
    funDecorate
], Decorate.prototype, "say", null);
Decorate = __decorate([
    classDecorate
], Decorate);
let dec = new Decorate;
dec.name = 'ctc';
dec.say();
