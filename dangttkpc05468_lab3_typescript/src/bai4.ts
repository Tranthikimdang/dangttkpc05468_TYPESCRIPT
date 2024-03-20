// //1 Arrow function
// Tạo một arrow function đơn giản để nhân đôi một số.
// So sánh cách viết arrow function với function thông thường trong TypeScript.

/* 1.1. Dạng arrow function */
// const arr = [1, 2, 3, 4, 5];
// const arrMap = arr.map((i) => i * 2);
// console.log(arrMap);

/*  1.2. Dạng function */
let arr = [1, 2, 3, 4, 5];
let arrMap = arr.map(function (i) {
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
const daoChuoi = (str: string) => {
  return str.split("").reverse().join(""); //channing ghép
};
console.log(daoChuoi("Easy code with me!"));

// 3. Function as types
// Định nghĩa một loại dữ liệu (type) cho một hàm có thể nhận vào hai số và trả về một số.
type numBer = (a: number, b: number) => number;
// Tạo một biến có kiểu là một hàm và gán một hàm cộng hai số vào đó.
function addnumBer(a: number, b: number): number {
  return a + b;
}
console.log(addnumBer(10, 5));

// 4. Function with parameters
// Viết một hàm có tham số để tính tổng của một mảng các số.

function total(numbers: number[]): number {
  return numbers.reduce((total, i) => total + i, 0);
}

const array = [1, 2, 3, 4, 5];
const sumOfArray = total(array);
console.log("Tổng của mảng là:", sumOfArray);

// Tạo một hàm có thể nhận vào một số không xác định các tham số và tính tổng của chúng.

// function sum(...numbers: number[]) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

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
// Hàm tính tổng các số trong một mảng
function tinhTong(...so: number[]) {
  let tong = 0;
  for (let i = 0; i < so.length; i++) {
    tong += so[i];
  }
  return tong;
}

let mangSo = [1, 2, 3, 4, 5];
let ketQua = tinhTong(...mangSo); // Truyền mảng các số vào hàm tính tổng bằng cách sử dụng toán tử spread
console.log("Tổng các số trong mảng là: " + ketQua);

// Tạo một hàm nhận một số lượng biến đối số không xác định và trả về tổng của chúng.

function Total(...so: number[]) {
  let tong = 0;
  for (let i = 0; i < so.length; i++) {
    tong += so[i];
  }
  return tong;
}
console.log(Total(1, 2, 3, 4, 5));

// 8.Rest parameter
// Viết một hàm nhận một số lượng biến đối số không xác định, sau đó tính tổng của chúng.

// function tinhTong(...so: number[]) {
//   return so.reduce((tong, soHienTai) => tong + soHienTai, 0);
// }
// console.log(tinhTong(1, 2, 3, 4, 5));
// console.log(tinhTong(10, 20, 30));
// console.log(tinhTong(2, 4, 6, 8, 10, 12));

// 9. Function & void
// Tạo một hàm không trả về giá trị nào (void) nhưng in ra một thông báo ra console.
function inThongBao() {
  console.log("Đây là một thông báo.");
}

// Gọi hàm inThongBao
inThongBao(); // Kết quả: Đây là một thông báo.

// Viết một hàm không nhận bất kỳ tham số nào và không trả về giá trị.

function thongBao() {
  console.log("Hàm không nhận tham số và không trả về giá trị.");
}

// Gọi hàm thongBao
thongBao(); // Kết quả: Hàm không nhận tham số và không trả về giá trị.

// 10. Never & void
// So sánh sự khác nhau giữa never và void trong TypeScript.

/* void */
function sayHello(): void {
  console.log("Hello!");
}
// void được sử dụng khi không có dữ liệu
/* never */
// function throwError(message: string): never {
//   throw new Error(message);
// }

// function infiniteLoop(): never {
//   while (true) {
//     // tiếp tục
//   }
// }
// never được sử dụng khi một hàm không bao giờ kết thúc hoặc luôn ném ra một ngoại lệ.

// 10.2 Tạo một hàm không bao giờ hoàn thành (never) và một hàm không trả về giá trị nào (void).

let something: void;
let nothing: never;

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

nothing = throwError("Thông báo lỗi"); // Gán một hàm không bao giờ hoàn thành cho biến kiểu never
