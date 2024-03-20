"use strict";
// // 1. Viết hàm (function và arrow function) tính tổng có giá trị trả về không dùng
// tham số
// // 1.1 function
// function total() {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = arr.reduce((total, i) => total + i);
//   return sum;
// }
// console.log(total());
// // 1.2 arrow function
// const total1 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = arr.reduce((total, i) => total + i);
//   return sum;
// };
// console.log(total1());
// // 2. Viết hàm arrow function tính tổng 2 số (có sử dụng default value, optional
// // parameter, rest parameter)
// const sum = (a = 0, b = 0, ...rest: number[]) => {
//   let total = a + b;
//   for (const num of rest) {
//     total += num;
//   }
//   return total;
// };
// console.log(sum(1, 2, 3, 4, 5));
// // 3. Thực hiện ví dụ merging array with spread operator
// const hobbies = ["Sports", "Cooking"];
// const activehobbies = ["Hiking"];
// activehobbies.push(hobbies[0]); // Đẩy mảng hobbies vào activehobbies
// activehobbies.push(hobbies[0], hobbies[1]); // Đẩy các phần tử của mảng hobbies vào activehobbies
// activehobbies.push(...hobbies); // Sử dụng spread operator để đẩy từng phần tử của hobbies vào activehobbies
// console.log(activehobbies);
