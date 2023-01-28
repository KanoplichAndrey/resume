const modal = document.querySelector('.modal__mod');
const img = document.querySelectorAll('.slider__icon');
const modalImg1 = document.getElementById('img01');
const modalImg2 = document.getElementById('img02');

for (let item of img) {
  item.onclick = function () {
    modal.style.display = 'block';
    modalImg1.src = './companent/container/page/right-sade/slider/slider-img/1.png';
    modalImg2.src = './companent/container/page/right-sade/slider/slider-img/2.png';
  };
}
const span = document.getElementsByClassName('modal__close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};
