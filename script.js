const allQuestions = {
  verbToBe: [
    { question: "I ___ a student.", options: ["am", "is", "are" ], answer: "am" },
    { question: "She ___ my friend.", options: ["am", "is", "are" ], answer: "is" },
    { question: "They ___ at the park.", options: ["is", "are", "am"], answer: "are" },
    { question: "We ___ happy.", options: ["is", "are", "am"], answer: "are" },
    { question: "He ___ (not) sad.", options: ["isn't", "aren't", "am not"], answer: "isn't" },
    { question: "I ___ (not) a robot.", options: ["am", "am not", "isn't"], answer: "am not" },
    { question: "___ you from Spain?", options: ["Is", "Are", "Am"], answer: "Are" },
    { question: "They ___ (not) tired.", options: ["are", "aren't", "isn't"], answer: "aren't" },
    { question: "Where ___ you?", options: ["is", "are", "am"], answer: "are" },
    { question: "Are you okay?", options: ["Yes, I am.", "Yes, I is.", "Yes, I are."], answer: "Yes, I am." },
    { question: "She ___ a doctor.", options: ["am", "is", "are"], answer: "is" },
    { question: "___ he your brother?", options: ["Am", "Is", "Are"], answer: "Is" },
    { question: "We ___ at home.", options: ["is", "are", "am"], answer: "are" },
    { question: "You ___ (not) a teacher.", options: ["isn't", "aren't", "am not"], answer: "aren't" },
    { question: "I ___ 10 years old.", options: ["is", "are", "am"], answer: "am" },
    { question: "He ___ my cousin.", options: ["is", "are", "am"], answer: "is" },
    { question: "___ I late?", options: ["Are", "Is", "Am"], answer: "Am" },
    { question: "___ they your friends?", options: ["Are", "Is", "Am"], answer: "Are" },
    { question: "You ___ my best friend.", options: ["is", "are", "am"], answer: "are" },
    { question: "They ___ (not) here.", options: ["aren't", "isn't", "am not"], answer: "aren't" },
    { question: "He ___ a singer.", options: ["is", "are", "am"], answer: "is" },
    { question: "I ___ (not) ready.", options: ["am not", "isn't", "aren't"], answer: "am not" },
    { question: "She ___ (not) okay.", options: ["isn't", "aren't", "am not"], answer: "isn't" },
    { question: "We ___ students.", options: ["are", "is", "am"], answer: "are" },
    { question: "You ___ happy?", options: ["Are", "Is", "Am"], answer: "Are" },
    { question: "She ___ at school.", options: ["is", "are", "am"], answer: "is" },
    { question: "I ___ from Italy.", options: ["am", "is", "are"], answer: "am" },
    { question: "They ___ at the cinema.", options: ["are", "is", "am"], answer: "are" },
    { question: "He ___ very tall.", options: ["is", "are", "am"], answer: "is" },
    { question: "___ we late?", options: ["Are", "Is", "Am"], answer: "Are" }
  ],
  pronouns: [
    { question: "___ is my sister.", options: ["She", "He", "They" ], answer: "She" },
    { question: "___ are playing football.", options: ["We", "She", "He"], answer: "We" },
    { question: "I have a dog. ___ name is Max.", options: ["Its", "His", "Her"], answer: "Its" },
    { question: "This is Peter. ___ is my friend.", options: ["He", "She", "They"], answer: "He" },
    { question: "Those are my parents. ___ are teachers.", options: ["They", "We", "He"], answer: "They" },
    { question: "My sister has a cat. ___ cat is white.", options: ["Her", "His", "Its"], answer: "Her" },
    { question: "The dog is eating __ food.", options: ["its", "his", "her"], answer: "its" },
    { question: "John is nice. ___ is my friend.", options: ["He", "She", "It"], answer: "He" },
    { question: "Lucy is kind. ___ helps me.", options: ["She", "He", "They"], answer: "She" },
    { question: "We are friends. This is ___ house.", options: ["our", "their", "his"], answer: "our" },
    { question: "Tom and Jerry love ___ toys.", options: ["their", "his", "her"], answer: "their" },
    { question: "I have a brother. ___ name is Alex.", options: ["His", "Her", "Its"], answer: "His" },
    { question: "Anna and I are classmates. ___ go to school together.", options: ["We", "They", "She"], answer: "We" },
    { question: "These are my books. They are ___ books.", options: ["my", "mine", "me"], answer: "my" },
    { question: "This pen belongs to her. It's ___ pen.", options: ["her", "hers", "she"], answer: "her" },
    { question: "Is this your backpack? Yes, it’s ___", options: ["mine", "my", "me"], answer: "mine" },
    { question: "This is not my ball. It's ___", options: ["his", "him", "he"], answer: "his" },
    { question: "They love ___ new house.", options: ["their", "they", "them"], answer: "their" },
    { question: "Give the book to ___", options: ["me", "I", "mine"], answer: "me" },
    { question: "She is writing ___ homework.", options: ["her", "hers", "she"], answer: "her" }
  ],

  personalQuestions: [
    { question: "What time do you wake up?", options: ["I wake up at 7.", "I wakes up at 7.", "I waking up at 7."], answer: "I wake up at 7." },
    { question: "Where are you from?", options: ["I am from Italy.", "I from Italy.", "From Italy I am."], answer: "I am from Italy." },
    { question: "What is your name?", options: ["My name is Giuli.", "His name is Giuli.", "Her name is Giuli."], answer: "My name is Giuli." },
    { question: "Are you happy?", options: ["Yes, I am.", "Yes, I is.", "Yes, I are."], answer: "Yes, I am." },
    { question: "What do you like to do?", options: ["I like playing.", "I likes playing.", "I liked playing."], answer: "I like playing." },
    { question: "What is your favorite color?", options: ["My favorite color is blue.", "My favorite color is blue.", "My favorite colors blue."], answer: "My favorite color is blue." },
    { question: "Where do you live?", options: ["I live in London.", "I lives in London.", "I live London."], answer: "I live in London." },
    { question: "How old are you?", options: ["I am 20.", "I is 20.", "I was 20."], answer: "I am 20." },
    { question: "Do you like pizza?", options: ["Yes, I like.", "Yes, I likes.", "Yes, I like pizza."], answer: "Yes, I like pizza." },
    { question: "How do you feel today?", options: ["I feel happy.", "I feels happy.", "I feel happy now."], answer: "I feel happy." },
    { question: "When is your birthday?", options: ["My birthday is in August.", "My birthday is on August.", "My birthday is August."], answer: "My birthday is in August." },
    { question: "How do you go to work?", options: ["I go by bus.", "I going by bus.", "I goes by bus."], answer: "I go by bus." },
    { question: "Where is your favorite place?", options: ["My favorite place is the beach.", "My favorite place is beach.", "The beach is my favorite place."], answer: "My favorite place is the beach." },
    { question: "What do you do every day?", options: ["I work every day.", "I works every day.", "I worked every day."], answer: "I work every day." },
    { question: "When do you go to bed?", options: ["I go to bed at 11.", "I goes to bed at 11.", "I going to bed at 11."], answer: "I go to bed at 11." },
    { question: "What are you doing?", options: ["I am studying.", "I am study.", "I study."], answer: "I am studying." },
    { question: "How often do you exercise?", options: ["I exercise twice a week.", "I exercising twice a week.", "I exercised twice a week."], answer: "I exercise twice a week." },
    { question: "Why are you learning English?", options: ["I want to travel.", "I wants to travel.", "I wanting to travel."], answer: "I want to travel." },
    { question: "What is your favorite food?", options: ["My favorite food is pasta.", "I like pasta.", "My pasta favorite food."], answer: "My favorite food is pasta." },
    { question: "Do you have a pet?", options: ["Yes, I have.", "Yes, I has.", "Yes, I having."], answer: "Yes, I have." },
    { question: "Where do you study?", options: ["I study at school.", "I studies at school.", "I study on school."], answer: "I study at school." }
  ],

};

