"use strict";
// //1 Arrow function
// Tạo một arrow function đơn giản để nhân đôi một số.
// So sánh cách viết arrow function với function thông thường trong TypeScript.
/* 1.1. Dạng arrow function */
// const arr = [1, 2, 3, 4, 5];
// const arrMap = arr.map((i) => i * 2);
// console.log(arrMap);
/*  1.2. Dạng function */
var arr = [1, 2, 3, 4, 5];
var arrMap = arr.map(function (i) {
    return i * 2;
});
console.log(arrMap);
// 2. Function return
// Viết một hàm trả về tổng của hai số được truyền vào.
/* arrow function */
// const sum = (x: number, y: number) => {
//   return x + y;
// };
// console.log(sum(95, 8));
/* function */
// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(95, 8));
// Tạo một hàm trả về một chuỗi được đảo ngược.
var daoChuoi = function (str) {
    return str.split("").reverse().join(""); //channing ghép
};
console.log(daoChuoi("Easy code with me!"));
// Tạo một biến có kiểu là một hàm và gán một hàm cộng hai số vào đó.
function addnumBer(a, b) {
    return a + b;
}
console.log(addnumBer(10, 5));
// 4. Function with parameters
// Viết một hàm có tham số để tính tổng của một mảng các số.
function total(numbers) {
    return numbers.reduce(function (total, i) { return total + i; }, 0);
}
var array = [1, 2, 3, 4, 5];
var sumOfArray = total(array);
console.log("Tổng của mảng là:", sumOfArray);
// Tạo một hàm có thể nhận vào một số không xác định các tham số và tính tổng của chúng.
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
// Sử dụng hàm để tính tổng của các số
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// 5. Default parameter
// Tạo một hàm có một tham số mặc định và trả về bình phương của tham số đó.
// const square = (x: number) => x * x;
// console.log(square(10));
// // Sử dụng giá trị mặc định cho một tham số trong hàm tính tổng của hai số.
// const sum = (a: number, b: number = 0): number => {
//   return a + b;
// };
// console.log(sum(5, 3));
// 6. Optional parameter
// Viết một hàm có một tham số tùy chọn và trả về giá trị của tham số
// đó nếu được cung cấp, ngược lại trả về giá trị mặc định.
// let sum = (a: number = 5, b?: number) => {
//   return a + (b !== undefined ? b : 0);
// };
// const printOutput1 = (output1: string | number) =>
//   console.log("Result:", output1);
// printOutput1(sum(3));
// printOutput1(sum(undefined, 5));
// printOutput1(sum(3, 5));
// 7. Spread operators
// [...] -> spread operator
// Sử dụng toán tử spread để truyền một mảng các số vào một hàm tính tổng.
// Tạo một hàm nhận một số lượng biến đối số không xác định và trả về tổng của chúng.
// 8.Rest parameter
// Viết một hàm nhận một số lượng biến đối số không xác định, sau đó tính tổng của chúng.
// 9. Function & void
// Tạo một hàm không trả về giá trị nào (void) nhưng in ra một thông báo ra console.
// Viết một hàm không nhận bất kỳ tham số nào và không trả về giá trị.
// 10. Never & void
// So sánh sự khác nhau giữa never và void trong TypeScript.
// Tạo một hàm không bao giờ hoàn thành (never) và một hàm không trả về giá trị nào (void).
