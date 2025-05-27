import React, { useState } from 'react';
import Results from './results';


function Quiz() {
    const questionBank = [
        {
            question: "O que é Engenharia Social?",
            options: [
                "Uma técnica de engenharia aplicada a sistemas de redes.",
                "Uma forma de hackear softwares usando programação.",
                "A manipulação de pessoas para obter informações confidenciais.",
                "Um protocolo de segurança de redes."
            ],
            answer: "A manipulação de pessoas para obter informações confidenciais."
        },
        {
            question: "Qual é o objetivo de um firewall?",
            options: [
                "Proteger contra falhas de hardware.",
                "Controlar o tráfego de rede, bloqueando ou permitindo conexões.",
                "Detectar vírus em arquivos.",
                "Otimizar a velocidade da conexão de internet."
            ],
            answer: "Controlar o tráfego de rede, bloqueando ou permitindo conexões."
        },
        {
            question: "O que é um ataque de Phishing?",
            options: [
                "Um ataque de força bruta contra servidores.",
                "Uma tentativa de enganar alguém usando e-mails ou sites falsos.",
                "Um ataque físico a centros de dados.",
                "Um malware que rouba senhas automaticamente."
            ],
            answer: "Uma tentativa de enganar alguém usando e-mails ou sites falsos."
        },
        {
            question: "O que significa a sigla VPN?",
            options: [
                "Virtual Private Network",
                "Virtual Protected Node",
                "Variable Protection Network",
                "Verified Protocol Number"
            ],
            answer: "Virtual Private Network"
        },
        {
            question: "O que é a autenticação de dois fatores (2FA)?",
            options: [
                "Usar dois dispositivos para acessar a internet.",
                "Um sistema que exige duas senhas de acesso.",
                "Um método que exige duas formas diferentes de autenticação.",
                "Um antivírus com duas camadas de proteção."
            ],
            answer: "Um método que exige duas formas diferentes de autenticação."
        },
        {
            question: "O que é um ransomware?",
            options: [
                "Um tipo de firewall corporativo.",
                "Um vírus que rouba dados bancários.",
                "Um malware que criptografa dados e exige pagamento para liberação.",
                "Um software de backup."
            ],
            answer: "Um malware que criptografa dados e exige pagamento para liberação."
        },
        {
            question: "O que representa o protocolo HTTPS?",
            options: [
                "Um protocolo inseguro de navegação.",
                "Um protocolo para envio de e-mails.",
                "Um protocolo de navegação segura com criptografia.",
                "Um protocolo de transferência de arquivos."
            ],
            answer: "Um protocolo de navegação segura com criptografia."
        },
        {
            question: "O que significa pentest?",
            options: [
                "Um tipo de software de segurança.",
                "Um teste de penetração para avaliar a segurança de sistemas.",
                "Um hardware específico de segurança.",
                "Uma licença de firewall."
            ],
            answer: "Um teste de penetração para avaliar a segurança de sistemas."
        },
        {
            question: "Qual destas opções representa uma boa prática de segurança?",
            options: [
                "Usar a mesma senha para tudo.",
                "Compartilhar senhas por e-mail.",
                "Manter softwares e sistemas sempre atualizados.",
                "Desabilitar o antivírus para melhorar o desempenho."
            ],
            answer: "Manter softwares e sistemas sempre atualizados."
        },
        {
            question: "O que é engenharia reversa em segurança?",
            options: [
                "Criar novos softwares de segurança.",
                "Observar o comportamento do usuário.",
                "Analisar como um software funciona para entender ou encontrar vulnerabilidades.",
                "Hackear redes Wi-Fi públicas."
            ],
            answer: "Analisar como um software funciona para entender ou encontrar vulnerabilidades."
        }
    ];

    const initialAnswers = Array(questionBank.length).fill(null);

    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [started, setStarted] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
        setStarted(false); // volta para tela inicial
    }

    if (!started) {
        return (
            <div style={{ textAlign: 'center', marginTop: 40 }}>
                <h2>Bem-vindo ao Quiz de Cybersegurança!</h2>
                <button
                    className="restart-button"
                    onClick={() => setStarted(true)}
                    style={{ fontSize: '1.2em', padding: '16px 40px' }}
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    if (isQuizFinished) {
        return (
            <Results 
                userAnswers={userAnswers}
                questionBank={questionBank} 
                restartQuiz={restartQuiz}
            />
        );
    }

    return (
    <div>
        <h2>Pergunta {currentQuestion + 1}</h2>
        <p className="question"> {questionBank[currentQuestion].question} </p>

        {questionBank[currentQuestion].options.map((option) => (
            <button 
            key={option}
            className={"option" + (selectedAnswer === option ? " selected" : "")}
            onClick={() => handleSelectOption(option)}
            >
                {option}
            </button>
        ))}

        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0} >
                Anterior
            </button>
            <button onClick={goToNext} disabled={!selectedAnswer}>
                {currentQuestion === questionBank.length - 1 ? "Finalizar Quiz" : "Próxima"}
            </button>
        </div>
    </div>
    );
}

export default Quiz;
