// Khai báo mảng một chiều
let arrayInt = [];

// Nhập 5 giá trị số nguyên từ bàn phím
for (let i = 0; i < 5; i++) {
  let value = Number(prompt("Nhập giá trị số nguyên thứ " + (i + 1) + ":"));
  arrayInt.push(value);
}
console.log("Các phần tử của mảng:");
for (let i = 0; i < arrayInt.length; i++) {
    console.log(arrayInt[i]);
  }
// In các phần tử có giá trị chẵn và tính tổng
console.log("Các phần tử có giá trị chẵn:");
let sum = 0;
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] % 2 === 0) {
    console.log(arrayInt[i]);
   sum += arrayInt[i];
  }
}
console.log("Tổng các phần tử có giá trị chẵn: " + sum);

 // In các phần tử có chỉ số lẻ và tính tổng
console.log("Các phần tử có chỉ số lẻ:");
let Sum = 0;
for (let i = 1; i < arrayInt.length; i += 2) {
  console.log(arrayInt[i]);
 Sum += arrayInt[i];
}
console.log("Tổng các phần tử có chỉ số lẻ: " + Sum);

// In giá trị các phần tử trong mảng là số nguyên tố
console.log("Các phần tử là số nguyên tố:");
for (let i = 0; i < arrayInt.length; i++) {
  let checkPrime = true;
  if (arrayInt[i] <= 1) {
    checkPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(arrayInt[i]); j++) {
      if (arrayInt[i] % j === 0) {
        checkPrime = false;
        break;
      }
    }
  }
  if (checkPrime) {
    console.log(arrayInt[i]);
  }
}

// In các phần tử có giá trị là max hoặc min
console.log("Các phần tử có giá trị là max hoặc min:");
let max = Math.max(...arrayInt);
let min = Math.min(...arrayInt);
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] === max || arrayInt[i] === min) {
    console.log(arrayInt[i]);
  }
}

// Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp 
// xếp (không và có sử dụng hàm sort)

console.log("Sắp xếp mảng theo thứ tự giảm dần là:");
let medial;
for (let i = 0; i < arrayInt.length - 1; i++) {
  for (let j = i + 1; j < arrayInt.length; j++) {
    if (arrayInt[i] < arrayInt[j]) {
      medial = arrayInt[i];
      arrayInt[i] = arrayInt[j];
      arrayInt[j] = medial;
    }
  }
}
console.log(arrayInt);
console.log("Sắp xếp mảng theo thứ tự giảm dần (sử dụng hàm sort)là:");
arrayInt.sort((a, b) => b - a);
console.log(arrayInt);


// Khai báo mảng một chiều
let arrayInt = []; 
let inputNumber = Number(prompt("Nhập vào một số nguyên:"));
let count = 0;
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] === inputNumber) {
    count++;
  }
}
console.log("Số lượng phần tử có giá trị " + inputNumber + " là: " + count);
