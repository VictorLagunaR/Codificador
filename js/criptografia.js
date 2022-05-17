
var mensagem = document.querySelector(".digitar-texto");

var form = document.querySelector("#form")

function limpaTela() {
    //fazendo a imagem e o texto desaparecerem
    document.getElementById("imagem-e-texto").style.display = "none";
    document.getElementById("copiar").style.display = "block"

}

function criptografia(mensagem) {
    var mensagemCriptografada = document.querySelector("#texto-criptografado") 

    //pegando o texto digitado
    var mensagemParaCriptografar = mensagem.value;

    let texto = mensagem.value.toLowerCase();
    let textoCodificado = texto;

     // matriz contendo o valor a ser trocado e o que deve substituí-lo
     const trocarLetras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
     for (let i = 0; i < trocarLetras.length; i++) {
         // checa se o texto de entrada inclui as letras que devem ser trocadas
         if (texto.includes(trocarLetras[i][0])) {
             // troca as letras
             textoCodificado = textoCodificado.replaceAll(trocarLetras[i][0], trocarLetras[i][1]);
         }
    }

    mensagemCriptografada.textContent = textoCodificado
    mensagemCriptografada.style.display = "block"   

    //limpa tela no final pois, se iniciada logo no início do código ocorre a perca das informações para executar a criptografia
    limpaTela();

    return mensagemCriptografada

}
    //Atalho para a tecla enter
    document.addEventListener('keypress', function(enter){
    if(enter.which == 13){
      criptografia(mensagem);
    }
  }, false);  


var botaoCriptografar = document.querySelector("#criptografar");
var mensagemCriptografada = document.querySelector("#texto-criptografado")
botaoCriptografar.addEventListener('click' , function(event){
    event.preventDefault();
    criptografia(mensagem);
})


