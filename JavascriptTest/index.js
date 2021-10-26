// prompt:변수 = prompt("text","초기값");
// confirm:변수 = confirm("text");
// alert : alert("text");

// prompt
var str = prompt("prompt 텍스트","텍스트를 입력하세요");
document.write("prompt 텍스트 입력한 값 : "+str+"<br>");

// confirm
var str2 = confirm("종료하시겠습니까?");
document.write("confirm 결과 값(True&False) : "+str2+"<br>");

// alert
alert("Hello JavaScript");


document.write("-----------------------------------------------------------------<br>");
// date
/*
getYear() : 현재 년도
getMonth() : 현재 월 (월은 0부터 11까지 표현됨으로 +1해서 사용하는것이 보통임)
getDate() : 현재 일
getDay() : 해당 날짜가 월~일 요일중 어떤 요일인지 1~7로 return 해주는 함수, 월요일:1, 일요일:7
getHours() : 현재 시간
getMinutes() : 현재 분
getSeconds() : 현재 초
*/
var today = new Date(); // 날짜 객체 생성
year = today.getFullYear(); // 년도
month = today.getMonth()+1; // 월
day = today.getDate(); // 일
document.write("오늘날짜 : " + year + "년 " + month + "월 " + day + "일 " + "<p>");

var date1 = new Date(); // 오늘 날짜를 세팅한다
// var year = date1.getYear(); getYear함수는 웹 표준에서 제거(Deprecated)되었다
var fullYear = date1.getFullYear();
var month = date1.getMonth()+1;
var date = date1.getDate();
var day = date1.getDay();
var hour = date1.getHours();
var min = date1.getMinutes();
var sec = date1.getSeconds();

document.write("date.getYear() : " + year + "<p>");
document.write("date.getFullYear() : " + fullYear + "<p>");
document.write("date.getMonth() : " + month + "<p>");
document.write("date.getDate() : " + date + "<p>");
document.write("date.getDay() : " + day + "<p>");
document.write("date.getHours() : " + hour + "<p>");
document.write("date.getMinutes() : " + min + "<p>");
document.write("date.getSeconds() : " + sec + "<p>");
