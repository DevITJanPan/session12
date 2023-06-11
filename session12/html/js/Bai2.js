let arr = []
for (let i = 0; i < 5; i++) {
  arr[i] = Number(prompt(`Nhập vào một số thứ ${i + 1})`));
}
console.log('Các phần tử trong mảng là:')
for (let j = arr.length - 1; j >= 0; j--) {
  console.log(arr[j])
}

// let arr =[];
// for( let index=0; index<5;index++){
//     arr[index] = Number(prompt("Nhập vào một số thứ" +(index + 1)));
// }
// console.log("Các phần tử trong mảng là: ");
// for(let index=arr.length-1; index>=0; index--){
//     console.log(arr[index]);
// }
