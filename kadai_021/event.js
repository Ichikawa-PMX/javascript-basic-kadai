
const aaa = document.getElementById('btn');
const change = document.getElementById('text');


  aaa.addEventListener('click', () => {
    setTimeout(() => {
      change.textContent ='ボタンをクリックしました';
    },2000);
  });