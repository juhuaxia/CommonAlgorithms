/**
 * 不借助第三个变量，使得2个数值交换
 * a=1,b=5  ==> a=5 b=1
 */

 function change(num1,num2){
     num1 = num2 - num1;
     num2 = num2 - num1;
     num1 = num1 + num2;

     return [num1,num2];
 }

 console.log(change(1,5));