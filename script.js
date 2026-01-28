// Dados da história de Thalía
const thalíaStory = {
    currentScene: "start",
    affinity: 0,
    choicesMade: 0,
    totalScenes: 7,
    scenes: {
        "start": {
            message: "Olá. Eu sou Thalía, responsável pelos aspectos científicos do Protocolo Eros. Você parece... diferente dos outros recrutas. Vamos testar sua compatibilidade?",
            choices: [
                {
                    text: "Estou pronto. O que preciso fazer?",
                    next: "scene1",
                    points: 10,
                    playerMessage: "Estou pronto. O que preciso fazer?"
                },
                {
                    text: "Por que eu seria diferente? Explique melhor.",
                    next: "scene2",
                    points: 5,
                    playerMessage: "Por que eu seria diferente? Explique melhor."
                },
                {
                    text: "Estou desconfiado. Isso é seguro?",
                    next: "scene3",
                    points: 0,
                    playerMessage: "Estou desconfiado. Isso é seguro?"
                }
            ]
        },
        "scene1": {
            message: "Excelente atitude. Primeiro, preciso medir suas respostas neurais. Observe esta sequência de símbolos... O que você sente?",
            choices: [
                {
                    text: "Uma calma estranha, como se já os conhecesse",
                    next: "scene4",
                    points: 15,
                    playerMessage: "Uma calma estranha, como se já os conhecesse"
                },
                {
                    text: "Ansiedade e um leve desconforto",
                    next: "scene5",
                    points: 5,
                    playerMessage: "Ansiedade e um leve desconforto"
                },
                {
                    text: "Nada de especial. São só símbolos",
                    next: "scene6",
                    points: 0,
                    playerMessage: "Nada de especial. São só símbolos"
                }
            ]
        },
        "scene2": {
            message: "Interessante que pergunte. Seus padrões bioenergéticos são... incomuns. Você teve experiências com fenômenos inexplicáveis?",
            choices: [
                {
                    text: "Sim, desde criança vejo coisas",
                    next: "scene4",
                    points: 20,
                    playerMessage: "Sim, desde criança vejo coisas"
                },
                {
                    text: "Não, minha vida sempre foi normal",
                    next: "scene5",
                    points: 5,
                    playerMessage: "Não, minha vida sempre foi normal"
                },
                {
                    text: "Por que isso importa?",
                    next: "scene6",
                    points: -5,
                    playerMessage: "Por que isso importa?"
                }
            ]
        },
        "scene3": {
            message: "Segurança é relativa. O Protocolo lida com realidades alternativas. Mas posso garantir que sua consciência permanecerá intacta... provavelmente.",
            choices: [
                {
                    text: "Provavelmente? Quero garantias reais",
                    next: "scene5",
                    points: -10,
                    playerMessage: "Provavelmente? Quero garantias reais"
                },
                {
                    text: "Entendo os riscos. Vamos continuar",
                    next: "scene4",
                    points: 10,
                    playerMessage: "Entendo os riscos. Vamos continuar"
                },
                {
                    text: "Preciso pensar sobre isso",
                    next: "ending_neutral",
                    points: 0,
                    playerMessage: "Preciso pensar sobre isso"
                }
            ]
        },
        "scene4": {
            message: "Fascinante! Suas ondas cerebrais estão sincronizando com a matriz Eros. Você é mais receptivo do que imaginei. Está disposto a avançar para o próximo nível?",
            choices: [
                {
                    text: "Sim, quero saber até onde isso vai",
                    next: "scene7_positive",
                    points: 20,
                    playerMessage: "Sim, quero saber até onde isso vai"
                },
                {
                    text: "Apenas se você me explicar tudo primeiro",
                    next: "scene7_cautious",
                    points: 10,
                    playerMessage: "Apenas se você me explicar tudo primeiro"
                },
                {
                    text: "Acho que já chega por hoje",
                    next: "ending_positive",
                    points: 5,
                    playerMessage: "Acho que já chega por hoje"
                }
            ]
        },
        "scene5": {
            message: "Respostas típicas. Talvez eu tenha superestimado seu potencial. Vamos concluir os testes básicos e encerrar por hoje.",
            choices: [
                {
                    text: "Posso tentar novamente, me dê outra chance",
                    next: "scene7_cautious",
                    points: 10,
                    playerMessage: "Posso tentar novamente, me dê outra chance"
                },
                {
                    text: "Tudo bem, talvez outro dia",
                    next: "ending_neutral",
                    points: 5,
                    playerMessage: "Tudo bem, talvez outro dia"
                },
                {
                    text: "Esse projeto parece perigoso, quero sair",
                    next: "ending_negative",
                    points: -10,
                    playerMessage: "Esse projeto parece perigoso, quero sair"
                }
            ]
        },
        "scene6": {
            message: "Cético. Entendo. A ciência exige evidências. Mas alguns fenômenos transcendem a lógica comum. Vou mostrar algo...",
            choices: [
                {
                    text: "Mostre. Preciso ver para crer",
                    next: "scene7_cautious",
                    points: 5,
                    playerMessage: "Mostre. Preciso ver para crer"
                },
                {
                    text: "Não, já vi o suficiente",
                    next: "ending_neutral",
                    points: 0,
                    playerMessage: "Não, já vi o suficiente"
                },
                {
                    text: "Isso parece pseudociência",
                    next: "ending_negative",
                    points: -15,
                    playerMessage: "Isso parece pseudociência"
                }
            ]
        },
        "scene7_positive": {
            message: "Perfeito! Sua mente está aberta às possibilidades. O Protocolo Eros não é apenas um experimento... é um portal. E você pode ser a chave. Quer saber a verdade?",
            choices: [
                {
                    text: "Sim, mostre-me tudo",
                    next: "ending_truth",
                    points: 30,
                    playerMessage: "Sim, mostre-me tudo"
                },
                {
                    text: "Estou com medo, mas quero continuar",
                    next: "ending_positive",
                    points: 15,
                    playerMessage: "Estou com medo, mas quero continuar"
                },
                {
                    text: "Não, isso está indo longe demais",
                    next: "ending_cautious",
                    points: 5,
                    playerMessage: "Não, isso está indo longe demais"
                }
            ]
        },
        "scene7_cautious": {
            message: "Prudência é virtude na ciência. O Protocolo busca conectar consciências através das dimensões. Você está disposto a tentar uma conexão superficial?",
            choices: [
                {
                    text: "Sim, mas com limites claros",
                    next: "ending_positive",
                    points: 10,
                    playerMessage: "Sim, mas com limites claros"
                },
                {
                    text: "Apenas observarei, sem participar",
                    next: "ending_neutral",
                    points: 5,
                    playerMessage: "Apenas observarei, sem participar"
                },
                {
                    text: "Melhor não arriscar",
                    next: "ending_neutral",
                    points: 0,
                    playerMessage: "Melhor não arriscar"
                }
            ]
        }
    },
    
    endings: {
        "ending_truth": {
            title: "A VERDADE REVELADA",
            subtitle: "Chave do Protocolo Encontrada",
            text: "Thalía revela que você não é um mero participante, mas uma consciência antiga que o Protocolo buscava. Sua afinidade é de 98.7% - a mais alta já registrada. Ela oferece uma parceria para explorar realidades além da compreensão humana. 'O universo é maior do que sonhamos', ela sussurra, enquanto portais se abrem ao seu redor.",
            affinityThreshold: 80,
            icon: "fas fa-infinity"
        },
        "ending_positive": {
            title: "COMPATIBILIDE ALTA",
            subtitle: "Potencial Confirmado",
            text: "Thalía sorri, raramente visto em seus relatórios. 'Você tem potencial excepcional'. Seus dados serão estudados e você é convidado para a próxima fase do Protocolo. Ela entrega um dispositivo estranho: 'Use quando estiver pronto para ver além'. A jornada apenas começou.",
            affinityThreshold: 50,
            icon: "fas fa-atom"
        },
        "ending_cautious": {
            title: "INTERAÇÃO MODERADA",
            subtitle: "Reserva Entendida",
            text: "'Respeito sua cautela', diz Thalía enquanto arquiva seus dados. 'O Protocolo não é para todos'. Você recebe um acesso limitado aos arquivos e pode retornar quando quiser. Ela parece genuinamente esperançosa de que você mude de ideia no futuro.",
            affinityThreshold: 30,
            icon: "fas fa-shield-alt"
        },
        "ending_neutral": {
            title: "AVALIAÇÃO PADRÃO",
            subtitle: "Resultados Inconclusivos",
            text: "Thalía anota meticulosamente em sua prancheta digital. 'Respostas dentro dos parâmetros normais'. Você é agradecido por sua participação e dispensado. Ao sair, sente seu olhar fixo em você, como se esperasse algo mais... mas o momento passou.",
            affinityThreshold: 0,
            icon: "fas fa-clipboard-check"
        },
        "ending_negative": {
            title: "INCOMPATIBILIDADE",
            subtitle: "Protocolo Interrompido",
            text: "Thalía suspira, desligando seus equipamentos. 'Algumas mentes não estão preparadas'. Você é conduzido para fora do laboratório com uma leve sensação de vazio. Dias depois, recebe um envelope sem remetente contendo um único símbolo do Protocolo... que brilha suavemente no escuro.",
            affinityThreshold: -20,
            icon: "fas fa-ban"
        }
    }
};

