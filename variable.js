'use strict';
/*let */
let globalName = 'haha';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

/* const */
// const
// 1. 보안성
// 2. 쓰레드관리
// 3. 휴먼에러방지
const daysInWeek = 7;



/* symbol */

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1 }`)



/* object */
const object = {name: "HashCha", age: 23 };
let object2 = {name: "HashCha", age: 23 };

object.name = "aa";
console.log(object.name);

object2.name = "aa";
console.log(object2.name);