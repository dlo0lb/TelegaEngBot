// Инициализируем объект WebApp
const tg = window.Telegram ? window.Telegram.WebApp : null;

// Код для главной страницы
if (document.getElementById('start-button')) {
  document.getElementById('start-button').addEventListener('click', () => {
    if (tg) {
      tg.MainButton.setText("Let's go!");
      tg.MainButton.show();
      tg.MainButton.onClick(() => {
        tg.sendData("Start learning"); // Отправляем данные боту
        tg.MainButton.hide(); // Скрываем кнопку после отправки данных
      });
    }
  });
}

// Код для страницы уроков
function goToLesson(lesson) {
  // Здесь вы можете реализовать логику перехода к конкретным урокам
  alert(`Переход к уроку: ${lesson}`);
}
