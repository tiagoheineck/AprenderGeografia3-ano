/**
 * GeoAventura Kids - Sistema de Áudio Sintetizado (Web Audio API)
 * Sons alegres, suaves e amigáveis para crianças
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Som suave de clique/bolha
  playClick() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Som de Acerto / Estrela Brilhante (Acorde maior alegre)
  playCorrect() {
    if (this.muted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.07);

      gain.gain.setValueAtTime(0.01, now + index * 0.07);
      gain.gain.linearRampToValueAtTime(0.22, now + index * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.07 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.07);
      osc.stop(now + index * 0.07 + 0.35);
    });
  }

  // Som de "Tente outra vez / Dica" (suave, acolhedor, não punitivo)
  playTryAgain() {
    if (this.muted) return;
    this.init();
    const notes = [440, 392]; // A4, G4
    const now = this.ctx.currentTime;

    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.12);

      gain.gain.setValueAtTime(0.15, now + index * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.12 + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.12);
      osc.stop(now + index * 0.12 + 0.25);
    });
  }

  // Som de Dica do Mascote
  playHint() {
    if (this.muted) return;
    this.init();
    const notes = [587.33, 880]; // D5, A5
    const now = this.ctx.currentTime;

    notes.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.1);

      gain.gain.setValueAtTime(0.18, now + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.1 + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.1);
      osc.stop(now + index * 0.1 + 0.3);
    });
  }

  // Fanfarra de Conquista / Troféu
  playVictory() {
    if (this.muted) return;
    this.init();
    const melody = [
      { f: 523.25, d: 0.12 }, // C5
      { f: 659.25, d: 0.12 }, // E5
      { f: 783.99, d: 0.12 }, // G5
      { f: 1046.5, d: 0.3 },  // C6
      { f: 880.0,  d: 0.12 }, // A5
      { f: 1046.5, d: 0.5 }   // C6 longo
    ];
    let time = this.ctx.currentTime;

    melody.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, time);

      gain.gain.setValueAtTime(0.01, time);
      gain.gain.linearRampToValueAtTime(0.25, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, time + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(time);
      osc.stop(time + note.d);
      time += note.d * 0.85;
    });
  }

  // Som de Confete / Estrelinha
  playSparkle() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    for (let i = 0; i < 6; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const freq = 1200 + Math.random() * 1200;
      const startTime = now + i * 0.05;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.08, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.12);
    }
  }
}

window.soundSystem = new SoundSystem();
