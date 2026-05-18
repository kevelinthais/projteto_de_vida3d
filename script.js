const botoes = document.queryslectorAll(".botao");
const textos = document.queryslectorAll(".aba-conteudo")
for(let i=0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classlist.romove("ativo");
            botoes[j].classlist.romove("ativo");
        }
        botoes[i].classList.add("ativo")
        textos[i].classlist.add("ativo")
    }
console.log(botoes);
}
    const contadores=document.queryslectorall("contador")
    const tempoObjetivo1=new Date("2026-12-28T23:59:59");