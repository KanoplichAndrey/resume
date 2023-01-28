const html = document.getElementsByTagName('html')[0];
document.querySelector('#wrap-btn-theme').addEventListener('click', function (event) {
  if (event.target.id === 'night' ) {
    localStorage.setItem('style', 'dark-mode');
    day.classList.remove('wrap-btn__btn_active');
    night.classList.add('wrap-btn__btn_active');
    html.classList.add('dark-mode');
  } else if (event.target.id === 'day') {
    localStorage.setItem('style', '');
    day.classList.add('wrap-btn__btn_active');
    night.classList.remove('wrap-btn__btn_active');
    html.classList.remove('dark-mode');
  }
});

if (localStorage.getItem('style') === 'dark-mode') {
  html.classList.add('dark-mode');
  night.classList.add('wrap-btn__btn_active');
  day.classList.remove('wrap-btn__btn_active');
} else if (localStorage.getItem('style') === '') {
  html.classList.remove('dark-mode');
  night.classList.remove('wrap-btn__btn_active');
  day.classList.add('wrap-btn__btn_active');
}
