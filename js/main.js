const button = document.getElementById('joke-btn');
const questionElement = document.getElementById('joke-question');
const answerElement = document.getElementById('joke-answer');

const API_ENDPOINT = 'http://localhost:3000/api/v1/blagues/random';

// Update the UI with both question and answer so the layout stays predictable.
const renderMessage = (question, answer = '') => {
  questionElement.textContent = question;
  answerElement.textContent = answer;
};

// Show a simple error note while keeping the answer area blank.
const renderError = (message) => {
  renderMessage(message);
};

// Fetch a new blague and display it; keep errors user-friendly.
const fetchJoke = async () => {
  try {
    renderMessage('Chargement de la blague…');
    const response = await fetch(API_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Erreur serveur (${response.status})`);
    }

    const data = await response.json();
    const question = data.question ?? 'Aucune question reçue.';
    const answer = data.answer ?? 'Pas de réponse disponible.';

    renderMessage(question, answer);
  } catch (error) {
    console.error('Impossible de récupérer la blague :', error);
    renderError('L’API semble indisponible pour le moment.');
  }
};

button.addEventListener('click', fetchJoke);
