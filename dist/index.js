"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hi';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'hello', true];
// Tuple
let person = [1, 'Ramil', true];
// Tuple Array
let people = [
    [1, 'Jet'],
    [2, 'Ramil'],
];
// Union
let _id;
_id = 2;
_id = '2';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function AddNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, age, name) {
        this.id = id;
        this.age = age;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    constructor(id, age, name, position) {
        super(id, age, name);
        this.position = position;
    }
}
// Generics
function getArray(items) {
    return new Array().concat(items);
}
