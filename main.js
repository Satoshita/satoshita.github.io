'use strict'

{

  let admin = prompt('Whst`s your name?', '');
  let pass = prompt('パスワードを入力してください。');

  if (pass == 'Sato') {
    alert('Successful Password!');
    window.location.reload();
  } else {
    alert('あなたは管理者ではありません。')
  }



  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const result = ['大吉', '中吉', '小吉', '凶','末吉'];
    btn.textContent = result[Math.floor(Math.random() * result.length)];

  });

}
