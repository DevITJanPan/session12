// Khai báo và khởi tạo mảng 1 chiều
let arr = [];

// Nhập vào hai số nguyên a và b
let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));

// Kiểm tra và chỉnh lại giá trị a và b nếu a > b
if (a > b) {
  let number = a;
  a = b;
  b = number;
}

// Khởi tạo mảng gồm các phần tử từ a đến b
for (let i = a; i <= b; i++) {
  arr.push(i);
}

console.log(arr);
