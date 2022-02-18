/*

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
console.log("hello " + myName);

myName = "Hina"
console.log("hello " + myName);

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
console.log(something);
// undefined: 변수(variable)는 존재하는데 정의되지 않은 것

//------------------------------------------------------------------------------

// array : 하나의 variable 안에 데이터의 lisy를 가지는 것
const dayWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const nonsense = [1, 2, "hello", false, null, true, undefined]

// console.log(dayWeek, nonsense);
console.log(dayWeek);
console.log(dayWeek[4]); // friday

// add more day to the array
dayWeek.push("sun")
console.log(dayWeek);

*/

// const playerName = "Hina";
// const playerScore = 1300;
// const playerLogin = false;
// const playerFat = "little bit";

// player.name
// player.score
// player.login

// const player = ["Hina", 1300, false, "little bit"]

// 많은 variable을 만드는 방법보다 더 좋은 방법을 써야한다
// object
/*
const player = {
    name: "hina",
    score: 1000,
    fat: true,
};

console.log(player);
console.log(player.fat);

// const되어있는 player 자체를 업데이트 할 수는 없지만
// 그 안의 내용물은 업데이트 할 수 있다
player.fat = false;
console.log(player.fat);

// 원한다면 어떠한 property든 만들 수 있다
player.handSome = "Yes";
console.log(player);
*/

// HTML을 JS에서 가지고 올 수 있다
const title = document.getElementById("title");
// console.dir(title);
title.innerText = "Catch you!"

console.log(title.id);
console.log(title.className);