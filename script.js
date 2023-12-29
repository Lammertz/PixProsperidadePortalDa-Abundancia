function copyPixCode() {
    var pixCode = document.getElementById("pixCode");
    var textArea = document.createElement("textarea");
    textArea.value = pixCode.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert("Código Pix copiado!");
}

document.addEventListener('click', function() {
    var audio = document.getElementById('backgroundAudio');
    audio.play();
    document.removeEventListener('click', arguments.callee);
});
