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