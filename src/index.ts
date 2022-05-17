// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hi';
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 'hello', true];

// Tuple
let person: [number, string, boolean] = [1, 'Ramil', true];
// Tuple Array
let people: [number, string][] = [
  [1, 'Jet'],
  [2, 'Ramil'],
];

// Union
let _id: number | string;

_id = 2;
_id = '2';

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function AddNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  //optional
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => {
  return x + y;
};

const sub: MathFunc = (x, y) => {
  return x - y;
};

// Classes

// class Person {
//   // accessible only within the class
//   private id: number;
//   // accessible only within the class and its subclasses
//   protected age: number;
//   name: string;

//   constructor(id: number, age: number, name: string) {
//     this.id = id;
//     this.age = age;
//     this.name = name;
//   }

//   register() {
//     return `${this.name} is now registered`;
//   }
// }

interface PersonInterface {
  id: number;
  name: string;
  age: number;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  age: number;
  name: string;

  constructor(id: number, age: number, name: string) {
    this.id = id;
    this.age = age;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

class Employee extends Person {
  position: string;

  constructor(id: number, age: number, name: string, position: string) {
    super(id, age, name);
    this.position = position;
  }
}

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
