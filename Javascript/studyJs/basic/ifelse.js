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

console.log("=== if문 ===")
if (isNaN(age) == true) {
    console.log("숫자가 아닙니다. 숫자를 입력해주세요.");
}
else if (age <= 0 || isNaN(age)) {
    console.log("예외입니다.");
}
else if (age < 19) {
    console.log("성인이 아닙니다.");
}
else if (age >= 19 && age <= 50) {
    console.log("술을 마실 수 있는 나이입니다.");
}
else if (age > 50 && age <= 80) {
    console.log("음주 대신 운동을 하십시오.");
}
else {
    console.log("무엇이든 잘 될 것입니다.");
}