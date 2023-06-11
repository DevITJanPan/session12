
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = prompt("Nhập phần tử thứ " + (i + 1) + ":");
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// In ra các phần tử của mảng bằng vòng lặp for..in
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = prompt("Nhập phần tử thứ " + (i + 1) + ":");
// }
// for (let index in arr) {
//   console.log(arr[index]);
// }


// In ra các phần tử lẻ của mảng bằng vòng lặp for..of
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = prompt("Nhập phần tử thứ " + (i + 1) + ":");
// }
// for (let element of arr) {
//     if (element % 2 !== 0) {
//       console.log(element);
//     }
//   }


// In ra các phần tử từ cuối lên đầu bằng vòng lặp for
let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = prompt("Nhập phần tử thứ " + (i + 1) + ":");
}
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}



