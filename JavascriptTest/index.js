// 사용자 정의 함수
/*

function 함수명(파라미터 변수들){
    처리할 내용들;
    return 반환값;
}
var 함수명 = function(파라미터 변수들){
    처리할 내용들;
    return 반환값;
}

*/

/* 파라미터가 없고 반환값도 없는 함수의 호출방법 */
function hi(){
    document.write("hi<br>");
}
hi();
hi();

/* 파라미터변수가 있고 반환값 없는 함수의 호출방법 */
function hi2(name){
    document.write(name+"님 안녕하세요.<br>");
}
var pname = "고길동";
hi2(pname);
hi2("둘리");

/* 파라미터가 없고 반환값은 있는 함수의 호출방법 */
function hi3(){
    var str = "hello";
    return str;
}
var temp = hi3();
document.write("반환값 : "+temp+"<br>");
document.write("반환값2 : "+hi3()+"<br>");

/* 파라미터가 있고 반환값도 있는 함수의 호출방법 */
function hi4(car){
    document.write("당신의 차량은 "+car+" 입니다.<br>")
    return car;
}
var carname = "페라리";
hi4(carname);