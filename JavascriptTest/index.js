/* if문 */
var count = 1;
if(count==0){
    alert('if : ' + count);
}else if(count==1){
    alert('else if : ' + count);
}else{
    alert('else : ' + count);
}

/* case문 */
var num = prompt("숫자를 입력하세요.","");
switch(num){
    case "1": alert("One");
        break;
    case "2": alert("Two");
        break;
    case "3": alert("Three");
        break;
    case "4": alert("Four");
        break;
    case "5": alert("Five");
        break;
    default : alert("I don't know")
}

/* for문 */
var sum = 0;
for( var a=1; a<=100; a=a*2){
    sum+=a;
}
document.write("for문 합계 : " + sum + "<br>");

/* while문 */
var pls = 2;
while(pls==9){
    document.write(pls+"<br>");
    pls+=1;
}
document.write("while문 합계 : "+pls+"<br>");

/* do while문 */
var pls2 = 2;
do{
    document.write(pls2+"<br>");
    pls2+=1;
}while(pls2==9)
document.write("while문 합계 : "+pls2+"<br>");


/* break, continue */
// var sum=0, sum2=0, sum3=0;
// for(var i=1; i<=100; i++){
//     if(i%2!=0){
//         continue;
//     }
//     sum += i;
// }
// document.write("짝수의 합은 : " + sum + "<br><br>");

// for(var y=1; y<=100; y++){
//     sum2 += y;
//     if(sum2>=2000){
//         document.write("sum2 변수가 2000이상이 되는 순간 : " + sum2 + "<br><br>");
//         break;
//     }
// }

// var k = 0;
// for(; ;){
//     k=prompt("값 입력","");
//     k*=1;
//     sum3+=k;
//     if(k=0){
//         break;
//     }
//     document.write("누적 값 : " +sum3);
// }