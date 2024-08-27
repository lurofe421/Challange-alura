function criptografar() {
    var texto = document.getElementById("text-input").value;
    var textoCriptografado = texto.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");

    document.getElementById("output-message").innerHTML = textoCriptografado;
}

// Função de descriptografia (invertendo o processo de criptografia)
function descriptografar() {
    var texto = document.getElementById("text-input").value;
    var textoDescriptografado = texto.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");

    document.getElementById("output-message").innerHTML = textoDescriptografado;
}

// Adicionando event listeners aos botões
document.getElementById("encrypt-btn").addEventListener("click", criptografar);
document.getElementById("decrypt-btn").addEventListener("click", descriptografar);