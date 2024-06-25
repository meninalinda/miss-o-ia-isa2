const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual das seguintes doenças não está diretamente relacionada à falta de saneamento básico adequado?",
        alternativas: [
            {
                texto: "Diarreia",
           
            },
            {
                texto: "Câncer de Pulmão",
               
            }
        ]
    },
    {
        enunciado: "Qual das seguintes opções não é considerada uma prática de saneamento básico sustentável?",
        alternativas: [
            {
                texto: "Reutilização da água da chuva.",
               
            },
            {
                texto: "Despejo de esgoto diretamente em rios e oceanos.",
               
            }
        ]
    },
    {
        enunciado: "Qual é o principal desafio enfrentado pelos países em desenvolvimento no que diz respeito ao saneamento básico?",
        alternativas: [
            {
                texto: "Falta de recursoso financeiros e infraestrutura adequada.",
               
            },
            {
                texto: "Falta de concientização da população sobre a importância do saneamento.",
               
            }
        ]
    },
   
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049 veremos como estará a Terra.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();