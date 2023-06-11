let arrInt=[];
let index=0;
do{
let number = Number(prompt("Nhập các giá trị từ bàn phím"));
if (number>=0){
    arrInt[index]=number;
}else{
    break;

}
index++;
}while(true);
console.log("cac phan tu chia het cho 3 va 5");
for(let index=0; index<arrInt.length; index++){
    if(arrInt[index]%3==0 &&arrInt[index]%5==0){
        console.log(arrNumber[index]);
    }
}
console.log("cac phan tu la nguyen to trong mang la:");
for(let index=0;index<arrInt.length; index++){
    let checkPrime=true;
    if(arrInt[index]>=2){
        for(let i=2; i<=Math.sqrt(arrInt[index]);i++){
            if(arrInt[index]%i==0){
                checkPrime=false;
                break;
            }
    }
    if(checkPrime){
        console.log(arrInt[index]);
    }

    }
}
