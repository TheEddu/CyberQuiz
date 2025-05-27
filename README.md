# CyberQuiz

CyberQuiz é um quiz interativo sobre cibersegurança, desenvolvido com React e Vite, com visual gamer/tech e responsivo.

## Sobre o desenvolvimento

O projeto foi iniciado seguindo um tutorial do YouTube:  
[[PedroTech](https://youtu.be/3OqiKTyH4r0?si=6SIT_h9A3keXC8FF)]

Ao final do tutorial, decidi ir além:
- Mudar completamente o visual para um tema que seja mais "meu estilo"  
- Alterar todas as perguntas (que incialmente eram apenas 3) para temas de cibersegurança, trazendo para o meu nicho
- Adicionar uma página inicial com botão "Start Quiz" antes de exibir as perguntas

## Demonstração

Acesse a versão online:  
https://TheEddu.github.io/CyberQuiz/

## Funcionalidades

- 10 perguntas de múltipla escolha sobre cibersegurança
- Tela inicial com botão "Start Quiz"
- Navegação entre perguntas (próxima/anterior)
- Destaque da opção selecionada
- Exibição da pontuação final e botão para reiniciar
- Visual gamer/tech moderno e responsivo

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

## Instalação

```bash
git clone https://github.com/TheEddu/CyberQuiz.git
cd CyberQuiz
npm install
```

## Execução local

```bash
npm run dev
```
Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Estrutura do Projeto

```
CyberQuiz/
├── public/
├── src/
│   ├── components/
│   │   ├── quiz.jsx
│   │   └── results.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
