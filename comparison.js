// 비교연산자

let num1 = 10;
let num2 = 20;
let num3 = 10;

if (num1 == num2) {
  console.log("값이 같습니다.");
}else if (num1 === num3 || num2 < num3) {
  console.log("num1과 num3은 타입과 값이 모두 동일하거나 num2의 값이 num3보다 작습니다.");
}else{
  console.log("값이 다릅니다.");
}
