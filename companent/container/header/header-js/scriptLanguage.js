const languages = {
  en: valuesEN,
  ru: valuesRU,
};

document.getElementById('wrap-btn-lang').addEventListener('click', function (event) {
  document.querySelectorAll('.js-btn').forEach((e) => e.classList.remove('wrap-btn__btn_active'));

  let selectedLanguage = event.target.id;
  event.target.classList.add('wrap-btn__btn_active');
  const translations = languages[selectedLanguage];
  selectLangvich(translations);
});

const selectLangvich = (translations) => {
  for (key in translations) {
    document.querySelector(selectors[key]).textContent = translations[key];
  }
};
