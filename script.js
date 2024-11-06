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
  if (lesson === 'new-words') {
    window.location.href = 'cards.html'; // Переход на страницу карточек
  } else if (lesson === 'grammar') {
    window.location.href = 'grammar.html'; // Переход на страницу грамматики
  } else if (lesson === 'idioms') {
    alert('Переход к разделу "Идиомы и фразовые глаголы" (страница еще не реализована).');
  } else if (lesson === 'ai-chat') {
    alert('Переход к разделу "Общение с AI" (страница еще не реализована).');
  }
}

// Добавление обработчиков событий для элементов уроков (альтернативный способ)
document.addEventListener('DOMContentLoaded', () => {
  const newWordsItem = document.querySelector('.lesson-item:nth-child(1)');
  const grammarItem = document.querySelector('.lesson-item:nth-child(2)');
  
  if (newWordsItem) {
    newWordsItem.addEventListener('click', () => goToLesson('new-words'));
  }
  if (grammarItem) {
    grammarItem.addEventListener('click', () => goToLesson('grammar'));
  }
});

// Код для работы с карточками
let currentWordIndex = 0;

const words = [
  {
    word: "Hello",
    translation: "Привет",
    transcription: "[həˈləʊ]",
    example: "Hello, how are you?"
  },
  {
    word: "Dog",
    translation: "Собака",
    transcription: "[dɒɡ]",
    example: "The dog is barking."
  },
  {
    word: "Apple",
    translation: "Яблоко",
    transcription: "[ˈæpl]",
    example: "I ate an apple for breakfast."
  },
  // Добавьте другие слова по мере необходимости
];

function updateCard() {
  const wordElement = document.getElementById("word");
  const translationElement = document.getElementById("translation");
  const transcriptionElement = document.getElementById("transcription");
  const exampleElement = document.getElementById("example");

  const currentWord = words[currentWordIndex];
  wordElement.textContent = currentWord.word;
  translationElement.textContent = currentWord.translation;
  transcriptionElement.textContent = currentWord.transcription;
  exampleElement.textContent = currentWord.example;
}

function flipCard() {
  const card = document.getElementById("card");
  if (card) {
    card.classList.toggle("flipped");
  }
}

function swipeLeft() {
  const card = document.getElementById("card");
  if (card) {
    card.classList.add("swipe-left");
    setTimeout(() => {
      alert(`Слово "${words[currentWordIndex].word}" добавлено в список не выученных слов.`);
      nextWord();
      card.classList.remove("swipe-left");
    }, 500);
  }
}

function swipeRight() {
  const card = document.getElementById("card");
  if (card) {
    card.classList.add("swipe-right");
    setTimeout(() => {
      alert(`Слово "${words[currentWordIndex].word}" помечено как выученное.`);
      nextWord();
      card.classList.remove("swipe-right");
    }, 500);
  }
}

function nextWord() {
  currentWordIndex = (currentWordIndex + 1) % words.length; // Зацикливаем список слов
  const card = document.getElementById("card");
  if (card) {
    card.classList.remove("flipped");
  }
  updateCard();
}

// Функция для показа/скрытия таблицы на странице грамматики
function toggleTable() {
  const table = document.getElementById("grammar-table");
  if (table) {
    table.classList.toggle("hidden");

    // Изменение текста кнопки в зависимости от состояния таблицы
    const button = document.querySelector(".show-table-button");
    if (button) {
      if (table.classList.contains("hidden")) {
        button.textContent = "Показать таблицу образования времени";
      } else {
        button.textContent = "Скрыть таблицу образования времени";
      }
    }
  } else {
    console.error("Таблица не найдена.");
  }
}
