// javascript 내장함수
// javascript가 자체적으로 제공해주는 함수

// eval(수식문자열)
// 문자열을 변수나 함수 등으로 변환하여 주는 함수
var a = "(24*3-30)/4";
var b = eval(a);

document.write("a = " + a + "<br>")
document.write("b = " + b + "<br>");

var c = eval("b+33");
document.write("c = " + c + "<br>");

var d = eval("document");
d.write(d);


/* parseInt(문자열,진수), parseFloat(문자열), Number(문자열) */
// 문자열을 숫자로 반환하는 함수들
/*
parseInt : 문자열을 정수형으로 변환, 진수는 10,2,8,16 중 하나를 사용하고 기본값은 10
parseFloat : 문자열을 실수형으로 변환
Number : 문자열을 숫자형으로 변환
*/

parseInt(123,45)   // 123
parseInt("123,45") // 123
parseInt("123a45") // 123
parseInt("a12345") // NaN

parseInt("1011",2) // 11
parseInt("128",8) // 10
parseInt("4b",16) // 75

parseFloat("123.45") // 123.45
parseFloat("123.34a34") // 123.34
parseFloat("1.23e4") // 123*10^4 (12300)
parseFloat("123.45") // NaN

Number("123") // 123
Number("123.45") // 123.45
Number("1.23e3") // 123*10^3 (1230)
Number("123a45") // NaN

/* isFinite(value), isNaN(value) */
/*
isFinite(value) : 값을 숫자형으로 변환할 수 있으면 True, 아니면 False
isNaN(value) : 값을 숫자형으로 변환할 수 없으면 True, 아니면 False
*/

/* escape(문자열), unescape("%16진수코드값"), encodeURI(uri), decodeURI(encodedURI), encodeURIComponent(uriComponent), decodeURIComponent(encodedURI) */
/*
 [ escape(문자열) ]
 - 문자열의 각 문자들을 '%16진수코드값' 형태로 변환
 - 영문 알파벳과, 숫자, 일부 특수문자(@, *, -, _, +, ., /)를 제외 문자만  인코딩
 - 1바이트 문자는 '%XX' 형태로 표시
 - 한글, 한자등(2바이트)은 '%u16진수4자리'로 표시
 - 한글이 깨지는 것을 방지하기 위하여 사용

 [ unescape("%16진수코드값") ]
 - 코드값에 맞는 문자로 변환 (escape 로 변환된 코드값만 문자로 변환)

 [ encodeURI(uri) ]
 - 인터넷 주소에 사용되는 일부 특수문자(:, ;, /, =, ?, & 등)를 제외 문자만 인코딩
 - 보통 인터넷 주소 전체(파라미터 전체)를 인코딩할 때 사용

 [ decodeURI(encodedURI) ]
 - encodeURI 로 변환(인코딩)한 값을 다시 원래대로 변환(디코딩)

 [ encodeURIComponent(uriComponent) ]
 - encodeURI이 제외한 일부 특수문자까지도 인코딩
 - url 전체가 파라미터로 전송될 경우 사용가능

 [ decodeURIComponent(encodedURI) ]
 - encodeURIComponent 로 변환(인코딩)한 값을 다시 원래대로 변환(디코딩)

 페이지의 charset이 다를 경우 한글이 깨지는 경우가 많음 --> escape를 이용하여 한글 변환사용(encodeURI도 무관)
 url파라미터 전체를 변환할 경우 --> encodeURI 사용권장
 url자체가 파라미터로 들어가게 된다면 encodeURIComponent 사용
*/