// 선언된 함수를 호출하여 사용하기
f1();

// JS의 고전적인 함수 선언 방법
function f1() {
  console.log("나는 f1입니당");
}

//--------------------------------------

// 2세대 방식은 반드시 사용(호출)하기 전에 먼전 선언이 되어야 한다.
//f2();

// 2세대 함수 선언 방법
const f2 = function () {
  console.log("나는 f2입니당");
};

f2();

//--------------------------------------

// return값이 있는 함수
const f3 = function () {
  return 5 + 25;
};

console.log(f3()); // 30

//--------------------------------------

const f4 = function (num1, num2) {
  return num1 + num2;
};

console.log(f4(7, 18)); // 25
console.log(f4()); // NaN

//--------------------------------------

// 신세대 화살표 함수. function키워드 사라짐.
const f5 = () => {
  console.log("나는 f5입니당");
};

f5();

//--------------------------------------

const f6 = () => {
  return 90 + 48;
};

console.log(f6()); // 138

//--------------------------------------

const f7 = () => 1991 + 1209;

//--------------------------------------

const f8 = (arg) => arg * arg; // 매개변수가 1개만 있을땐  괄호() 생략가능

/* 화살표 함수
functiion 키워드를 제외하고 선언
함수이름 = (매개변수)=> {함수본체}

매개변수가 없을 때
함수이름 = ()=>{ 함수본체 }

매개변수가 1개만 있을 때
함수이름 = 매개변수 =>{함수본체}

매개변수가 2개 이상일 때
함수이름 = (매개1,매개2)=>{함수본체}

함수본체에 단지 return문만 필요로 할 때
함수이름 =() => 리턴값(리턴식)
함수이름 = 매개변수 => 리턴값(리턴식)

단, 함수본체에 다른 연산식들이 필요할 경우는 함수본체를 {}로 묶어야한다
함수이름=(매개1,매개2)=>{
    const 합계 = 매개1+매개2
    return 함계
}
*/
