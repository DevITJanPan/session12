var n = Number(prompt('Nhập vào số dòng n:'));
var m = Number(prompt('Nhập vào số cột m:'));
var arr = new Array(n);
for (var i = 0; i < n; i++) {
  arr[i] = new Array(m);
}
for (var i = 0; i < n; i++) {
  for (var j = 0; j < m; j++) {
    arr[i][j] = parseInt(prompt('Nhập phần tử tại dòng ' + (i + 1) + ', cột ' + (j + 1) + ':'));
  }
}
var max = arr[0][0];
var min = arr[0][0];

for (var i = 0; i < n; i++) {
  for (var j = 0; j < m; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
    }
    if (arr[i][j] < min) {
      min = arr[i][j];
    }
  }
}
console.log('Giá trị lớn nhất: ' + max);
console.log('Giá trị nhỏ nhất: ' + min);
