document.querySelector('.settings-block__btn').addEventListener('click', () => {
  document.querySelector('.settings-block__btn').classList.toggle('active');
  document.querySelector('#wrap-btn-lang').classList.toggle('wrap-btn_active');
  document.querySelector('#wrap-btn-theme').classList.toggle('wrap-btn_active');
});
