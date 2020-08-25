let args = process.argv;

console.log(args[2]);

if (args[2] === '1') {
  console.log('Success!');
}else{
  console.log('fail..ㅠㅠ');
}
/*
process.argv
이 속성은 명령줄에서 실행할 때 프로세스에 전달된 인수가 포함된 배열을
반환.
첫번째 요소는 프로세스 실행경로이고 두번째 요소는 js 파일의 경로
*/
