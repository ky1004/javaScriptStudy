// prompt는 사용자에게 창을 띄울 수 있게 해줌
const age = prompt("How old are you?");
console.log("inputValue : " + age, ", parseInt : " + parseInt(age));

console.log("isNaN : " + isNaN(age));


// typeof로 타입을 볼 수 있음
// 무엇을 입력해도 string 타입일 것이다
// console.log(typeof age);

console.log(typeof "15", typeof parseInt("15"));
// parseInt는 Integer형만 인식

/*
if (condition) {
    // condition === true
}
else {
    // condition === false
}
*/

if (isNaN(age) == true) {
    console.log("숫자가 아닙니다.");
}
else {
    console.log("숫자입니다.");
}