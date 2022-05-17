botaoCopiar = document.querySelector("#copiar");
function copiarTexto() {
    let textoCopiado = document.getElementById("texto-criptografado").textContent;
    navigator.clipboard.writeText(textoCopiado);
    mensagem.value = textoCopiado;
}