let selectedQuestions = [];
let currentIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const backButton = document.getElementById("back-button");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz(category) {
  selectedQuestions = shuffle([...allQuestions[category]]).slice(0, 5); // Limitar a 5 preguntas aleatorias
  currentIndex = 0;
  score = 0;
  document.querySelector(".button-container").style.display = "none";
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  backButton.style.display = "inline-block"; // Mostrar el botón "Back"
  showQuestion();
}

function showQuestion() {
  const q = selectedQuestions[currentIndex];
  questionText.textContent = `Question ${currentIndex + 1}: ${q.question}`;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.style.display = "none";

  shuffle([...q.options]).forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => {
      if (option === q.answer) {
        feedback.textContent = "Correct! ✅";
        feedback.style.color = "green";
        score++;
      } else {
        feedback.textContent = `Oops! The correct answer is: ${q.answer}`;
        feedback.style.color = "red";
      }
      nextButton.style.display = "inline-block";
    };
    optionsContainer.appendChild(button);
  });
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    questionText.textContent = `🎉 You finished! Score: ${score} / ${selectedQuestions.length}`;
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextButton.style.display = "none";
    restartButton.style.display = "inline-block";
  }
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  showQuestion();
}

function showMenu() {
  document.querySelector(".button-container").style.display = "block";
  questionText.textContent = "";
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  backButton.style.display = "none"; // Ocultar el botón "Back"
}

backButton.onclick = showMenu;
