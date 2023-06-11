// let arr=[];
// for(let index; index<=5; index++);
// arr[index]=Number(prompt("Nhập vào 1 số:"+(index+1)));
// console.log("cac phan tu trong mang la:");
// for(let index=arr.length-1; index--){
//   console.log(arr[index]);
// }
  

// arrRa=[];
// arrRa[0]=1;
// arrRa[1]=3;
// console.log("cac phan trong mang la:");
// for(let index=0; index<arrRa.length; index+){
//     console.log(arrRa[index]);
// }



let arrStudent=[];
arrStudent[0]=prompt("Nhập mã sinh viên là:");
arrStudent[1]=prompt("Nhập tên sinh viên là:");
arrStudent[2]=prompt("Nhập tuổi sinh viên là:");
arrStudent[3]=prompt("Nhập giới tính sinh viên:");
arrStudent[4]=prompt("Nhập địa chỉ sinh viên:");
console.log("Thông tin của sinh sinh viên gồm mã sinh viên, tên sinh viên , tuổi sinh viên, giới tính sinh viên, địa chỉ sinh viên:");
for(let index=0; index < arrStudent.length; index++){
    console.log(arrStudent[index]);
}
