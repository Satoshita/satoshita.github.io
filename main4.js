'use strict';
{
  const arr = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
  function change() {
    function random(arr) {
      return Math.floor(Math.random() * arr.length);
    }
    const p = document.querySelectorAll('p')[0];
    const p1 = document.querySelectorAll('p')[1];
    const p2 = document.querySelectorAll('p')[2];
    const p3 = document.querySelectorAll('p')[3];
    const btn = document.getElementById('btn');

    btn.onclick = function() {
      p.textContent = `Spade-${arr[random(arr)]}`;
      p.style.color = '#ff8298';

      p1.textContent = `Daiya-${arr[random(arr)]}`;
      p1.style.color = 'limegreen';

      p2.textContent = `Hart-${arr[random(arr)]}`;
      p2.style.color = 'orange';

      p3.textContent = `Clover-${arr[random(arr)]}`;
      p3.style.color = 'skyBlue';
    }
  }
  change();

  // パスワードジェネ
  const btn1 = document.getElementById('btn1');

  function random() {
    return Math.floor(Math.random() * (string.length + 1));
  }

  const string = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ@＃$％^＆*\/><?:;`~{}|)(!_-";

  btn1.addEventListener('click', () => {
    const input = document.querySelector('input');
    const li = document.createElement('li');
    for (let i = 0; i < Number(input.value); i++) {
      li.textContent += string[random(input.value)];
      document.querySelector('ol').appendChild(li);
    }
    input.value = '';
    input.focus();
  });
}
