

function descriptografar(mensagemCriptografada){
    var mensagemDecodificadada = document.querySelector("#texto-criptografado")
    //pegando o texto criptografado
    var mensagemParaDescriptografar = mensagemCriptografada.value
    var textoDecodificado = mensagemParaDescriptografar
     // matriz contendo o valor a ser trocado e o que deve substituí-lo
     const trocarLetras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < trocarLetras.length; i++) {
        // checa se o texto de entrada inclui as letras que devem ser trocadas
        if (mensagemParaDescriptografar.includes(trocarLetras[i][0])) {
            // troca as letras
            textoDecodificado = textoDecodificado.replaceAll(trocarLetras[i][1], trocarLetras[i][0]);
        }
   }

   console.log(mensagemCriptografada.value)

    mensagemDecodificadada.textContent = textoDecodificado
}

var botaoDescriptografar = document.querySelector("#descriptografar")
botaoDescriptografar.addEventListener('click', function(event){
    event.preventDefault();

    descriptografar(mensagemCriptografada)
})