// Elementos DOM
const chatContainer = document.getElementById('chat-container');
const choicesContainer = document.getElementById('choices');
const affinityScore = document.getElementById('affinity-score');
const sceneCounter = document.getElementById('scene-counter');
const progressFill = document.getElementById('progress-fill');
const typingIndicator = document.getElementById('typing');
const restartBtn = document.getElementById('restart-btn');
const endingModal = document.getElementById('ending-modal');
const finalAffinityBar = document.getElementById('final-affinity-bar');
const finalAffinity = document.getElementById('final-affinity');
const totalChoices = document.getElementById('total-choices');
const endingType = document.getElementById('ending-type');
const endingTitle = document.getElementById('ending-title');
const endingSubtitle = document.getElementById('ending-subtitle');
const endingText = document.getElementById('ending-text');
const endingIcon = document.getElementById('ending-icon');
const closeModal = document.getElementById('close-modal');
const restartMainBtn = document.getElementById('restart-main-btn');
const shareBtn = document.getElementById('share-btn');

// Estado do jogo
let gameState = { ...thalíaStory };
let sceneHistory = ["start"];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    setupEventListeners();
    
    // Mostrar mensagem inicial após um breve delay
    setTimeout(() => {
        typingIndicator.style.display = 'none';
    }, 2000);
});

