// Инициализируем объект WebApp
const tg = window.Telegram.WebApp;

// Добавляем обработчик клика на кнопку
document.getElementById('start-button').addEventListener('click', () => {
  tg.MainButton.setText("Let's go!");
  tg.MainButton.show();
  tg.MainButton.onClick(() => {
    tg.sendData("Start learning"); // Отправляем данные боту
    tg.MainButton.hide(); // Скрываем кнопку после отправки данных
  });
});
