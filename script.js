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

// Array de mensagens positivas
const positiveMessages = [
    "Você é capaz de atrair prosperidade!",
    "A abundância está a caminho!",
    "Cada contribuição é uma semente de sucesso!",
    "Visualize a riqueza em sua vida!",
    "O universo conspira a seu favor!",
    "Sua positividade cria ondas de sucesso!",
    "Acredite na magia do pensamento positivo!",
    "Seu futuro financeiro começa agora!",
    "Sinta a energia positiva fluindo em sua vida!",
    "Prospere com gratidão e alegria!"
];

// Função para exibir mensagens aleatórias em um loop infinito
function showRandomMessages() {
    const messagesContainer = document.getElementById("positiveMessagesContainer");

    // Limpa mensagens existentes
    messagesContainer.innerHTML = '';

    // Exibe uma mensagem aleatória por vez
    let index = 0;
    function displayNextMessage() {
        const messageElement = document.createElement("div");
        messageElement.className = "positive-message";
        messageElement.textContent = positiveMessages[index];

        messagesContainer.appendChild(messageElement);

        // Define um tempo para a mensagem desaparecer (por exemplo, 5 segundos)
        setTimeout(() => {
            messageElement.remove();
            index = (index + 1) % positiveMessages.length;
            setTimeout(displayNextMessage, 3000); // Aguarda 3 segundos antes de chamar a próxima mensagem
        }, 5000); // Ajuste conforme necessário
    }

    // Inicia o loop de exibição de mensagens
    displayNextMessage();
}

// Chama a função para exibir mensagens aleatórias em um loop infinito
showRandomMessages();
