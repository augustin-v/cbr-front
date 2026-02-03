const button = document.getElementById('joke-btn');
const jokeContainer = document.getElementById('joke');

button.addEventListener('click', () => {
  jokeContainer.textContent = 'Une blague sera bientôt servie ici depuis l’API.';
});
