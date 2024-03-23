// bai1
// định nghĩa hàm interface
interface AddFn {
  (a: number, b: number): number;
}
// gán hàm cho biến
let add: AddFn;
//triển khai hàm
add = (n1: number, n2: number) => {
  return n1 + n2;
};
// Trong phần này, một hàm được triển khai và gán cho biến add.
// Hàm này nhận hai tham số số nguyên (n1 và n2) và trả về tổng của chúng.
// Điều quan trọng là hàm này phải tuân thủ theo kiểu dữ liệu được định nghĩa trong interface AddFn,
// nghĩa là nhận hai tham số số nguyên và trả về một số nguyên.
