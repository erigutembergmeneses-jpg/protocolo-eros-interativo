// Dados do jogo
const gameData = {
    currentScene: 0,
    affinity: 0,
    maxScenes: 7,
    choicesMade: 0,
    playerName: "Recruta",
    
    scenes: [
        {
            id: "start",
            message: "Olá. Eu sou Talhía, responsável pelos aspectos científicos do Protocolo Eros. Você parece... diferente dos outros recrutas. Vamos testar sua compatibilidade?",
            time: "19:30",
            choices: [
                {
                    text: "Estou pronto. O que preciso fazer?",
                    nextScene: "scene1",
                    affinityChange: 5
                },
                {
                    text: "Por que eu seria diferente? Explique melhor.",
                    nextScene: "scene2",
                    affinityChange: 0
                },
                {
                    text: "Estou desconfiado. Isso é seguro?",
                    nextScene: "scene3",
                    affinityChange: -5
                }
            ]
        },
        {
            id: "scene1",
            message: "Excelente atitude! O Protocolo Eros analisa compatibilidade emocional e química através de respostas subconscientes. Primeiro teste: imagine um campo aberto ao pôr do sol. O que você sente?",
            time: "19:32",
            choices: [
                {
                    text: "Paz e tranquilidade",
                    nextScene: "scene4",
                    affinityChange: 10
                },
                {
                    text: "Solidão e vazio",
                    nextScene: "scene5",
                    affinityChange: -5
                },
                {
                    text: "Expectativa... como se algo estivesse por vir",
                    nextScene: "scene6",
                    affinityChange: 15
                }
            ]
        },
        {
            id: "scene2",
            message: "Sua assinatura bioelétrica é... incomum. Mostra padrões que só vi em 0,3% da população. Isso pode significar maior sensibilidade aos estímulos do Protocolo.",
            time: "19:33",
            choices: [
                {
                    text: "Isso é bom ou ruim?",
                    nextScene: "scene4",
                    affinityChange: 5
                },
                {
                    text: "Continue, estou interessado",
                    nextScene: "scene6",
                    affinityChange: 10
                },
                {
                    text: "Preciso de mais informações técnicas",
                    nextScene: "scene5",
                    affinityChange: 0
                }
            ]
        },
        {
            id: "scene3",
            message: "Compreensível. O Protocolo tem 99,97% de segurança comprovada. Mas toda inovação traz riscos. Sua cautela mostra inteligência emocional.",
            time: "19:34",
            choices: [
                {
                    text: "Ok, vou confiar em você",
                    nextScene: "scene4",
                    affinityChange: 10
                },
                {
                    text: "Preciso ver os dados de segurança",
                    nextScene: "scene5",
                    affinityChange: -5
                },
                {
                    text: "Não me sinto confortável",
                    nextScene: "end_neutral",
                    affinityChange: -20
                }
            ]
        },
        {
            id: "scene4",
            message: "Interessante... Seus padrões neuronais mostram sincronia com os parâmetros ideais. Você é naturalmente receptivo aos estímulos empáticos do Protocolo.",
            time: "19:36",
            choices: [
                {
                    text: "Isso significa que passei no teste?",
                    nextScene: "scene7",
                    affinityChange: 10
                },
                {
                    text: "O que exatamente esses estímulos fazem?",
                    nextScene: "scene6",
                    affinityChange: 5
                },
                {
                    text: "Sinto uma conexão estranha... com você",
                    nextScene: "end_positive",
                    affinityChange: 25
                }
            ]
        },
        {
            id: "scene5",
            message: "Analisando suas respostas... Há resistência subconsciente. Seu cérebro cria barreiras defensivas. Talvez não esteja pronto para a profundidade do Protocolo.",
            time: "19:37",
            choices: [
                {
                    text: "Posso tentar novamente",
                    nextScene: "scene4",
                    affinityChange: 5
                },
                {
                    text: "Não me force a algo que não quero",
                    nextScene: "end_negative",
                    affinityChange: -15
                },
                {
                    text: "Preciso de tempo para pensar",
                    nextScene: "end_neutral",
                    affinityChange: 0
                }
            ]
        },
        {
            id: "scene6",
            message: "Notável! Suas ondas cerebrais estão se sincronizando com as minhas em tempo real. Esse nível de conexão é raríssimo. O Protocolo está revelando algo profundo...",
            time: "19:39",
            choices: [
                {
                    text: "Sinto isso também. É como se te conhecesse há tempos",
                    nextScene: "end_positive",
                    affinityChange: 30
                },
                {
                    text: "Isso me assusta um pouco",
                    nextScene: "scene7",
                    affinityChange: -5
                },
                {
                    text: "O que isso significa para o experimento?",
                    nextScene: "scene7",
                    affinityChange: 10
                }
            ]
        },
        {
            id: "scene7",
            message: "Chegamos ao estágio final. O Protocolo detectou compatibilidade acima do esperado. Mas preciso saber: você quer continuar esta conexão além do laboratório?",
            time: "19:42",
            choices: [
                {
                    text: "Sim, quero explorar essa conexão",
                    nextScene: "end_positive",
                    affinityChange: 20
                },
                {
                    text: "Prefiro manter isso profissional",
                    nextScene: "end_neutral",
                    affinityChange: 5
                },
                {
                    text: "Não, acho que devemos parar aqui",
                    nextScene: "end_negative",
                    affinityChange: -10
                }
            ]
        }
    ],
    
    endings: {
        positive: {
            title: "CONEXÃO ESTABELECIDA",
            subtitle: "Compatibilidade Extraordinária",
            text: "Talhía sorri genuinamente pela primeira vez. 'Nunca encontrei alguém com tanta sincronia... O Protocolo encontrou algo especial. Quer continuar essa conversa em outro lugar?'",
            icon: "fa-heart",
            color: "#00ff88"
        },
        neutral: {
            title: "PROTOCOLO CONCLUÍDO",
            subtitle: "Resultados Satisfatórios",
            text: "'Dados coletados com sucesso', diz Talhía com profissionalismo. 'Sua participação foi valiosa. Talvez possamos revisitar o Protocolo no futuro.'",
            icon: "fa-clipboard-check",
            color: "#6450ff"
        },
        negative: {
            title: "PROTOCOLO INTERROMPIDO",
            subtitle: "Incompatibilidade Detectada",
            text: "Talhía parece desapontada. 'Seu perfil não é adequado para os próximos estágios. O Protocolo será encerrado. Obrigada pela participação.'",
            icon: "fa-exclamation-triangle",
            color: "#ff5050"
        }
    }
};

