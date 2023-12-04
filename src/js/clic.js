var buttons = document.querySelectorAll('.button-modal-chocolate');
var containers = document.querySelectorAll('.hero-chocolate-container');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Знімаємо аутлайн з усіх контейнерів
    containers.forEach(function(container) {
      container.style.outline = 'none';
    });

    // Знімаємо колір і бекграунд з усіх кнопок
    buttons.forEach(function(btn) {
      btn.style.color = '';
      btn.style.backgroundColor = '';
    });

    // Встановлюємо аутлайн на поточному контейнері
    var container = this.closest('.hero-chocolate-container');
    container.style.outline = '1px solid #FD9222';

    // Встановлюємо колір тексту на білий і бекграунд на #FD9222
    this.style.color = 'white';
    this.style.backgroundColor = '#FD9222';
  });
});