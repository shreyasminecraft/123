var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("big_text").innerHTML = "";
    recognition.start();
   


}
recognition.onresult = function(event){
    console.log(event);
    var pickachu = event.results[0][0].transcript;
    console.log(pickachu);
    document.getElementById("big_text").innerHTML= pickachu;
}
if(pickachu== "should get banned"){
    window.location="https://www.youtube.com/watch?v=mgT0N3tMP74";
}

