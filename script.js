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
  card.classList.toggle("flipped");
}

function swipeLeft() {
  const card = document.getElementById("card");
  card.classList.add("swipe-left");
  setTimeout(() => {
    alert(`Слово "${words[currentWordIndex].word}" добавлено в список не выученных слов.`);
    nextWord();
    card.classList.remove("swipe-left");
  }, 500);
}

function swipeRight() {
  const card = document.getElementById("card");
  card.classList.add("swipe-right");
  setTimeout(() => {
    alert(`Слово "${words[currentWordIndex].word}" помечено как выученное.`);
    nextWord();
    card.classList.remove("swipe-right");
  }, 500);
}

function nextWord() {
  currentWordIndex = (currentWordIndex + 1) % words.length; // Зацикливаем список слов
  document.getElementById("card").classList.remove("flipped");
  updateCard();
}

// Инициализация первой карточки
updateCard();

