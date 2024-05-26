var darkMode = document.getElementById('darkMode');

var darkLabel = "darkModeLabel";
var darkLang = '<i class="bi bi-moon"></i>';
var lightLang = '<i class="bi bi-sun"></i>';

var imgID = "logo";
var darkImg = "./dark.png";
var lightImg = "./light.png";

var togglerAlert = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Hi, there !</strong> If it"s too bright here, feel free to use the <strong>dark mode</strong> toggle at the <em class="fw-500">bottom-right</em>.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>' 

window.addEventListener('load', function () {
  if (darkMode) {
    initTheme();
    darkMode.addEventListener('change', function () {
      resetTheme();
    });
  }
});

function initTheme() {
  if (localStorage.getItem('togglerAlerted') == null) {
    document.getElementById('toggler-alert').innerHTML = togglerAlert;
    localStorage.setItem('togglerAlerted', true);
  }
  var darkThemeSelected = localStorage.getItem('darkMode') !== null && localStorage.getItem('darkMode') === 'dark';
  darkMode.checked = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
//   darkThemeSelected ? document.getElementById(imgID).src = darkImg : document.getElementById(imgID).src = lightImg;
  darkThemeSelected ? document.getElementById(darkLabel).innerHTML = darkLang : document.getElementById(darkLabel).innerHTML = lightLang;
}

function resetTheme() {
  if (darkMode.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkMode', 'dark');
    document.getElementById(darkLabel).innerHTML = darkLang;
    // document.getElementById(imgID).src = darkImg;
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkMode');
    document.getElementById(darkLabel).innerHTML = lightLang;
    // document.getElementById(imgID).src = lightImg;
  }
}
