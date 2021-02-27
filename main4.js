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
}
