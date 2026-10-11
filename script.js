(function () {
  'use strict';

  var DOC = document.documentElement;
  var btnRu = document.getElementById('btn-ru');
  var btnEn = document.getElementById('btn-en');

  function setLang(lang) {
    var l = lang === 'en' ? 'en' : 'ru';
    DOC.setAttribute('lang', l);
    DOC.setAttribute('data-lang', l);
    try {
      localStorage.setItem('cv_lang', l);
    } catch {
      /* storage unavailable — ignore */
    }

    if (btnRu) {
      btnRu.classList.toggle('active', l === 'ru');
      btnRu.setAttribute('aria-selected', String(l === 'ru'));
    }
    if (btnEn) {
      btnEn.classList.toggle('active', l === 'en');
      btnEn.setAttribute('aria-selected', String(l === 'en'));
    }
  }

  if (btnRu) {
    btnRu.addEventListener('click', function () { setLang('ru'); });
  }
  if (btnEn) {
    btnEn.addEventListener('click', function () { setLang('en'); });
  }

  var saved = 'ru';
  try {
    saved = localStorage.getItem('cv_lang') || 'ru';
  } catch {
    /* ignore */
  }
  setLang(saved);
})();
