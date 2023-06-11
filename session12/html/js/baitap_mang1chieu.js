let arrInt = []

for (let i = 0; i < 5; i++) {
  let number = Number(prompt('Nhập phần tử thứ ' + (i + 1) + ':'))
  arrInt.push(number);
}
// console.log('Các phần tử là số chẵn trong mảng:')
// for (let i = 0; i < arrInt.length; i++) {
//   if (arrInt[i] % 2 === 0) {
//     console.log(arrInt[i])
//   }
// }

// Xóa phần tử ở cuối mảng
arrInt.pop();
console.log(arrInt);
// Thêm 2 phần tử có giá trị là 1,2 ở đẩu mảng (unshift)
// arrInt.unshift(6,7);
// console.log(arrInt);
// // Xóa phần tử đầu tiên của mảng (shift)
// arrInt.shift();
// console.log(arrInt);

