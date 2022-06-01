'use strict';
/* function declaration */
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}

log('Hello@');
log(1234);

/* function expression */

const print1 = function print1() {
    console.log("print");
    print1();
};
print(); //함수 리커전을 사용할때 주로 사용 call stack size exceed조심


/* anonymous function */
const print2 = function () {
    console.log('print');
}

/* IIFE */
(function hello() {
    console.log("IIFE");
})(); //크롬에서 안되는데