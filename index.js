// Get references to the DOM elements
const element = document.getElementById("text");
const button = document.getElementById("btn");

// Create a new instance of SpeechRecognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.lang = "en-US";

// Start recognition when the button is clicked
button.addEventListener("click", () => {
    recognition.start();
});

// Handle results from the speech recognition
recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(' ');
    element.innerText = transcript;
});

// Handle errors 
recognition.addEventListener("error", (event) => {
    console.error("Speech recognition error: ", event.error);
});