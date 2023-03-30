// Cria uma nova instância da API de fala do navegador
const speech = new SpeechSynthesisUtterance();

// Define as configurações padrão da fala
speech.lang = 'pt-BR';
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;

// Seleciona os elementos da página
const textInput = document.getElementById('text');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

// Adiciona um listener para o botão "Ouvir"
playButton.addEventListener('click', () => {
  // Define o texto a ser falado como o conteúdo do textarea
  speech.text = textInput.value;
  
  // Inicia a fala
  speechSynthesis.speak(speech);
});

// Adiciona um listener para o botão "Parar"
stopButton.addEventListener('click', () => {
  // Para a fala
  speechSynthesis.cancel();
});