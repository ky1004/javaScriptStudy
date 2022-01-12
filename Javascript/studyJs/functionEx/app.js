// function이 없으면
/*
console.log("안녕 내 이름은 hina야");
console.log("안녕 내 이름은 동수야");
console.log("안녕 내 이름은 민정이야");
console.log("안녕 내 이름은 프로우야");
*/

// 중복되는 반복 작업을 최소화 하기 위해 function 사용
// 첫번째 argument로 어떤 데이터가 들어오면 nameOfperson이라는 이름을 쓰게 된다는 것
// argument는 여러개 받을 수도 있다
function hello(nameOfperson, age) {
    console.log("Hello my name is " + nameOfperson + " and I'm " + age);
}

// 우리가 데이터를 function에 보내는 방법
hello("Hina", 29);
hello("Mongsi", 17);
hello("Dungju", 35);

function plus(a, b) {
    console.log(a + b);
}

plus(5, 4);


const player = {
    name: "Hina desti",
    hello: function (otherPersonsName) {
        console.log("Hello! " + otherPersonsName + ". nice to meet you");
    },
}

console.log(player.name);
player.hello("Mongsi");


// const는 업데이트를 못하게 한다
// let은 variable업데이트 가능
// var는 사용하지 말아야 한다(오래된 자바스크립트)
// 항상 const, 가끔 let
let FatReal = true;
FatReal = false;

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);

const otherplayer = {
    name: "lemon",
    age: 38,
}
console.log(otherplayer);
otherplayer.name = "reon";
console.log(otherplayer);
otherplayer.strong = "true";
console.log(otherplayer);

function add(potato, kimchi) {
    console.log(potato + kimchi);
}
add(10, 15);
add(1.3, 3800);
add(98, 3.2);

const calculator = {
    add: function (a, b) {
        return (a + b);
    },
    sub: function (a, b) {
        return (a - b);
    },
    mul: function (a, b) {
        return (a * b);
    },
    div: function (a, b) {
        return (a / b);
    },
};

const resultValue = calculator.add(4, 3);
console.log("더한 값 : " + resultValue);