// Elementos DOM
const elements = {
    chatContainer: document.getElementById('chat-container'),
    choicesContainer: document.getElementById('choices'),
    typingIndicator: document.getElementById('typing'),
    affinityScore: document.getElementById('affinity-score'),
    sceneCounter: document.getElementById('scene-counter'),
    progressFill: document.getElementById('progress-fill'),
    restartBtn: document.getElementById('restart-btn'),
    endingModal: document.getElementById('ending-modal'),
    closeModal: document.getElementById('close-modal'),
    restartMainBtn: document.getElementById('restart-main-btn'),
    shareBtn: document.getElementById('share-btn'),
    finalAffinity: document.getElementById('final-affinity'),
    finalAffinityBar: document.getElementById('final-affinity-bar'),
    totalChoices: document.getElementById('total-choices'),
    endingType: document.getElementById('ending-type'),
    endingTitle: document.getElementById('ending-title'),
    endingSubtitle: document.getElementById('ending-subtitle'),
    endingText: document.getElementById('ending-text'),
    endingIcon: document.getElementById('ending-icon')
};

// Inicialização
function initGame() {
    gameData.currentScene = 0;
    gameData.affinity = 0;
    gameData.choicesMade = 0;
    
    updateUI();
    showScene(gameData.scenes[0]);
    updateProgress();
    
    // Limpar conversa anterior (exceto mensagem inicial)
    elements.chatContainer.innerHTML = `
        <div class="message character initial">
            <div class="message-avatar">
                <img src="./assets/Thalía.png" alt="Talhía">
            </div>
            <div class="message-content">
                <p class="text">${gameData.scenes[0].message}</p>
                <span class="time">${gameData.scenes[0].time}</span>
            </div>
        </div>
    `;
}

// Mostrar cena
function showScene(scene) {
    elements.choicesContainer.innerHTML = '';
    
    // Mostrar indicador "digitando..."
    elements.typingIndicator.style.display = 'block';
    
    setTimeout(() => {
        elements.typingIndicator.style.display = 'none';
        
        // Criar opções
        scene.choices.forEach((choice, index) => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice-btn';
            choiceBtn.dataset.choice = index + 1;
            choiceBtn.dataset.next = choice.nextScene;
            
            choiceBtn.innerHTML = `
                <span class="choice-number">${String.fromCharCode(65 + index)}</span>
                <span class="choice-text">${choice.text}</span>
            `;
            
            choiceBtn.addEventListener('click', () => makeChoice(choice));
            elements.choicesContainer.appendChild(choiceBtn);
        });
    }, 1500);
}

