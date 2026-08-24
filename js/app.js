/**
 * GeoAventura Kids - Motor Principal do Jogo (app.js)
 * Adaptado para os Capítulos 4, 5 e 6 da Apostila de Geografia (3º Ano)
 */

class GeoGame {
  constructor() {
    this.playerName = "Pequeno(a) Explorador(a)";
    this.stars = 0;
    this.completedIslands = new Set();
    this.currentIsland = null;
    this.isSimulado = false;
    
    // Quiz state
    this.quizQuestions = [];
    this.currentQuestionIdx = 0;
    this.answeredCorrectly = false;
    this.islandScore = 0;

    // Minigame states
    this.gamesIdx = 0;
    this.peoplesIdx = 0;
    this.wordsIdx = 0;

    // Confetti
    this.confettiCanvas = document.getElementById('confettiCanvas');
    this.confettiCtx = this.confettiCanvas.getContext('2d');
    this.confettiParticles = [];
    this.confettiAnimId = null;

    this.init();
  }

  init() {
    this.loadStorage();
    this.bindEvents();
    this.setupConfettiResize();
    this.renderIslands();
    this.updateStatsUI();
  }

  loadStorage() {
    try {
      const savedName = localStorage.getItem('geo_player_name');
      const savedStars = localStorage.getItem('geo_stars');
      const savedIslands = localStorage.getItem('geo_completed_islands');

      if (savedName) this.playerName = savedName;
      if (savedStars) this.stars = parseInt(savedStars, 10) || 0;
      if (savedIslands) {
        const arr = JSON.parse(savedIslands);
        this.completedIslands = new Set(arr);
      }
    } catch (e) {
      console.warn("Storage não disponível", e);
    }
  }

  saveStorage() {
    try {
      localStorage.setItem('geo_player_name', this.playerName);
      localStorage.setItem('geo_stars', this.stars.toString());
      localStorage.setItem('geo_completed_islands', JSON.stringify(Array.from(this.completedIslands)));
    } catch (e) {
      console.warn("Erro ao salvar", e);
    }
  }

