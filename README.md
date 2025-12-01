# Calculadora de Partidas Rankeadas

Este projeto implementa uma calculadora simples para determinar o **nível ranqueado de um jogador**, com base na quantidade de vitórias e derrotas.  
O objetivo é exercitar conceitos fundamentais de programação como **variáveis**, **funções**, **laços**, **estruturas de decisão** e **operadores**.

---

## 🚀 Funcionalidades

- Recebe do usuário:
  - Quantidade de **vitórias**
  - Quantidade de **derrotas**

- Calcula automaticamente:
  - **Saldo de partidas** (vitórias - derrotas)
  - **Nível do jogador**, com base na quantidade total de vitórias

- Classificação baseada nas vitórias:
  - Menos de 10 → **Ferro**
  - 11 a 20 → **Bronze**
  - 21 a 50 → **Prata**
  - 51 a 80 → **Ouro**
  - 81 a 90 → **Diamante**
  - 91 a 100 → **Lendário**
  - 101 ou mais → **Imortal**

---

## 📦 Pré-requisitos

- **Node.js** instalado  
  Faça download em: https://nodejs.org

- Biblioteca `prompt-sync` para capturar dados pelo terminal.

---

## 🔧 Instalação

1. Baixe ou clone este repositório.
2. Acesse a pasta do projeto pelo terminal.
3. Instale a dependência necessária:

```bash
npm install prompt-sync
```
▶️ Execução
Execute o programa com:

```bash
node rankeadas.js
```

Informe os valores solicitados:

Total de vitórias

Total de derrotas

Ao final, o sistema exibirá algo como:

```bash
O Herói tem de saldo de 27 está no nível de Ouro
```