// Fazer escolha
function makeChoice(choice) {
    gameData.choicesMade++;
    gameData.affinity += choice.affinityChange;
    
    // Limitar afinidade entre 0-100
    gameData.affinity = Math.max(0, Math.min(100, gameData.affinity));
    
    // Atualizar contador de cenas
    gameData.currentScene++;
    
    // Atualizar UI
    updateUI();
    updateProgress();
    
    // Adicionar mensagem do jogador (simulada)
    addPlayerMessage(choice.text);
    
    // Verificar se é um final
    if (choice.nextScene.startsWith('end_')) {
        setTimeout(() => {
            showEnding(choice.nextScene.replace('end_', ''));
        }, 1000);
        return;
    }
    
    // Encontrar próxima cena
    setTimeout(() => {
        const nextScene = gameData.scenes.find(s => s.id === choice.nextScene);
        if (nextScene) {
            addCharacterMessage(nextScene.message, nextScene.time);
            setTimeout(() => showScene(nextScene), 1000);
        }
    }, 1000);
}

// Adicionar mensagem do personagem
function addCharacterMessage(text, time) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message character';
    messageDiv.style.animationDelay = '0.3s';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <img src="./assets/Thalía.png" alt="Talhía">
        </div>
        <div class="message-content">
            <p class="text">${text}</p>
            <span class="time">${time}</span>
        </div>
    `;
    
    elements.chatContainer.appendChild(messageDiv);
    scrollToBottom();
}

// Adicionar mensagem do jogador (simulada)
function addPlayerMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message player';
    messageDiv.style.animationDelay = '0.1s';
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p class="text">${text}</p>
            <span class="time">Agora</span>
        </div>
        <div class="message-avatar">
            <i class="fas fa-user"></i>
        </div>
    `;
    
    elements.chatContainer.appendChild(messageDiv);
    scrollToBottom();
}

// Mostrar final
function showEnding(type) {
    const ending = gameData.endings[type];
    
    if (!ending) return;
    
    // Atualizar modal
    elements.endingTitle.textContent = ending.title;
    elements.endingSubtitle.textContent = ending.subtitle;
    elements.endingText.textContent = ending.text;
    elements.endingIcon.innerHTML = `<i class="fas ${ending.icon}"></i>`;
    elements.endingIcon.style.color = ending.color;
    
    elements.finalAffinity.textContent = `${gameData.affinity}%`;
    elements.finalAffinityBar.style.width = `${gameData.affinity}%`;
    elements.totalChoices.textContent = gameData.choicesMade;
    elements.endingType.textContent = type === 'positive' ? 'Positivo' : 
                                      type === 'negative' ? 'Negativo' : 'Neutro';
    
    // Mostrar modal
    elements.endingModal.classList.add('active');
    
    // Adicionar mensagem final no chat
    setTimeout(() => {
        addCharacterMessage(ending.text, "19:45");
    }, 500);
}

// Atualizar UI
function updateUI() {
    elements.affinityScore.textContent = `Afinidade: ${gameData.affinity}%`;
    elements.sceneCounter.textContent = `Cena ${Math.min(gameData.currentScene + 1, gameData.maxScenes)}/${gameData.maxScenes}`;
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = ((gameData.currentScene + 1) / gameData.maxScenes) * 100;
    elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
}

// Rolagem automática
function scrollToBottom() {
    elements.chatContainer.scrollTop = elements.chatContainer.scrollHeight;
}

// Event Listeners
elements.restartBtn.addEventListener('click', initGame);

elements.closeModal.addEventListener('click', () => {
    elements.endingModal.classList.remove('active');
});

elements.restartMainBtn.addEventListener('click', () => {
    elements.endingModal.classList.remove('active');
    setTimeout(initGame, 300);
});

elements.shareBtn.addEventListener('click', () => {
    const shareText = `Concluí o Protocolo Eros com Talhía! Afinidade: ${gameData.affinity}% - Final: ${elements.endingType.textContent}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Protocolo Eros',
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(shareText);
        alert('Resultado copiado para a área de transferência!');
    }
});

// Iniciar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', initGame);

// CSS adicional para mensagens do jogador (adicionar dinamicamente)
const style = document.createElement('style');
style.textContent = `
    .message.player {
        flex-direction: row-reverse;
        justify-content: flex-end;
    }
    
    .message.player .message-avatar {
        margin-left: 15px;
        margin-right: 0;
        width: 45px;
        height: 45px;
        background: rgba(100, 80, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid rgba(100, 80, 255, 0.5);
    }
    
    .message.player .message-avatar i {
        color: #a8a6ff;
        font-size: 18px;
    }
    
    .message.player .message-content {
        background: rgba(100, 80, 255, 0.2);
        border: 1px solid rgba(100, 80, 255, 0.4);
    }
    
    .message.player .time {
        color: #a8a6ff;
    }
`;
document.head.appendChild(style);
