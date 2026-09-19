// src/components/LiveEngineeringLabs.tsx — Runnable Interactive Engineering Simulation Sandboxes
import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Terminal, Layers, Sparkles, Play, RotateCcw, ShieldCheck, Activity, TrendingUp, CheckCircle, ExternalLink, Zap, Sliders, AlertTriangle } from 'lucide-react';
import sound from '../utils/sound';

export const LiveEngineeringLabs: React.FC<{ activeLabId?: string }> = ({ activeLabId }) => {
  const [activeTab, setActiveTab] = useState<'airton' | 'imc' | 'edumate' | 'ghibli'>('airton');

  useEffect(() => {
    if (activeLabId && ['airton', 'imc', 'edumate', 'ghibli'].includes(activeLabId)) {
      setActiveTab(activeLabId as 'airton' | 'imc' | 'edumate' | 'ghibli');
    }
  }, [activeLabId]);

  // AirTon Lab State
  const [simPressure, setSimPressure] = useState<number>(14.5);
  const [kalmanEstimate, setKalmanEstimate] = useState<number>(14.5);
  const [noiseAmplitude, setNoiseAmplitude] = useState<number>(1.8);
  const [wavePoints, setWavePoints] = useState<{ raw: number; filtered: number }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // IMC Prosperity Lab State
  const [inventoryPosition, setInventoryPosition] = useState<number>(4);
  const [simulatedMidPrice, setSimulatedMidPrice] = useState<number>(1000.0);
  const [spreadTicks, setSpreadTicks] = useState<{ bid: number; ask: number; pnl: number }>({
    bid: 998,
    ask: 1002,
    pnl: 1420,
  });

  // edumate Lab State
  const [attendedClasses, setAttendedClasses] = useState<number>(42);
  const [totalClasses, setTotalClasses] = useState<number>(50);

  // Ghibli prompt state
  const [shortPrompt, setShortPrompt] = useState('a train by the ocean at sunset');
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandedPrompt, setExpandedPrompt] = useState(
    'A nostalgic vintage locomotive gliding across shimmering ocean tracks during golden hour sunset, soft watercolor skies with fluffy cumulus clouds, Studio Ghibli cinematic animation style, warm ambient light, highly detailed.'
  );

  // Real-time animation for AirTon Kalman Filter Canvas
  useEffect(() => {
    let timer: number;
    let estimate = simPressure;
    let errorEstimate = 1.0;
    const errorMeasure = 0.45;

    timer = window.setInterval(() => {
      // Simulate raw noisy reading from ESP32 pressure transducer
      const noise = (Math.random() - 0.5) * noiseAmplitude * 2;
      const rawMeasurement = simPressure + noise;

      // 1D Kalman filter calculation
      const kalmanGain = errorEstimate / (errorEstimate + errorMeasure);
      estimate = estimate + kalmanGain * (rawMeasurement - estimate);
      errorEstimate = (1 - kalmanGain) * errorEstimate;

      setKalmanEstimate(Number(estimate.toFixed(2)));

      setWavePoints((prev) => {
        const next = [...prev, { raw: rawMeasurement, filtered: estimate }];
        if (next.length > 50) next.shift();
        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [simPressure, noiseAmplitude]);

  // Draw AirTon canvas wave
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || wavePoints.length < 2) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = (canvas.width = canvas.parentElement?.clientWidth || 400);
    const h = (canvas.height = 160);

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let y = 20; y < h; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const step = w / 50;
    const scale = 5;
    const centerY = h / 2;

    // Draw Raw Noisy Sensor Signal (Red / Amber dashed)
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.65)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    wavePoints.forEach((pt, i) => {
      const x = i * step;
      const y = centerY - (pt.raw - 15) * scale;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw Kalman Filtered Smooth Signal (Glowing Neon Cyan)
    ctx.strokeStyle = '#00f5ff';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([]);
    ctx.shadowColor = 'rgba(0, 245, 255, 0.6)';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    wavePoints.forEach((pt, i) => {
      const x = i * step;
      const y = centerY - (pt.filtered - 15) * scale;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.shadowBlur = 0;
  }, [wavePoints]);

  // Real-time market maker update
  useEffect(() => {
    const interval = window.setInterval(() => {
      // Simulate random tick around midprice
      const tick = (Math.random() - 0.5) * 0.8;
      const mid = Number((simulatedMidPrice + tick).toFixed(1));
      setSimulatedMidPrice(mid);

      // Inventory skew algorithm
      const skew = (inventoryPosition / 20) * 1.5;
      const optimalBid = Math.floor(mid - 1.5 - skew);
      const optimalAsk = Math.ceil(mid + 1.5 - skew);

      setSpreadTicks((prev) => ({
        bid: optimalBid,
        ask: optimalAsk,
        pnl: prev.pnl + (Math.random() > 0.4 ? 5 : -2),
      }));
    }, 400);

    return () => clearInterval(interval);
  }, [inventoryPosition, simulatedMidPrice]);

  const handleExpandPrompt = () => {
    sound.playBlip();
    setIsExpanding(true);
    setTimeout(() => {
      setIsExpanding(false);
      setExpandedPrompt(
        `A breathtaking hand-drawn illustration of ${shortPrompt}, aesthetic soft anime scenery inspired by Hayao Miyazaki, gouache textured painted background, gentle atmospheric haze, Studio Ghibli cinematic animation lighting, masterpiece, 4k.`
      );
      sound.playSuccess();
    }, 700);
  };

  return (
    <section id="labs" className="py-20 md:py-28 relative bg-[#060a1a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-neon-cyan text-xs font-mono font-medium mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>INTERACTIVE RUNNABLE ENGINEERING LABS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Live Engineering Simulations
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan via-neon-blue to-purple-500 mx-auto rounded-full mb-5" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Don't just take our word for it. Interact with live browser-executable simulations of our
            <span className="text-emerald-400 font-semibold"> $5,420 IEEE-funded medical telemetry</span>,
            <span className="text-purple-400 font-semibold"> IMC Prosperity 4 algorithmic order book</span>, and full-stack platforms.
          </p>
        </div>

        {/* Lab Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('airton');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
              activeTab === 'airton'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.25)]'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>AirTon Telemetry ($5,420 Grant)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('imc');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
              activeTab === 'imc'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.25)]'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span>IMC Prosperity 4 (Global Finalist)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('edumate');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
              activeTab === 'edumate'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-glow-cyan'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Layers className="w-4 h-4 text-neon-cyan" />
            <span>edumate Portal Simulator</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('ghibli');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all ${
              activeTab === 'ghibli'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.25)]'
                : 'bg-[#0a0e24] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ghibli Prompt Studio</span>
          </button>
        </div>

        {/* ACTIVE LAB CONTAINER */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#080d22] border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl text-left">
          {/* LAB 1: AirTon */}
          {activeTab === 'airton' && (
            <div className="space-y-6">
              {/* Station Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>ESP32 TELEMETRY TRANSMITTER · ONLINE</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    AirTon — Non-Invasive Glaucoma IOP Telemetry Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Validated prototype securing <strong className="text-emerald-400">$5,420 in competitive international IEEE student project funding</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                    $5,420 IEEE Grant
                  </span>
                  <a
                    href="https://github.com/AravindS2006/airton-web-final"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                    title="View AirTon GitHub Code"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Real-time Telemetry Canvas */}
              <div className="rounded-2xl bg-black/50 border border-white/10 p-4">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-rose-400">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      Raw Sensor Voltage Noise
                    </span>
                    <span className="flex items-center gap-1.5 text-neon-cyan">
                      <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-glow-cyan" />
                      1D Kalman Filtered IOP
                    </span>
                  </div>
                  <span className="text-slate-400">Sampling: 100 Hz · ESP32 ADC</span>
                </div>

                <canvas ref={canvasRef} className="w-full rounded-xl bg-[#040817]" />
              </div>

              {/* Interactive Controls & Sensor Readout Bento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Control 1: Pressure Slider */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Sliders className="w-3.5 h-3.5 text-neon-cyan" />
                      Simulate Pressure
                    </span>
                    <span className="text-white font-bold">{simPressure.toFixed(1)} mmHg</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="32"
                    step="0.5"
                    value={simPressure}
                    onChange={(e) => {
                      setSimPressure(Number(e.target.value));
                      sound.playClick();
                    }}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>10 mmHg (Low)</span>
                    <span>21 mmHg (Warning)</span>
                    <span>32 mmHg (Critical)</span>
                  </div>
                </div>

                {/* Readout: Calibrated IOP */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Kalman Estimate (Resting IOP)
                  </div>
                  <div className="flex items-baseline gap-2 my-1">
                    <span className="text-3xl font-black font-mono text-neon-cyan">
                      {kalmanEstimate.toFixed(1)}
                    </span>
                    <span className="text-xs font-mono text-slate-400">mmHg</span>
                  </div>
                  <div
                    className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                      kalmanEstimate < 21
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-rose-400 bg-rose-500/10'
                    }`}
                  >
                    {kalmanEstimate < 21 ? '✔ Normal Range (Low Risk)' : '⚠ Ocular Hypertension Warning'}
                  </div>
                </div>

                {/* ESP32 Packet Hex Stream */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 font-mono text-xs flex flex-col justify-between">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                    ESP32 Serial Telemetry Stream
                  </div>
                  <div className="p-2 rounded-lg bg-black/60 border border-white/5 text-[11px] text-emerald-400 space-y-0.5 overflow-x-auto">
                    <div>[UART_0] 0x41 0x54 0x01</div>
                    <div>DATA: {kalmanEstimate.toFixed(2)} mmHg</div>
                    <div>SNR: 28.4 dB | CAL_CRC: OK</div>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Zero latency local telemetry pipeline</div>
                </div>
              </div>

              {/* Rationale & Execution Footnote */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="font-bold text-emerald-300 font-mono">Hardware & System Implementation: </span>
                Engineered with ESP32 microcontrollers, high-precision barometric transducers, and Python biometric signal conditioning routines. Selected for a competitive $5,420 grant by the international IEEE R10 student committee.
              </div>
            </div>
          )}

          {/* LAB 2: IMC Prosperity 4 */}
          {activeTab === 'imc' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                    <span>ORDER-BOOK ENGINE · LIVE SIMULATION</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    IMC Prosperity 4 — High-Throughput Market Maker
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Collegiate Algorithmic Trading Challenge · <strong className="text-purple-400">Global Finalist Standing</strong>
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/15 border border-purple-500/30 text-purple-300 font-bold">
                  Global Finalist
                </span>
              </div>

              {/* Simulated Level 2 Order Book */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Bids Column */}
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 font-mono text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-bold mb-3">
                    <span>BUY ORDERS (BIDS)</span>
                    <span>VOLUME</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-emerald-300 bg-emerald-500/10 p-1.5 rounded">
                      <span className="font-bold">{spreadTicks.bid} (Algorithm Bid)</span>
                      <span>8</span>
                    </div>
                    <div className="flex justify-between text-slate-400 p-1.5">
                      <span>{spreadTicks.bid - 1}</span>
                      <span>15</span>
                    </div>
                    <div className="flex justify-between text-slate-500 p-1.5">
                      <span>{spreadTicks.bid - 2}</span>
                      <span>24</span>
                    </div>
                  </div>
                </div>

                {/* Asks Column */}
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 font-mono text-xs">
                  <div className="flex items-center justify-between text-rose-400 font-bold mb-3">
                    <span>SELL ORDERS (ASKS)</span>
                    <span>VOLUME</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-rose-300 bg-rose-500/10 p-1.5 rounded">
                      <span className="font-bold">{spreadTicks.ask} (Algorithm Ask)</span>
                      <span>8</span>
                    </div>
                    <div className="flex justify-between text-slate-400 p-1.5">
                      <span>{spreadTicks.ask + 1}</span>
                      <span>12</span>
                    </div>
                    <div className="flex justify-between text-slate-500 p-1.5">
                      <span>{spreadTicks.ask + 2}</span>
                      <span>20</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inventory Skew Interactive Controller */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Inventory Position</span>
                    <span className="text-purple-300 font-bold">{inventoryPosition} / 20</span>
                  </div>
                  <input
                    type="range"
                    min="-15"
                    max="15"
                    step="1"
                    value={inventoryPosition}
                    onChange={(e) => {
                      setInventoryPosition(Number(e.target.value));
                      sound.playClick();
                    }}
                    className="w-full accent-purple-400 cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-500 font-mono">
                    Quotes skew automatically to hedge risk
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 font-mono">
                  <div className="text-[11px] text-slate-400">MIDPRICE VWAP</div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {simulatedMidPrice.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    Spread: {(spreadTicks.ask - spreadTicks.bid).toFixed(0)} ticks
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 font-mono">
                  <div className="text-[11px] text-slate-400">SESSION PNL</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-1">
                    +{spreadTicks.pnl.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Dynamic synthetic arbitrage</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="font-bold text-purple-300 font-mono">Tournament Architecture: </span>
                Engineered in pure Python with microsecond-level algorithmic order-book heuristics. Advanced to the Global Finals against top university teams worldwide.
              </div>
            </div>
          )}

          {/* LAB 3: edumate */}
          {activeTab === 'edumate' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan mb-1">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
                    <span>PRODUCTION APPLICATION · VERIFIED DEPLOYMENT</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    edumate — High-Efficiency Collegiate Productivity Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Full-Stack Next.js / TypeScript Web Platform · Sub-2s Latency on Vercel
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/15 border border-cyan-500/30 text-neon-cyan font-bold">
                    Live Portal
                  </span>
                  <a
                    href="https://edumate1-sairam.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                    title="Open Live edumate App"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Attendance Forecaster Mini Tool */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Interactive Attendance Forecaster Simulation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300">
                      Attended Classes: {attendedClasses}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      value={attendedClasses}
                      onChange={(e) => {
                        setAttendedClasses(Number(e.target.value));
                        sound.playClick();
                      }}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300">
                      Total Classes Held: {totalClasses}
                    </label>
                    <input
                      type="range"
                      min={attendedClasses}
                      max="70"
                      value={totalClasses}
                      onChange={(e) => {
                        setTotalClasses(Number(e.target.value));
                        sound.playClick();
                      }}
                      className="w-full accent-purple-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Calculated Attendance Stat */}
                {(() => {
                  const pct = (attendedClasses / totalClasses) * 100;
                  const isSafe = pct >= 75;
                  return (
                    <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-slate-400">Calculated Percentage</div>
                        <div className={`text-2xl font-bold font-mono ${isSafe ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {pct.toFixed(1)}%
                        </div>
                      </div>
                      <div className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${
                        isSafe ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' : 'text-rose-300 border-rose-500/30 bg-rose-500/10'
                      }`}>
                        {isSafe ? '✔ Above Mandatory 75% Threshold' : '⚠ Below 75% Caution Flag'}
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="font-bold text-cyan-300 font-mono">Agentic Delivery Note: </span>
                Architected and delivered by directing modern AI coding tools (Claude Code & Google Antigravity) to write robust, maintainable React and Next.js frontend code with client-side caching.
              </div>
            </div>
          )}

          {/* LAB 4: Ghibli Prompt Studio */}
          {activeTab === 'ghibli' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>DIFFUSION PROMPT PIPELINE · RUNNABLE</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Ghibli Art Generator — Prompt Expansion Pipeline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Google Gemma-3 LLM Expansion → Hosted Flux-Ghibli-LoRA Diffusion Endpoint
                  </p>
                </div>

                <a
                  href="https://ghibli-art-generator-five.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                  title="Open Live App"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Interactive prompt expansion simulator */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Short User Input Prompt:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={shortPrompt}
                      onChange={(e) => setShortPrompt(e.target.value)}
                      className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                    <button
                      onClick={handleExpandPrompt}
                      disabled={isExpanding}
                      className="px-5 py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-dark-bg text-xs font-mono font-bold transition-all"
                    >
                      {isExpanding ? 'Expanding...' : 'Run Gemma-3 Expansion'}
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs space-y-2">
                  <div className="text-[11px] text-amber-400 uppercase tracking-wider">
                    Gemma-3 Expanded Diffusion Prompt Output:
                  </div>
                  <div className="text-slate-200 leading-relaxed italic">
                    "{expandedPrompt}"
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="font-bold text-amber-300 font-mono">Applied AI Integration: </span>
                Interfaces directly with hosted foundation models via Hugging Face Serverless APIs without requiring costly on-premise GPU clusters.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveEngineeringLabs;
