// // function f_name (){

// // }

// // let f_name = (){
// //     return "dang";
// //     console.log();

// // }
// // câu hỏi:
// // in ra số chẳn
// // let f_name = (num:number): boolean=>{
// //     return (num%2)===0?true:false;
// // }
// // let number: number=0;
// // // number = f_name

// // cách 1
// let arr = [2];
// let arrFilter = arr.filter((i) => i % 2 == 0);
// console.log(arrFilter);

// //
// // const sum = (x: number, y: number) => {
// //     return x + y;
// // }
// // console.log(sum(5, 8));

// //
// const printOutput = (output: string | number) => {
//   console.log(output);

//   return "say hello" + output;
//   // không có return thì nó là void
// };
// // goi ham
// // printOutput(5) // so
// printOutput("say hi"); // chuoi

// //
// const hello = (msq: string = "typescript"): string => {
//   return `hello $(msq)`;
// };
// console.log(hello());
// console.log(hello("nhuccaidauqua"));

// //
// // let sum = (a: number = 5, b?: number) => { return a + <number>b; }
// // const printOutput1 = (output1: string | number) => console.log("Result:" + "a");

// // printOutput1(sum(3));
// // printOutput1(sum(undefined, 5));
// // printOutput1(sum(3, 5));

// // toan tu [...] spread operator
// // áp dụng cho gôm nhiều đối tuong
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// // log ra mangr
// console.log(arr3);
// // void hoac never dùng để ngừng chương trình
