// Get references to the DOM elements
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const waves = document.querySelector('.waves');
const path = document.querySelector('.path');

btn.addEventListener('click', () => {
if (btn.classList.toggle('recording')) {
text.textContent = "Recording... Please speak.";
btn.innerText=" Stop Recording "
waves.style.display = 'flex'; // Show waves
waves.style.margin = '30px'; // Show waves
path.style.fill = '#dd3838'; // chnage the color of the mic to red 
// Create a new instance of SpeechRecognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.lang = "en-US";
// Start recognition when the button is clicked
btn.addEventListener("click", () => {
    recognition.start();
});

// Handle errors 
recognition.addEventListener("error", (event) => {
    console.error("Speech recognition error: ", event.error);
});
} else {
text.textContent = "Press the button to start transcription.";
waves.style.display = 'none'; // Hide waves
path.style.fill = 'black';
btn.innerText=" Start Transcript Again "
// Handle results from the speech recognition
recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(' ');
    text.innerText = transcript;
});
            }
        });
