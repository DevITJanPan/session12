let arr = [];

while (true) {
  let input = prompt("Nhập giá trị của mảng:");

  // Kiểm tra giá trị nhập vào
  if (input === null || input === "Cancel" || isNaN(input)) {
    break; // Nếu giá trị không phải là số, chuỗi trống hoặc nhấn "Cancel", thoát khỏi vòng lặp
  }

  arr.push(Number(input)); // Chuyển đổi giá trị nhập vào thành số và thêm vào mảng
}

console.log(arr);
