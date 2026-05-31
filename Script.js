function convertSpeech() {
    alert("Button clicked!");

    const text = document.getElementById("textInput").value;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
}
