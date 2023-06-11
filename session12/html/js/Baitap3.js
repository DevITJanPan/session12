let styles = ['Jazz', 'Blues'];
console.log(styles);
// Thêm phần tử “Rock-n-Roll” vào cuối mảng
styles.push('Rock-n-Roll');
console.log(styles);
// Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng 
// có tổng số phần tử là lẻ
if (styles.length % 2 === 1) {
  let index = Math.floor(styles.length / 2);
  styles[index] = 'Classics';
}
console.log(styles);

// Xóa phần tử đầu tiên của mảng và hiển thị mảng
styles.shift();
console.log(styles);
// Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
styles.unshift("Rap", "Reggae");
console.log(styles);
