window.onload = function () {
  const cookieAccepted = localStorage.getItem('cookiesAccepted');
  const languageSelected = localStorage.getItem('languageSelected');

  console.log('Cookies:', cookieAccepted);
  console.log('Language:', languageSelected);

  if (!cookieAccepted) {
    showPopup('cookie-popup');
  } else if (!languageSelected) {
    showPopup('language-popup');
  } else {
    applyLanguage(languageSelected);
  }
};

function showPopup(id) {
  console.log('Показать окно:', id);
  document.getElementById(id).classList.add('active');
  document.getElementById('main-content').classList.add('blur');
}

function hidePopup(id) {
  document.getElementById(id).classList.remove('active');
  document.getElementById('main-content').classList.remove('blur');
}

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  hidePopup('cookie-popup');
  showPopup('language-popup');
}

function declineCookies() {
  hidePopup('cookie-popup');
  alert('Вы отказались от cookie. Некоторые функции сайта могут не работать.');
  showPopup('language-popup');
}

function setLanguage(lang) {
  localStorage.setItem('languageSelected', lang);
  hidePopup('language-popup');
  applyLanguage(lang);
}

function applyLanguage(lang) {
  document.querySelector('html').lang = lang;
  if (lang === 'en') {
    document.querySelector('header h1').textContent = 'GeForce RTX 5060';
    document.querySelector('header p').textContent = 'Next-level performance. Welcome to the future.';
    document.querySelector('.main h2').textContent = 'Power. Speed. Reality.';
    document.querySelector('.main p').textContent = 'The RTX 5060 delivers unmatched performance with Ada Lovelace architecture...';
    document.querySelector('.cta-button').textContent = 'Learn more';
    document.querySelector('.gif-section h2').textContent = 'RTX 5060 — The Future of Graphics';
    document.querySelector('.gif-description h3').textContent = 'Dive into stunning graphics!';
    document.querySelector('.gif-description p').textContent = 'GeForce RTX 5060 elevates your gaming experience...';
  } else {
    document.querySelector('header h1').textContent = 'GeForce RTX 5060';
    document.querySelector('header p').textContent = 'Следующий уровень производительности. Добро пожаловать в будущее.';
    document.querySelector('.main h2').textContent = 'Мощь. Скорость. Реальность.';
    document.querySelector('.main p').textContent = 'RTX 5060 обеспечивает непревзойдённую производительность...';
    document.querySelector('.cta-button').textContent = 'Узнать больше';
    document.querySelector('.gif-section h2').textContent = 'RTX 5060 — Будущее графики';
    document.querySelector('.gif-description h3').textContent = 'Погрузитесь в мир невероятной графики!';
    document.querySelector('.gif-description p').textContent = 'GeForce RTX 5060 выводит ваш игровой опыт на новый уровень...';
  }
}
