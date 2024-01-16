let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);    
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value
    if(numeroSecreto == chute){
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativa'
        let mensagemTentativa = `Parabéns você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!.`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero é menor');
        } else{
            exibirTextoNaTela('p', 'o numero é maior');
        }
        tentativas++;
        limpaCampo();
    }
}
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
   
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }
   if(listaDeNumeroSorteado.includes(numeroEscolhido)){
       return gerarNumeroAleatorio(); 
   } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
   }
}

function limpaCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}