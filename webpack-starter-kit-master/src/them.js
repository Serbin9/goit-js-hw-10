const refs = {
  themeBtn: document.querySelector('button[data-action="theme-switch"]'),
  body: document.querySelector('body'),
  themeBtnIcon: document.querySelector('.toolbar__icon'),
};

const theme = localStorage.getItem('theme');

if (theme) {
  refs.body.classList.add(theme);
}

refs.themeBtn.addEventListener('click', handleThemeBtnClick);

function handleThemeBtnClick(e) {
  if (refs.body.classList.value === 'theme-dark') {
    refs.body.classList.remove('theme-dark');
    refs.body.classList.add('theme-light');
    refs.themeBtnIcon.innerHTML = 'brightness_3';
    localStorage.setItem('theme', 'theme-light');
    return;
  }

  refs.body.classList.remove('theme-light');
  refs.themeBtnIcon.innerHTML = 'wb_sunny';
  refs.body.classList.add('theme-dark');
  localStorage.setItem('theme', 'theme-dark');
}
