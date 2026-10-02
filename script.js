// Progressive enhancement: the default native journey remains readable without JS.
document.documentElement.classList.add('js');
const journeyButtons = [...document.querySelectorAll('[data-view]')];
const nativeFlow = document.getElementById('native-flow');
const redirectFlow = document.getElementById('redirect-flow');
const number = document.getElementById('completion-number');
const label = document.getElementById('completion-label');
const announcement = document.getElementById('journey-announcement');
journeyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const native = button.dataset.view === 'native';
    journeyButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    nativeFlow.hidden = !native;
    redirectFlow.hidden = native;
    number.textContent = native ? '51%' : '27%';
    label.textContent = native ? 'native-journey completion' : 'redirection completion';
    announcement.textContent = native ? 'Native journey. 51 percent completion. The journey stays inside the partner app.' : 'Redirection journey. 27 percent completion. The customer redirects and logs in again.';
  });
});

