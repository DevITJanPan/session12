// let arrInt=[[]];
// let row=3;
// let colum=3;
// for (let i = 0; i < row; i++) {
//     arrInt[i] = []; // Khai báo mảng con
//     for (let j = 0; j < colum; j++) {
//       arrInt[i][j] =Number(prompt("Nhập giá trị arrInt[" + i + "][" + j + "]: "));
//     }
//   }

//   // Sử dụng vòng lặp để in từng phần tử
// for (let i = 0; i < arrInt.length; i++) {
//     for (let j = 0; j < arrInt[i].length; j++) {
//       console.log("arrInt[" + i + "][" + j + "]: " + arrInt[i][j]);
//     }
//   }
//   // In phần tử trên hàng đầu tiên
// for (let j = 0; j < arrInt[0].length; j++) {
//     console.log("arrInt[0][" + j + "]: " + arrInt[0][j]);
//   }
  
//   // In phần tử trên cột cuối cùng
//   for (let i = 1; i < arrInt.length; i++) {
//     console.log("arrInt[" + i + "][" + (arrInt[i].length - 1) + "]: " + arrInt[i][arrInt[i].length - 1]);
//   }
  
//   // In phần tử trên hàng cuối cùng (trừ phần tử góc phải)
//   for (let j = arrInt[arrInt.length - 1].length - 2; j >= 0; j--) {
//     console.log("arrInt[" + (arrInt.length - 1) + "][" + j + "]: " + arrInt[arrInt.length - 1][j]);
//   }
  
//   // In phần tử trên cột đầu tiên (trừ phần tử góc trái và góc phải)
//   for (let i = arrInt.length - 2; i > 0; i--) {
//     console.log("arrInt[" + i + "][0]: " + arrInt[i][0]);
//   }



let numberOfRow = Number(prompt("Please input number of row"));
let numberOfColumn = Number(prompt("Please input number of column"));
// Create multi-direction array
// let arrayInt = new Array(numberOfRow);
// for (let i = 0; i < numberOfRow; i++) {
//   arrayInt[i] = new Array(numberOfColumn);
// }

let arrayInt = [];

for (let j = 0; j < numberOfColumn; j++) {
  arrayInt[j] = [];
}

// Input elements of array from keyboard
for (let i = 0; i < numberOfRow; i++) {
  for (let j = 0; j < numberOfColumn; j++) {
    arrayInt[i][j] = parseInt(
      prompt(
        "Please input elements of row " +
          (i + 1) +
          " and column " +
          (j + 1) +
          " :"
      )
    );
    // Print out array's elements in console log
    console.log(
      "Here is elements of " +
        (i + 1) +
        " row and " +
        (j + 1) +
        "column: " +
        arrayInt[i][j]
    );
    // console.log("Here is elements of row number 1 and column number 1" + arrayInt[i][0]);
  }
}
// Print out multi-direction array
console.log("Here is array arrInt:", arrayInt);

// Print elements on the edge of arrInt
for (let i = 0; i < numberOfRow; i++) {
  for (let j = 0; j < numberOfColumn; j++) {
    console.log(
      "Here is elements of row number 1 and column number 1: " + arrayInt[i][0]
    );
  }
}

// Print elements on diagonal of arrInt
for (let i = 0; i < numberOfRow; i++) {
  for (let j = 0; j < numberOfColumn; j++) {
    if (i == j) {
      console.log("Here is elements the diagonal of arrInt: " + arrayInt[i][j]);
    }
  }
}

// Print elements on secondary diagonal of arrInt
for (let i = 0; i < numberOfRow; i++) {
  console.log(
    "Here is elements the secondary diagonal of arrInt: " +
      arrayInt[i][numberOfRow - 1 - i]
  );
}

// Arrange elements in a row of arrInt in increasing order
for (let i = 0; i < numberOfColumn; i++) {
  arrayInt[i].sort((a, b) => (a > b ? -1 : 1));
}
console.log("Here is array which is sorted: " , arrayInt);