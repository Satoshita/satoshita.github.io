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


}
