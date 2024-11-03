// Получаем объект WebApp
const tg = window.Telegram.WebApp;

document.getElementById('start-button').addEventListener('click', () => {
  // Здесь вы можете добавить логику вашего приложения
  tg.MainButton.setText("Продолжить");
  tg.MainButton.show();
});

document.getElementById('start-button').addEventListener('click', () => {
  const data = { action: 'start_learning' };
  window.Telegram.WebApp.sendData(JSON.stringify(data));
});
