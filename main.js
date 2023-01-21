// panggil elemen
const emoji = document.querySelector('.emoji');
const mulut = document.querySelector('.mulut')
const gigi = document.querySelector('.gigi');
const mata2 = document.querySelector('.mata2');
const put1 = document.querySelector('.p1');
const put2 = document.querySelector('.p2');

// audio
const audio = document.querySelector('audio');
// console.log(audio);


emoji.addEventListener('click', function() {
  audio.play();
  mata2.classList.toggle ('m2');
  mulut.classList.toggle('m');
  gigi.classList.toggle('g');
  put1.classList.toggle('hide');
  put2.classList.toggle('hilang');
});


