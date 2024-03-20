"use strict";
// // 1. Function & void
// let sum = (x: number = 5, y?: number): number => {
//   return x + (y ?? 0); // Thay vì dùng <number>y, ta sử dụng y ?? 0 để xử lý trường hợp y không được truyền vào
// };
// let speech = (output: any): void => {
//   // Không cần định nghĩa kiểu trả về của speech là void
//   console.log("Result:" + output);
// };
// speech(sum(5, 12)); // Gọi hàm speech với kết quả từ hàm sum
// console.log(speech(sum(8, 5))); // Hàm speech không trả về giá trị, nên không cần console.log ở đây
// // 2. Never & void
// let something: void = undefined;
// let nothing: never = null; // Error: Type 'null' is not assignable to type 'never"
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// // Chạy hàm throwError
// try {
//   throwError("Thông báo lỗi");
// } catch (error) {
//   console.error("Caught an error:", error.message);
// }
// 3. Function & callback
function AddandHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
AddandHandle(10, 20, function (result) {
    console.log(result);
});
