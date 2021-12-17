// alert("hi");

// variable을 만들기 위해서는 가장 먼저 const라는 걸 사용
// const는 상수이며 바뀌지 않는 값
const a = 5;
const b = 2;

let myName = "hina";


// 변수명 작성 스타일 타입에는 2가지가 있음
// veryLongValueName - camelCase(낙타 등 모양), 자바스크립트 유형
// very_long_value_name - snake_case(뱀 모양), 파이썬 유형
// 파이썬은 const필요없음

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello "+myName);

myName = "Hina"
console.log("hello "+myName);

// const와 let의 차이
// const는 값이 바뀔 수 없다는 것
// let은 값을 업데이트 할 수 있음
// default는 보통 const를 기본적으로 사용

// 자바스크립트 초기에는 var를 썼다고 함
// var는 언어를 통한 보호를 받지 못함
// 실수로 a값을 업데이트 해도 언어가 믿어주지 않음
// 그래서 const와 let이 나옴
// 규칙이 없는 var와 다르게 const와 let으로 명확한 규칙을 정의할 수 있음

//------------------------------------------------------------------------------


// boolean은 사용자가 로그인 했는지 안했는지 구분할 때 좋음
// true, false, null(아무것도 없음), undefined(정의되지 않음)
const amIFat = true;
let something;

console.log(amIFat);
console.log(something); // undefined: 변수(variable)는 존재하는데 정의되지 않은 것

//------------------------------------------------------------------------------

