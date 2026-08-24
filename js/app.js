/**
 * GeoAventura Kids - Motor Principal do Jogo (app.js)
 * Gerenciamento de Estado, Telas, Confetes, Minijogos e Interações
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
    this.compassIdx = 0;
    this.sortingIdx = 0;

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
      window.speechSystem.speak("Olá! Eu sou o Tico e esta é a Lina. Nós vamos te ajudar a aprender geografia e tirar nota 10 na prova!");
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

    // Bússola Minijogo
    document.getElementById('btnCompassBackMap').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showScreen('screenMap');
    });

    document.querySelectorAll('.compass-direction-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dir = e.currentTarget.getAttribute('data-dir');
        this.handleCompassChoice(dir);
      });
    });

    document.getElementById('btnCompassNext').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.nextCompassChallenge();
    });

    // Separador Minijogo
    document.getElementById('btnSortingBackMap').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.showScreen('screenMap');
    });

    document.getElementById('btnZoneCampo').addEventListener('click', () => {
      this.handleSortingChoice('campo');
    });

    document.getElementById('btnZoneCidade').addEventListener('click', () => {
      this.handleSortingChoice('cidade');
    });

    document.getElementById('btnSortingNext').addEventListener('click', () => {
      window.soundSystem.playClick();
      this.nextSortingChallenge();
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

    // Se for a Ilha da Bússola, inicia com o minijogo prático interativo!
    if (island.id === 'cardeais') {
      this.startCompassGame();
      return;
    }

    // Se for o Vale das Paisagens, inicia com o minijogo de classificação!
    if (island.id === 'paisagens') {
      this.startSortingGame();
      return;
    }

    // Caso padrão: Perguntas da Ilha
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
      title: "Grande Simulado de Geografia",
      badge: "Campeão do Simulado",
      badgeIcon: "🏆",
      description: "Você revisou todas as matérias para a prova de geografia!"
    };

    // Coleta 2 perguntas de cada uma das 5 ilhas
    let mixed = [];
    ISLANDS_DATA.forEach(isl => {
      const shuffled = [...isl.questions].sort(() => 0.5 - Math.random());
      mixed.push(...shuffled.slice(0, 2));
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

    document.getElementById('questionIcon').textContent = q.icon || '🌍';
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
    document.getElementById('victoryMsg').textContent = `Você dominou todos os desafios de: ${this.currentIsland.title}!`;
    document.getElementById('rewardBadgeIcon').textContent = this.currentIsland.badgeIcon || '🏆';
    document.getElementById('rewardBadgeTitle').textContent = `Medalha ${this.currentIsland.badge || 'Explorador Mestre'}`;

    this.showScreen('screenVictory');
  }

  /* ========================================================
     Minijogo: Bússola Interativa
     ======================================================== */
  startCompassGame() {
    this.compassIdx = 0;
    this.loadCompassStep();
    this.showScreen('screenCompassGame');
  }

  loadCompassStep() {
    const item = COMPASS_CHALLENGES[this.compassIdx];
    document.getElementById('compassProgressText').textContent = `Desafio ${this.compassIdx + 1}/${COMPASS_CHALLENGES.length}`;
    document.getElementById('compassInstructionText').textContent = item.instruction;
    document.getElementById('compassFeedbackBox').style.display = 'none';
    document.getElementById('btnCompassNext').style.display = 'none';

    window.speechSystem.speak(item.instruction);
  }

  handleCompassChoice(dir) {
    const item = COMPASS_CHALLENGES[this.compassIdx];
    const needle = document.getElementById('compassNeedle');
    const feedbackBox = document.getElementById('compassFeedbackBox');

    // Rotação da agulha para o ponto clicado
    const rotations = { 'N': 0, 'L': 90, 'S': 180, 'O': 270 };
    needle.style.transform = `rotate(${rotations[dir]}deg)`;

    if (dir === item.target) {
      window.soundSystem.playCorrect();
      this.triggerConfetti();
      this.stars += 2;
      this.updateStatsUI();

      feedbackBox.className = 'feedback-box correct';
      document.getElementById('compassFeedbackMascot').textContent = '🧭✨';
      document.getElementById('compassFeedbackTitle').textContent = 'Perfeito!';
      document.getElementById('compassFeedbackText').textContent = `A agulha apontou certinho para o ${item.targetName}!`;
      feedbackBox.style.display = 'flex';

      document.getElementById('btnCompassNext').style.display = 'inline-flex';
      window.speechSystem.speak(`Perfeito! Você apontou certinho para o ${item.targetName}!`);
    } else {
      window.soundSystem.playTryAgain();
      feedbackBox.className = 'feedback-box hint';
      document.getElementById('compassFeedbackMascot').textContent = '🦜💡';
      document.getElementById('compassFeedbackTitle').textContent = 'Ops, tente novamente!';
      document.getElementById('compassFeedbackText').textContent = item.hint;
      feedbackBox.style.display = 'flex';

      window.speechSystem.speak(item.hint);
    }
  }

  nextCompassChallenge() {
    this.compassIdx++;
    if (this.compassIdx < COMPASS_CHALLENGES.length) {
      this.loadCompassStep();
    } else {
      // Após o minijogo da bússola, carrega as perguntas da ilha para fixação
      this.quizQuestions = [...this.currentIsland.questions];
      this.currentQuestionIdx = 0;
      this.islandScore = 0;
      this.loadQuestion();
      this.showScreen('screenQuiz');
    }
  }

  /* ========================================================
     Minijogo: Separador Campo vs Cidade
     ======================================================== */
  startSortingGame() {
    this.sortingIdx = 0;
    this.loadSortingStep();
    this.showScreen('screenSortingGame');
  }

  loadSortingStep() {
    const item = SORTING_CHALLENGES[this.sortingIdx];
    document.getElementById('sortingProgressText').textContent = `Item ${this.sortingIdx + 1}/${SORTING_CHALLENGES.length}`;
    document.getElementById('sortingCurrentItem').textContent = item.item;
    document.getElementById('sortingFeedbackBox').style.display = 'none';
    document.getElementById('btnSortingNext').style.display = 'none';

    window.speechSystem.speak(`Onde encontramos: ${item.item}? Campo ou Cidade?`);
  }

  handleSortingChoice(selectedCategory) {
    const item = SORTING_CHALLENGES[this.sortingIdx];
    const feedbackBox = document.getElementById('sortingFeedbackBox');

    if (selectedCategory === item.category) {
      window.soundSystem.playCorrect();
      this.triggerConfetti();
      this.stars += 2;
      this.updateStatsUI();

      feedbackBox.className = 'feedback-box correct';
      document.getElementById('sortingFeedbackMascot').textContent = '🌾✨';
      document.getElementById('sortingFeedbackTitle').textContent = 'Exatamente!';
      document.getElementById('sortingFeedbackText').textContent = item.explanation;
      feedbackBox.style.display = 'flex';

      document.getElementById('btnSortingNext').style.display = 'inline-flex';
      window.speechSystem.speak(`Correto! ${item.explanation}`);
    } else {
      window.soundSystem.playTryAgain();
      feedbackBox.className = 'feedback-box hint';
      document.getElementById('sortingFeedbackMascot').textContent = '🐾💡';
      document.getElementById('sortingFeedbackTitle').textContent = 'Pense mais um pouquinho:';
      document.getElementById('sortingFeedbackText').textContent = item.explanation;
      feedbackBox.style.display = 'flex';

      window.speechSystem.speak(item.explanation);
    }
  }

  nextSortingChallenge() {
    this.sortingIdx++;
    if (this.sortingIdx < SORTING_CHALLENGES.length) {
      this.loadSortingStep();
    } else {
      // Após o minijogo, vai para as questões da ilha de paisagens
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
