function convertSpeech(){

const text =
document.getElementById("textInput").value;

const speech =
new SpeechSynthesisUtterance(text);

speech.lang = "ta-IN";

speechSynthesis.speak(speech);

}
