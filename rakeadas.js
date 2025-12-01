// Calculadora de Partidas Rankeadas


function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;

    // Lista de níveis baseado em vitórias
    const niveis = [
        { limite: 10, nivel: "Ferro" },
        { limite: 20, nivel: "Bronze" },
        { limite: 50, nivel: "Prata" },
        { limite: 80, nivel: "Ouro" },
        { limite: 90, nivel: "Diamante" },
        { limite: 100, nivel: "Lendário" },
        { limite: Infinity, nivel: "Imortal" }
    ];

    // Encontra nível baseado nas vitórias
    let nivel = niveis.find(item => vitorias <= item.limite).nivel;

    return { saldo, nivel };
}


const prompt = require("prompt-sync")({ sigint: true });

let vitorias = parseInt(prompt("Quantas vitórias o jogador tem? "), 10);
let derrotas = parseInt(prompt("Quantas derrotas o jogador tem? "), 10);

let resultado = calcularRank(vitorias, derrotas);

console.log(
    `O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`
);