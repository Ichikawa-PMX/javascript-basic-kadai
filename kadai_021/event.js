
const aaa = document.getElementById('btn');
const change = document.getElementById('text');

setTimeout(() => {
  aaa.addEventListener('click', () => {
  change.textContent ='ボタンをクリックしました';
  });
},2000);