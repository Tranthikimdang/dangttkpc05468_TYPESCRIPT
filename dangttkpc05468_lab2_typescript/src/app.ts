//Câu 1.1: Sử dụng number, string, boolean
// let number1: number = 5;
// let number2: number = 2.8;
// let phrase: string = 'Result is ';
// let permit: boolean = true;

// const result: number = number1 + number2;
// if (permit) {
//     console.log(phrase + result);
// }
// else {
//     console.log('fall');

// }


// Câu 1.2: Type inference
// function add(x = 5) {

//     let phrase = 'Result is ';

//     phrase = 10;

//     x = '2.8';

//     return phrase + x;
// }
// let result: number = add(10);


//Câu 1.3: Object
// const student: object = {
//     name: "Typescript",
//     age: 11
// } as const;
// console.log(student);

// // Bài2.1: Array, tuple, any, enum
// // Sửa cú pháp enum
// enum Role { ADMIN, READ_ONLY, AUTHOR }

// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: Role, // Fix the type to Role
//     roletuple: [number, string]
// } = {
//     name: 'Typescript',
//     age: 11,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN, // Fix enum usage
//     roletuple: [2, 'author']
// };

// let favouriteActivites: any[];
// favouriteActivites = [5, 'Sports', true];

// if (person.role === Role.AUTHOR) {
//     console.log('is author');
// }

// // Fix tuple modifications
// person.roletuple = [0, 'admin']; // OK
// person.roletuple = [1, 'user']; // OK

// Câu 2.2: Literal type & custom type
// enum Role { ADMIN, READ_ONLY, AUTHOR }

// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: Role, // Fix the type to Role
//     roletuple: [number, string]
// } = {
//     name: 'Typescript',
//     age: 11,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN, // Fix enum usage
//     roletuple: [2, 'author']
// };

// let favouriteActivities: any[]; // Fixed typo in variable name
// favouriteActivities = [5, 'Sports', true];

// if (person.role === Role.AUTHOR) {
//     console.log('is author');
// }

// Fix tuple modifications
// person.roletuple.push('admin'); // Error: Tuple has a fixed length
// person.roletuple[1] = 10; // Error: Tuple has a fixed length
// person.roletuple = [0, 'admin', 'user']; // Error: Tuple has a fixed length

// Instead, you can do the following:
// person.roletuple = [0, 'admin']; // OK
// person.roletuple = [1, 'user']; // OK

// Câu 2.3:  Num & undefined
// Biến được khai báo và gán giá trị null
// var a = null;
// console.log(a);
// console.log(typeof (a));

// // Khai báo biến mà không gán giá trị nào cho nó
// var b;
// console.log(b);
// console.log(typeof (b));

// // Gặp lỗi khi sử dụng biến chưa được khai báo
// // console.log(undeclaredVar);

// Câu 2.4: Unknown & any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Typescript';

// Kiểm tra kiểu trước khi gán giá trị từ unknown sang string
if (typeof userInput === 'string') {
    userName = userInput;
} else {
    console.log('Invalid input type!');
}

