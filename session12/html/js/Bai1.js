let arrString= new Array("Hai","ba", "bon", "nam");
console.log("Các phần tử có chỉ số lẻ");
for(let index=0; index<arrString.length; index++){
    if(index%2!=0){
        console.log(arrString[index]);
    }

}