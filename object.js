'use strict';

/* Literals and properties */
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true; //가능하면 동적으로 추가를 지양해야함 
console.log(ellie.hasJob); //유지보수 힘듦

delete ellie.hasJob;
console.log(ellie.hasJob); 


/* Computed properties */
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) { //.으로 하면 undefined key라는 property를 찾음
    console.log(obj[key]);
}
printValue(ellie, 'name');


/* Property value shorthand */

const person1 = {name : 'bob1', age: 2 };
const person2 = {name : 'bob2', age: 2 };
const person3 = {name : 'bob3', age: 2 };
const person4 = {name : 'bob4', age: 2 };

console.log(person4);

function Person1(name, age) {
    return {
        name,
        age,
    }
}

const person5 = new Person1('james', 5);

console.log(person5);


/* Constructor function */

function Person2(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}

const person6 = new Person2('james2', 5);

console.log(person6);


//for in은 객체
//for of는 배열

/* Fun cloning */
const user = {name : "ellie", age: '20'}
const user2 = user;
user2.name = 'coder';
//console.clear(); 로그지우기
console.log(user);

//위와 같이하면 코드가 바뀌어버림
//원래는 for in으로 돌리는데 요즘은 아래와같이 함

const user3 = Object.assign({}, user);


const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);