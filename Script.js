function convertSpeech() {
    const text = document.getElementById("textInput").value;

    if (!text.trim()) {
        alert("Please enter some text.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = speechSynthesis.getVoices();

    const tamilVoice = voices.find(
        voice => voice.lang.includes("ta")
    );

    if (tamilVoice) {
        utterance.voice = tamilVoice;
    }

    utterance.lang = "ta-IN";

    speechSynthesis.speak(utterance);
}

function stopSpeech() {
    speechSynthesis.cancel();
}

window.speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};
