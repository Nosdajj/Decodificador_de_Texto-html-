// script.js

function cryptText() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");
    const copyButton = document.getElementById("copyButton");

    if (input.trim() === "") {
        output.innerHTML = '<img src="espera1.PNG" alt="Imagem de Espera">';
        copyButton.style.display = "none";
    } else {
        const encryptedText = input
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        output.textContent = "Texto criptografado: " + encryptedText;
        copyButton.style.display = "block"; // Exibe o botão Copiar
    }
}

function decryptText() {
    const input = document.getElementById("inputText").value;
    const output = document.getElementById("outputText");
    const copyButton = document.getElementById("copyButton");

    if (input.trim() === "") {
        output.innerHTML = '<img src="espera1.PNG" alt="Imagem de Espera">';
        copyButton.style.display = "none";
    } else {
        const decryptedText = input
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        output.textContent = "Texto descriptografado: " + decryptedText;
        copyButton.style.display = "block"; // Exibe o botão Copiar
    }
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText").textContent;
    const result = outputText.split(": ")[1] || ''; // Obtém o texto após "Texto criptografado:" ou "Texto descriptografado:"
    
    if (result) {
        navigator.clipboard.writeText(result)
            .then(() => alert('Texto copiado para a área de transferência!'))
            .catch(err => console.error('Erro ao copiar o texto: ', err));
    }
}
