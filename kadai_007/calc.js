// 変数numに0～2までのランダムな整数を代入する
let num = Math.floor(Math.random() * 100) + 1;

// 変数numの値によって出力する文字列を切り替える
switch (true) {
  case (num % 3 === 0 && num % 5 === 0):
    console.log('3と5の倍数です');
    break;
  case (num % 3 == 0):
    console.log('3の倍数です');
    break;
  case (num % 5 == 0):
    console.log('5の倍数です');
    break;
  default:console.log(num);  
    break;
}