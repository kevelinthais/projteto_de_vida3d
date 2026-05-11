const botoes = document.queryslectorAll(".botao");
for(let i=0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classlist.romove
        }
        botoes[i].classList.add("ativo")
    }
console.log(botoes);
}
    