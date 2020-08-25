var num = [10,20,30,40,50];
var sum = 0;
/*자바스크립트는 데이터타입을 명시X
자바는 데이터타입 명시O
*/
for(var i = 0; i < num.length; i++){
  sum += num[i];
}
console.log(sum);