// Configurar listeners de eventos
function setupEventListeners() {
    restartBtn.addEventListener('click', restartGame);
    closeModal.addEventListener('click', () => {
        endingModal.style.display = 'none';
    });
    restartMainBtn.addEventListener('click', () => {
        endingModal.style.display = 'none';
        restartGame();
    });
    
    shareBtn.addEventListener('click', shareResults);
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target === endingModal) {
            endingModal.style.display = 'none';
        }
    });
}

// Adicionar mensagem do jogador
function addPlayerMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message player';
    messageDiv.innerHTML = `
        <div class="message-content">
            <p class="text">${text}</p>
            <span class="time">${getCurrentTime()}</span>
        </div>
        <div class="message-avatar">
            <img src="https://ui-avatars.com/api/?name=Player&background=1e90ff&color=fff" alt="Você">
        </div>
    `;
    
    chatContainer.appendChild(messageDiv);
    scrollToBottom();
}

// Adicionar mensagem da personagem
function addCharacterMessage(text) {
    typingIndicator.style.display = 'block';
    
    // Simular digitação
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message character';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <img src="assets/thalía-avatar.jpg" alt="Thaía">
            </div>
            <div class="message-content">
                <p class="text">${text}</p>
                <span class="time">${getCurrentTime()}</span>
            </div>
        `;
        
        chatContainer.appendChild(messageDiv);
        scrollToBottom();
        
        // Adicionar efeito de digitação à última mensagem
        const lastMessage = messageDiv.querySelector('.text');
        lastMessage.classList.add('typewriter');
    }, 1500);
}

// Atualizar opções de escolha
function updateChoices(sceneKey) {
    const scene = gameState.scenes[sceneKey];
    
    if (!scene) {
        showEnding();
        return;
    }
    
    // Limpar escolhas anteriores
    choicesContainer.innerHTML = '';
    
    // Adicionar novas escolhas
    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.dataset.choice = index + 1;
        button.dataset.next = choice.next;
        
        const letters = ['A', 'B', 'C'];
        button.innerHTML = `
            <span class="choice-number">${letters[index]}</span>
            <span class="choice-text">${choice.text}</span>
        `;
        
        button.addEventListener('click', () => makeChoice(choice));
        choicesContainer.appendChild(button);
    });
}

// Fazer uma escolha
function makeChoice(choice) {
    // Adicionar mensagem do jogador
    addPlayerMessage(choice.playerMessage);
    
    // Atualizar afinidade
    gameState.affinity += choice.points;
    gameState.choicesMade++;
    sceneHistory.push(choice.next);
    
    // Atualizar UI
    updateProgress();
    
    // Mostrar mensagem da personagem após delay
    setTimeout(() => {
        const nextScene = gameState.scenes[choice.next];
        
        if (nextScene) {
            addCharacterMessage(nextScene.message);
            updateChoices(choice.next);
        } else {
            // Se não houver próxima cena, é um final
            showEnding();
        }
    }, 1000);
}

// Mostrar final
function showEnding() {
    // Determinar qual final com base na afinidade
    let endingKey = "ending_neutral";
    
    // Encontrar o final apropriado
    for (const [key, ending] of Object.entries(gameState.endings)) {
        if (gameState.affinity >= ending.affinityThreshold) {
            endingKey = key;
        }
    }
    
    const ending = gameState.endings[endingKey];
    
    // Mensagem final da Thaía baseada no final
    let finalMessage = "";
    switch(endingKey) {
        case "ending_truth":
            finalMessage = "O véu se levantou. Você sempre esteve destinado a estar aqui. Bem-vindo ao verdadeiro Protocolo Eros.";
            break;
        case "ending_positive":
            finalMessage = "Seu potencial é notável. Espero que escolha explorá-lo comigo.";
            break;
        case "ending_cautious":
            finalMessage = "Sua prudência é compreensível. O Protocolo estará aqui quando você estiver pronto.";
            break;
        case "ending_neutral":
            finalMessage = "Participação registrada. Obrigada por seu tempo.";
            break;
        case "ending_negative":
            finalMessage = "Algumas portas são melhor deixadas fechadas. Adeus.";
            break;
    }
    
    addCharacterMessage(finalMessage);
    
    // Atualizar modal após delay
    setTimeout(() => {
        updateEndingModal(ending, endingKey);
        endingModal.style.display = 'flex';
    }, 2000);
}

// Atualizar modal de final
function updateEndingModal(ending, endingKey) {
    // Calcular percentual de afinidade (0-100%)
    const affinityPercent = Math.min(Math.max(gameState.affinity + 50, 0), 100);
    
    // Atualizar conteúdo
    endingTitle.textContent = ending.title;
    endingSubtitle.textContent = ending.subtitle;
    endingText.textContent = ending.text;
    endingIcon.innerHTML = `<i class="${ending.icon}"></i>`;
    
    // Atualizar estatísticas
    finalAffinity.textContent = `${affinityPercent}%`;
    finalAffinityBar.style.width = `${affinityPercent}%`;
    totalChoices.textContent = gameState.choicesMade;
    endingType.textContent = endingKey.split('_')[1].toUpperCase();
    
    // Efeito visual baseado no final
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.borderColor = getEndingColor(endingKey);
}

// Obter cor baseada no tipo de final
function getEndingColor(endingKey) {
    switch(endingKey) {
        case "ending_truth": return "#00ffaa";
        case "ending_positive": return "#ff69b4";
        case "ending_cautious": return "#ffd700";
        case "ending_neutral": return "#aaa";
        case "ending_negative": return "#ff4444";
        default: return "#ff69b4";
    }
}

// Atualizar barra de progresso e contadores
function updateProgress() {
    const sceneIndex = sceneHistory.length;
    const progressPercent = (sceneIndex / gameState.totalScenes) * 100;
    
    // Atualizar elementos
    affinityScore.textContent = `Afinidade: ${gameState.affinity > 0 ? '+' : ''}${gameState.affinity}`;
    sceneCounter.textContent = `Cena ${sceneIndex}/${gameState.totalScenes}`;
    progressFill.style.width = `${progressPercent}%`;
    
    // Mudar cor da afinidade baseada no valor
    if (gameState.affinity >= 30) {
        affinityScore.style.color = "#00ffaa";
    } else if (gameState.affinity >= 10) {
        affinityScore.style.color = "#ffd700";
    } else if (gameState.affinity >= 0) {
        affinityScore.style.color = "#aaa";
    } else {
        affinityScore.style.color = "#ff4444";
    }
}

// Compartilhar resultados
function shareResults() {
    const affinityPercent = Math.min(Math.max(gameState.affinity + 50, 0), 100);
    const shareText = `Concluí o diálogo com Thaía no Protocolo Eros e alcancei ${affinityPercent}% de afinidade!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Protocolo Eros - Resultado',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback para copiar para área de transferência
        navigator.clipboard.writeText(shareText + " " + window.location.href);
        alert("Resultado copiado para a área de transferência!");
    }
}

// Reiniciar jogo
function restartGame() {
    gameState = { ...thaiaStory };
    sceneHistory = ["start"];
    
    // Limpar conversa
    chatContainer.innerHTML = `
        <div class="message character initial">
            <div class="message-avatar">
                <img src="assets/thaia-avatar.jpg" alt="Thaía">
            </div>
            <div class="message-content">
                <p class="text">Olá. Eu sou Thalía, responsável pelos aspectos científicos do Protocolo Eros. Você parece... diferente dos outros recrutas. Vamos testar sua compatibilidade?</p>
                <span class="time">19:30</span>
            </div>
        </div>
    `;
    
    // Resetar escolhas
    updateChoices("start");
    updateProgress();
    
    // Resetar indicador de digitação
    typingIndicator.style.display = 'block';
    setTimeout(() => {
        typingIndicator.style.display = 'none';
    }, 2000);
    
    scrollToBottom();
}

// Funções utilitárias
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

function scrollToBottom() {
    setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
}

// Inicializar escolhas
updateChoices("start");
