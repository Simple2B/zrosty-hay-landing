import 'flowbite';

export interface HTMXEventDetail {
  xhr: XMLHttpRequest;
  target: HTMLElement;
}

const themeToggleDarkIcons = document.querySelectorAll(
  '#theme-toggle-light-icon',
);
const themeToggleLightIcons = document.querySelectorAll(
  '#theme-toggle-dark-icon',
);

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem('color-theme') === 'light' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: light)').matches)
) {
  themeToggleLightIcons.forEach(function (el) {
    el.classList.remove('hidden');
  });
  document.documentElement.classList.add('light');
} else {
  themeToggleDarkIcons.forEach(function (el) {
    el.classList.remove('hidden');
  });
  document.documentElement.classList.remove('light');
}

const themeToggleButtons = document.querySelectorAll('#theme-toggle');

themeToggleButtons.forEach(function (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function () {
    // toggle icons inside button
    themeToggleDarkIcons.forEach(function (themeToggleDarkIcon) {
      themeToggleDarkIcon.classList.toggle('hidden');
    });

    themeToggleLightIcons.forEach(function (themeToggleLightIcon) {
      themeToggleLightIcon.classList.toggle('hidden');
    });

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'dark') {
        document.documentElement.classList.add('light');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.remove('light');
        localStorage.setItem('color-theme', 'dark');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        localStorage.setItem('color-theme', 'light');
      }
    }
  });
});