  bindEvents() {
    // Top nav & som
    document.getElementById('btnGoHome').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showScreen('screenMap');
    });

    document.getElementById('btnSoundToggle').addEventListener('click', (e) => {
      const isMuted = window.soundSystem.toggleMute();
      e.currentTarget.textContent = isMuted ? '🔇' : '🔊';
    });

    document.getElementById('btnMascotHelp').addEventListener('click', () => {
      window.soundSystem.playHint();
      window.speechSystem.speak("Oi! Eu sou o Tico e esta é a Lina. Vamos explorar as lendas, os povos tradicionais e as heranças culturais do Brasil para você brilhar na prova!");
    });

    // Iniciar Aventura
    const startBtn = document.getElementById('btnStartAdventure');
    const nameInput = document.getElementById('playerNameInput');

    const handleStart = () => {
      window.soundSystem.playClick();
      const val = nameInput.value.trim();
      if (val) this.playerName = val;
      this.saveStorage();
      this.updateStatsUI();
      this.showScreen('screenMap');
    };

    startBtn.addEventListener('click', handleStart);
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleStart();
    });

    // Simulado
    document.getElementById('btnStartSimulado').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.startSimulado();
    });

    // Quiz Botões
    document.getElementById('btnBackToMap').addEventListener('click', () => {
      window.soundSystem.playClick();
      window.speechSystem.stop();
      this.showScreen('screenMap');
    });

    document.getElementById('btnReadQuestion').addEventListener('click', () => {
      this.readCurrentQuestion();
    });

    document.getElementById('btnShowHint').addEventListener('click', () => {
      this.showHint();
    });

    document.getElementById('btnNextQuestion').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.nextQuestion();
    });

    // Minijogo 1: Origem das Brincadeiras
    document.getElementById('btnGamesBackMap').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showScreen('screenMap');
    });

    document.getElementById('btnGamesNext').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.nextGamesChallenge();
    });

    // Minijogo 2: Povos Tradicionais
    document.getElementById('btnPeoplesBackMap').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showScreen('screenMap');
    });

    document.querySelectorAll('.peoples-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-target');
        this.handlePeoplesChoice(target, e.currentTarget);
      });
    });

    document.getElementById('btnPeoplesNext').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.nextPeoplesChallenge();
    });

    // Minijogo 3: Detetive das Palavras
    document.getElementById('btnWordsBackMap').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showScreen('screenMap');
    });

    document.getElementById('btnWordIndigena').addEventListener('click', () => {
      this.handleWordsChoice('indigena');
    });

    document.getElementById('btnWordAfricana').addEventListener('click', () => {
      this.handleWordsChoice('africana');
    });

    document.getElementById('btnWordsNext').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.nextWordsChallenge();
    });

    // Vitória & Certificado
    document.getElementById('btnVictoryContinue').addEventListener('click', () => {
      window.soundSystem.playClick();
      if (this.completedIslands.size >= ISLANDS_DATA.length) {
        this.showCertificate();
      } else {
        this.showScreen('screenMap');
      }
    });

    document.getElementById('btnViewCertificate').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showCertificate();
    });

    document.getElementById('btnCertBackToMap').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showScreen('screenMap');
    });

    document.getElementById('btnPrintCertificate').addEventListener('click', () => {
      window.soundSystem.playClick();
      window.print();
    });
  }

  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateStatsUI() {
    document.getElementById('playerGreetingText').textContent = `Olá, ${this.playerName}! 🎒`;
    document.getElementById('totalStarsCount').textContent = this.stars;
    document.getElementById('certStudentName').textContent = this.playerName;

    if (this.completedIslands.size > 0) {
      document.getElementById('btnViewCertificate').style.display = 'inline-flex';
    }
  }

  renderIslands() {
    const container = document.getElementById('islandsGridContainer');
    container.innerHTML = '';

    ISLANDS_DATA.forEach(island => {
      const isDone = this.completedIslands.has(island.id);
      const card = document.createElement('div');
      card.className = `island-card ${isDone ? 'completed' : ''}`;
      card.innerHTML = `
        <div class="island-chapter-tag">${island.chapter}</div>
        <div class="island-icon">${island.icon}</div>
        <h3 class="island-title">${island.title}</h3>
        <p class="island-subtitle">${island.subtitle}</p>
        <div class="island-badge-status">
          ${isDone ? `<span>✅ ${island.badge} Conquistada!</span>` : `<span>🎯 Desafio Disponível</span>`}
        </div>
      `;

      card.addEventListener('click', () => {
        window.soundSystem.playClick();
        this.startIsland(island);
      });

      container.appendChild(card);
    });
  }

  startIsland(island) {
    this.currentIsland = island;
    this.isSimulado = false;

    // Se a ilha tem minijogo específico antes do quiz:
    if (island.hasMinigame === 'brincadeiras') {
      this.startGamesOriginMinigame();
      return;
    }

    if (island.hasMinigame === 'povos') {
      this.startPeoplesMinigame();
      return;
    }

    if (island.hasMinigame === 'palavras') {
      this.startWordsMinigame();
      return;
    }

    // Caso padrão: Quiz direto
    this.quizQuestions = [...island.questions];
    this.currentQuestionIdx = 0;
    this.islandScore = 0;
    this.loadQuestion();
    this.showScreen('screenQuiz');
  }

  startSimulado() {
    this.isSimulado = true;
    this.currentIsland = {
      id: "simulado",
      title: "Grande Simulado da Prova (Capítulos 4, 5 e 6)",
      badge: "Campeão do Simulado Cultural",
      badgeIcon: "🏆",
      description: "Você revisou com louvor todos os conteúdos da apostila para a prova de geografia!"
    };

    // Coleta 2 a 3 perguntas de cada ilha temática
    let mixed = [];
    ISLANDS_DATA.forEach(isl => {
      const shuffled = [...isl.questions].sort(() => 0.5 - Math.random());
      mixed.push(...shuffled.slice(0, 3));
    });

    this.quizQuestions = mixed;
    this.currentQuestionIdx = 0;
    this.islandScore = 0;
    this.loadQuestion();
    this.showScreen('screenQuiz');
  }

  loadQuestion() {
    this.answeredCorrectly = false;
    const q = this.quizQuestions[this.currentQuestionIdx];
    const total = this.quizQuestions.length;

    document.getElementById('quizCategoryTag').textContent = `${this.currentIsland.badgeIcon || '🗺️'} ${this.currentIsland.title}`;
    document.getElementById('quizQuestionCount').textContent = `Pergunta ${this.currentQuestionIdx + 1}/${total}`;
    
    const progressPct = ((this.currentQuestionIdx) / total) * 100;
    document.getElementById('quizProgressBar').style.width = `${progressPct}%`;

    document.getElementById('questionIcon').textContent = q.icon || '📜';
    document.getElementById('questionTitleText').textContent = q.question;

    const feedbackBox = document.getElementById('feedbackBox');
    feedbackBox.style.display = 'none';
    feedbackBox.className = 'feedback-box';

    document.getElementById('btnNextQuestion').style.display = 'none';

    // Renderizar Opções
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
      `;

      btn.addEventListener('click', () => {
        this.handleQuizAnswer(idx, btn);
      });

      optionsContainer.appendChild(btn);
    });

    // Fala automática da pergunta
    this.readCurrentQuestion();
  }

  readCurrentQuestion() {
    const q = this.quizQuestions[this.currentQuestionIdx];
    const textToRead = `${q.question}. Opções: ${q.options.join(', ')}`;
    window.speechSystem.speak(textToRead);
  }

  handleQuizAnswer(selectedIdx, btnElement) {
    if (this.answeredCorrectly) return;

    const q = this.quizQuestions[this.currentQuestionIdx];
    const isCorrect = (selectedIdx === q.correct);
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackMascot = document.getElementById('feedbackMascot');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');

    if (isCorrect) {
      this.answeredCorrectly = true;
      this.islandScore++;
      this.stars += 2;
      this.saveStorage();
      this.updateStatsUI();

      btnElement.classList.add('correct-choice');
      window.soundSystem.playCorrect();
      this.triggerConfetti();

      // Desabilita botões
      document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

      feedbackBox.className = 'feedback-box correct';
      feedbackMascot.textContent = '🦜✨';
      feedbackTitle.textContent = '🎉 Resposta Exata! Muito bem!';
      feedbackText.innerHTML = `<strong>Você sabia?</strong> ${q.explanation}`;
      feedbackBox.style.display = 'flex';

      document.getElementById('btnNextQuestion').style.display = 'inline-flex';

      window.speechSystem.speak(`Muito bem! Resposta correta! ${q.explanation}`);
    } else {
      btnElement.classList.add('wrong-choice');
      window.soundSystem.playTryAgain();

      feedbackBox.className = 'feedback-box hint';
      feedbackMascot.textContent = '🐾💡';
      feedbackTitle.textContent = 'Quase lá! Veja a dica da Lina:';
      feedbackText.textContent = q.hint;
      feedbackBox.style.display = 'flex';

      window.speechSystem.speak(`Quase lá! Dica: ${q.hint}`);
    }
  }

  showHint() {
    const q = this.quizQuestions[this.currentQuestionIdx];
    window.soundSystem.playHint();

    const feedbackBox = document.getElementById('feedbackBox');
    feedbackBox.className = 'feedback-box hint';
    document.getElementById('feedbackMascot').textContent = '🦜💡';
    document.getElementById('feedbackTitle').textContent = 'Dica Amiga do Tico:';
    document.getElementById('feedbackText').textContent = q.hint;
    feedbackBox.style.display = 'flex';

    window.speechSystem.speak(`Dica do Tico: ${q.hint}`);
  }

  nextQuestion() {
    this.currentQuestionIdx++;
    if (this.currentQuestionIdx < this.quizQuestions.length) {
      this.loadQuestion();
    } else {
      this.finishIsland();
    }
  }

  finishIsland() {
    window.soundSystem.playVictory();
    this.triggerConfetti();

    this.completedIslands.add(this.currentIsland.id);
    this.stars += 5; // Bônus de conclusão
    this.saveStorage();
    this.renderIslands();
    this.updateStatsUI();

    document.getElementById('victoryTitle').textContent = `Sensacional, ${this.playerName}! 🌟`;
    document.getElementById('victoryMsg').textContent = `Você completou com sucesso todos os desafios de: ${this.currentIsland.title}!`;
    document.getElementById('rewardBadgeIcon').textContent = this.currentIsland.badgeIcon || '🏆';
    document.getElementById('rewardBadgeTitle').textContent = `Medalha ${this.currentIsland.badge || 'Explorador Cultural'}`;
    document.getElementById('rewardBadgeDesc').textContent = this.currentIsland.description || 'Conquista cultural concluída!';

    this.showScreen('screenVictory');
  }

  /* ========================================================
     Minijogo 1: Origem das Brincadeiras (Capítulo 4)
     ======================================================== */
  startGamesOriginMinigame() {
    this.gamesIdx = 0;
    this.loadGamesStep();
    this.showScreen('screenGamesOrigin');
  }

  loadGamesStep() {
    const item = GAMES_ORIGIN_CHALLENGES[this.gamesIdx];
    document.getElementById('gamesProgressText').textContent = `Brincadeira ${this.gamesIdx + 1}/${GAMES_ORIGIN_CHALLENGES.length}`;
    document.getElementById('gamesToyName').textContent = item.toy;
    document.getElementById('gamesFeedbackBox').style.display = 'none';
    document.getElementById('btnGamesNext').style.display = 'none';

    const container = document.getElementById('gamesOptionsContainer');
    container.innerHTML = '';

    item.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-text" style="font-size: 1.15rem; width: 100%; text-align: center;">${opt.name}</span>`;

      btn.addEventListener('click', () => {
        this.handleGamesChoice(opt, btn, item);
      });

      container.appendChild(btn);
    });

    window.speechSystem.speak(`Em qual cultura ou país foi inventada a brincadeira: ${item.toy}?`);
  }

  handleGamesChoice(opt, btnElement, currentChallenge) {
    const feedbackBox = document.getElementById('gamesFeedbackBox');
    const feedbackTitle = document.getElementById('gamesFeedbackTitle');
    const feedbackText = document.getElementById('gamesFeedbackText');
    const feedbackMascot = document.getElementById('gamesFeedbackMascot');

    if (opt.correct) {
      btnElement.classList.add('correct-choice');
      window.soundSystem.playCorrect();
      this.triggerConfetti();
      this.stars += 2;
      this.updateStatsUI();

      // Desabilita opções
      document.querySelectorAll('#gamesOptionsContainer .option-btn').forEach(b => b.disabled = true);

      feedbackBox.className = 'feedback-box correct';
      feedbackMascot.textContent = '🦜🎉';
      feedbackTitle.textContent = 'Perfeito!';
      feedbackText.textContent = currentChallenge.explanation;
      feedbackBox.style.display = 'flex';

      document.getElementById('btnGamesNext').style.display = 'inline-flex';
      window.speechSystem.speak(`Perfeito! ${currentChallenge.explanation}`);
    } else {
      btnElement.classList.add('wrong-choice');
      window.soundSystem.playTryAgain();

      feedbackBox.className = 'feedback-box hint';
      feedbackMascot.textContent = '🐾💡';
      feedbackTitle.textContent = 'Pense um pouquinho:';
      feedbackText.textContent = currentChallenge.hint;
      feedbackBox.style.display = 'flex';

      window.speechSystem.speak(currentChallenge.hint);
    }
  }

  nextGamesChallenge() {
    this.gamesIdx++;
    if (this.gamesIdx < GAMES_ORIGIN_CHALLENGES.length) {
      this.loadGamesStep();
    } else {
      // Após o minijogo, vai para o quiz da Ilha do Folclore
      this.quizQuestions = [...this.currentIsland.questions];
      this.currentQuestionIdx = 0;
      this.islandScore = 0;
      this.loadQuestion();
      this.showScreen('screenQuiz');
    }
  }

  /* ========================================================
     Minijogo 2: Identificador de Povos Tradicionais (Capítulo 5)
     ======================================================== */
  startPeoplesMinigame() {
    this.peoplesIdx = 0;
    this.loadPeoplesStep();
    this.showScreen('screenPeoplesGame');
  }

  loadPeoplesStep() {
    const item = PEOPLES_CHALLENGES[this.peoplesIdx];
    document.getElementById('peoplesProgressText').textContent = `Desafio ${this.peoplesIdx + 1}/${PEOPLES_CHALLENGES.length}`;
    document.getElementById('peoplesDescriptionText').textContent = item.description;
    document.getElementById('peoplesFeedbackBox').style.display = 'none';
    document.getElementById('btnPeoplesNext').style.display = 'none';

    document.querySelectorAll('.peoples-btn').forEach(b => {
      b.className = 'peoples-btn';
      b.disabled = false;
    });

    window.speechSystem.speak(item.description);
  }

  handlePeoplesChoice(selectedTarget, btnElement) {
    const item = PEOPLES_CHALLENGES[this.peoplesIdx];
    const feedbackBox = document.getElementById('peoplesFeedbackBox');
    const feedbackTitle = document.getElementById('peoplesFeedbackTitle');
    const feedbackText = document.getElementById('peoplesFeedbackText');

    if (selectedTarget === item.correctTarget) {
      btnElement.classList.add('correct-choice');
      window.soundSystem.playCorrect();
      this.triggerConfetti();
      this.stars += 2;
      this.updateStatsUI();

      document.querySelectorAll('.peoples-btn').forEach(b => b.disabled = true);

      feedbackBox.className = 'feedback-box correct';
      document.getElementById('peoplesFeedbackMascot').textContent = '🌿✨';
      feedbackTitle.textContent = `Acertou! São os ${item.targetName}!`;
      feedbackText.textContent = item.explanation;
      feedbackBox.style.display = 'flex';

      document.getElementById('btnPeoplesNext').style.display = 'inline-flex';
      window.speechSystem.speak(`Acertou! ${item.explanation}`);
    } else {
      btnElement.classList.add('wrong-choice');
      window.soundSystem.playTryAgain();

      feedbackBox.className = 'feedback-box hint';
      document.getElementById('peoplesFeedbackMascot').textContent = '🐾💡';
      feedbackTitle.textContent = 'Quase lá! Veja a dica:';
      feedbackText.textContent = `Preste atenção nas palavras-chave do texto (rios, mar, látex, quilombos ou floresta)!`;
      feedbackBox.style.display = 'flex';

      window.speechSystem.speak(`Quase lá! Preste atenção no modo de vida descrito no texto!`);
    }
  }

  nextPeoplesChallenge() {
    this.peoplesIdx++;
    if (this.peoplesIdx < PEOPLES_CHALLENGES.length) {
      this.loadPeoplesStep();
    } else {
      // Após o minijogo, vai para o quiz da Ilha dos Povos Tradicionais
      this.quizQuestions = [...this.currentIsland.questions];
      this.currentQuestionIdx = 0;
      this.islandScore = 0;
      this.loadQuestion();
      this.showScreen('screenQuiz');
    }
  }

  /* ========================================================
     Minijogo 3: Detetive das Palavras (Capítulo 6)
     ======================================================== */
  startWordsMinigame() {
    this.wordsIdx = 0;
    this.loadWordsStep();
    this.showScreen('screenWordsGame');
  }

  loadWordsStep() {
    const item = WORDS_CHALLENGES[this.wordsIdx];
    document.getElementById('wordsProgressText').textContent = `Palavra ${this.wordsIdx + 1}/${WORDS_CHALLENGES.length}`;
    document.getElementById('wordsCurrentItem').textContent = item.word;
    document.getElementById('wordsFeedbackBox').style.display = 'none';
    document.getElementById('btnWordsNext').style.display = 'none';

    window.speechSystem.speak(`A palavra ${item.word} tem origem Indígena Tupi ou Africana?`);
  }

  handleWordsChoice(selectedOrigin) {
    const item = WORDS_CHALLENGES[this.wordsIdx];
    const feedbackBox = document.getElementById('wordsFeedbackBox');
    const feedbackTitle = document.getElementById('wordsFeedbackTitle');
    const feedbackText = document.getElementById('wordsFeedbackText');

    if (selectedOrigin === item.origin) {
      window.soundSystem.playCorrect();
      this.triggerConfetti();
      this.stars += 2;
      this.updateStatsUI();

      feedbackBox.className = 'feedback-box correct';
      document.getElementById('wordsFeedbackMascot').textContent = '🥁✨';
      feedbackTitle.textContent = `Exato! Origem ${item.originName}!`;
      feedbackText.textContent = item.hint;
      feedbackBox.style.display = 'flex';

      document.getElementById('btnWordsNext').style.display = 'inline-flex';
      window.speechSystem.speak(`Exato! Origem ${item.originName}! ${item.hint}`);
    } else {
      window.soundSystem.playTryAgain();

      feedbackBox.className = 'feedback-box hint';
      document.getElementById('wordsFeedbackMascot').textContent = '🦜💡';
      feedbackTitle.textContent = 'Dica do Tico:';
      feedbackText.textContent = item.hint;
      feedbackBox.style.display = 'flex';

      window.speechSystem.speak(`Dica: ${item.hint}`);
    }
  }

  nextWordsChallenge() {
    this.wordsIdx++;
    if (this.wordsIdx < WORDS_CHALLENGES.length) {
      this.loadWordsStep();
    } else {
      // Após o minijogo, vai para o quiz da Ilha de Palavras e Sabores
      this.quizQuestions = [...this.currentIsland.questions];
      this.currentQuestionIdx = 0;
      this.islandScore = 0;
      this.loadQuestion();
      this.showScreen('screenQuiz');
    }
  }

  showCertificate() {
    document.getElementById('certStudentName').textContent = this.playerName;
    window.soundSystem.playVictory();
    this.triggerConfetti();
    this.showScreen('screenCertificate');
  }

  /* ========================================================
     Sistema de Confetes no Canvas
     ======================================================== */
  setupConfettiResize() {
    const resize = () => {
      this.confettiCanvas.width = window.innerWidth;
      this.confettiCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  triggerConfetti() {
    const colors = ['#ff0054', '#9e0059', '#ff5400', '#ffbd00', '#00bbf9', '#00f5d4', '#70e000'];
    for (let i = 0; i < 70; i++) {
      this.confettiParticles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight / 3,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 1.2) * 12,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    if (!this.confettiAnimId) {
      this.animateConfetti();
    }
  }

  animateConfetti() {
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravidade
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      this.confettiCtx.save();
      this.confettiCtx.translate(p.x, p.y);
      this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
      this.confettiCtx.fillStyle = p.color;
      this.confettiCtx.globalAlpha = Math.max(0, p.opacity);
      this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.confettiCtx.restore();

      if (p.opacity <= 0 || p.y > this.confettiCanvas.height + 50) {
        this.confettiParticles.splice(i, 1);
      }
    }

    if (this.confettiParticles.length > 0) {
      this.confettiAnimId = requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.confettiAnimId = null;
    }
  }
}

// Inicializa quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
  window.geoGame = new GeoGame();
});
