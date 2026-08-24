/**
 * GeoAventura Kids - Sistema de Voz (Text-to-Speech)
 * Permite que a criança ouça a pergunta e as opções faladas em Português
 */

class SpeechSystem {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.speaking = false;
    this.voice = null;
    this.initVoice();
  }

  initVoice() {
    if (!this.synth) return;
    const findVoice = () => {
      const voices = this.synth.getVoices();
      // Procura voz em Português do Brasil
      this.voice = voices.find(v => v.lang === 'pt-BR' || v.lang.startsWith('pt')) || voices[0];
    };

    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
    findVoice();
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.speaking = false;
      this.notifyState(false);
    }
  }

  speak(text, onEndCallback) {
    if (!this.synth) {
      console.warn('SpeechSynthesis não suportado neste navegador.');
      return;
    }

    this.stop();

    const cleanText = text
      .replace(/[\u{1F600}-\u{1F6FF}|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '') // remove emojis da fala
      .replace(/[🧭🏞️🇧🇷🌊🗺️🏆⭐🦜🐾💡✨🎯]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'pt-BR';
    if (this.voice) utterance.voice = this.voice;
    utterance.rate = 0.92; // Velocidade confortável para crianças
    utterance.pitch = 1.1; // Tom amigável e alegre

    utterance.onstart = () => {
      this.speaking = true;
      this.notifyState(true);
    };

    utterance.onend = () => {
      this.speaking = false;
      this.notifyState(false);
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      this.speaking = false;
      this.notifyState(false);
    };

    this.synth.speak(utterance);
  }

  notifyState(isSpeaking) {
    const speakBtns = document.querySelectorAll('.btn-read-aloud');
    speakBtns.forEach(btn => {
      if (isSpeaking) {
        btn.classList.add('reading-active');
      } else {
        btn.classList.remove('reading-active');
      }
    });
  }
}

window.speechSystem = new SpeechSystem();
