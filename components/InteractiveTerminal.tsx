import React, { useState } from 'react';
import { Terminal, Code, Cpu, Play, Check, Copy, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bash' | 'airton' | 'imc'>('bash');
  const [selectedCommand, setSelectedCommand] = useState<string>('all');
  const [copiedCode, setCopiedCode] = useState(false);

  const copySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const airtonCode = `# airton_telemetry.py — AirTon IOP Biomedical Sensor Pipeline
import time
import numpy as np
from dataclasses import dataclass

@dataclass
class TelemetryPacket:
    timestamp_ms: int
    raw_pressure_hpa: float
    calibrated_iop_mmhg: float
    signal_snr_db: float

class AirTonTelemetryProcessor:
    """Acquires and filters telemetry stream from ESP32 pressure sensors."""
    def __init__(self, baseline_offset: float = 1.034):
        self.offset = baseline_offset
        self.kalman_estimate = 15.2 # Standard resting IOP in mmHg
        self.error_estimate = 1.0
        self.error_measure = 0.4

    def update_kalman(self, measurement: float) -> float:
        # 1D Kalman filter for sensor noise dampening
        kalman_gain = self.error_estimate / (self.error_estimate + self.error_measure)
        self.kalman_estimate = self.kalman_estimate + kalman_gain * (measurement - self.kalman_estimate)
        self.error_estimate = (1 - kalman_gain) * self.error_estimate
        return round(float(self.kalman_estimate), 2)

    def process_frame(self, raw_voltage: float) -> TelemetryPacket:
        # Conversion to intraocular pressure (mmHg) via calibration curve
        raw_iop = (raw_voltage * 12.5) - self.offset
        filtered_iop = self.update_kalman(raw_iop)
        return TelemetryPacket(
            timestamp_ms=int(time.time() * 1000),
            raw_pressure_hpa=1013.25 + (raw_iop * 1.333),
            calibrated_iop_mmhg=filtered_iop,
            signal_snr_db=28.4
        )

# Prototype status: $5,420 IEEE Project Grant funded & validated`;

  const imcCode = `# imc_market_maker.py — IMC Prosperity 4 Multi-Asset Engine
from typing import Dict, List
import math

class ProsperityMarketMaker:
    """Global Finals Strategy: Order-book liquidity provision & dynamic spread skew."""
    def __init__(self, position_limit: int = 20):
        self.position_limit = position_limit
        self.current_position = 0
        self.half_spread_tick = 1.0

    def compute_fair_midprice(self, order_depth: Dict[str, List]) -> float:
        # Microstructure volume-weighted mid-price (VWAP over top levels)
        bids, asks = order_depth.get("bids", []), order_depth.get("asks", [])
        if not bids or not asks:
            return 1000.0
        best_bid, bid_vol = bids[0]
        best_ask, ask_vol = asks[0]
        vwap = (best_bid * ask_vol + best_ask * bid_vol) / (bid_vol + ask_vol)
        return vwap

    def generate_quotes(self, fair_price: float, position: int) -> Dict[str, int]:
        # Skew quotes inversely proportional to inventory risk
        inventory_skew = (position / self.position_limit) * 0.75
        optimal_bid = math.floor(fair_price - self.half_spread_tick - inventory_skew)
        optimal_ask = math.ceil(fair_price + self.half_spread_tick - inventory_skew)
        return {"bid_price": optimal_bid, "ask_price": optimal_ask}

# Performance: Selected among top international collegiate teams in Global Finals`;

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#090d22]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-left">
      {/* Console Window Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#060919] border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]" />
          </div>
          <span className="ml-2 text-[11px] text-slate-400 font-mono hidden sm:inline">
            aravind@core-systems:~/portfolio
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5 text-xs">
          <button
            onClick={() => setActiveTab('bash')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'bash'
                ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>candidate.sh</span>
          </button>
          <button
            onClick={() => setActiveTab('airton')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'airton'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>airton_telemetry.py</span>
          </button>
          <button
            onClick={() => setActiveTab('imc')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'imc'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>imc_market_maker.py</span>
          </button>
        </div>

        {/* Copy snippet button */}
        <button
          onClick={() =>
            copySnippet(
              activeTab === 'bash'
                ? './inspect_candidate --full-integrity'
                : activeTab === 'airton'
                ? airtonCode
                : imcCode
            )
          }
          className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          title="Copy code"
        >
          {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Console Body */}
      <div className="p-5 text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[260px] max-h-[360px]">
        {activeTab === 'bash' && (
          <div className="space-y-3">
            {/* Interactive Command Toolbar */}
            <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-white/5">
              <span className="text-[11px] text-slate-500 uppercase tracking-wider">Quick Commands:</span>
              <button
                onClick={() => setSelectedCommand('all')}
                className={`px-2.5 py-1 rounded text-xs transition-all ${
                  selectedCommand === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                ./inspect_candidate
              </button>
              <button
                onClick={() => setSelectedCommand('metrics')}
                className={`px-2.5 py-1 rounded text-xs transition-all ${
                  selectedCommand === 'metrics'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                ./verify_metrics
              </button>
              <button
                onClick={() => setSelectedCommand('stack')}
                className={`px-2.5 py-1 rounded text-xs transition-all ${
                  selectedCommand === 'stack'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                ./list_stack
              </button>
              <button
                onClick={() => setSelectedCommand('contact')}
                className={`px-2.5 py-1 rounded text-xs transition-all ${
                  selectedCommand === 'contact'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                ./get_contacts
              </button>
            </div>

            {/* Terminal Outputs */}
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-neon-cyan">➜</span>
              <span className="text-purple-400">~/profile</span>
              <span className="text-white">
                $ {selectedCommand === 'all' && './inspect_candidate --full-integrity'}
                {selectedCommand === 'metrics' && './verify_metrics --platforms=leetcode,skillrack'}
                {selectedCommand === 'stack' && './list_stack --core-and-agentic'}
                {selectedCommand === 'contact' && './get_contacts --recruiter-fast-track'}
              </span>
            </div>

            <div className="pl-4 space-y-1.5 text-slate-300">
              {selectedCommand === 'all' && (
                <>
                  <div className="text-cyan-400 font-semibold">
                    ✔ [CANDIDATE]: {personalInfo.fullName} · {personalInfo.headline}
                  </div>
                  <div className="text-emerald-400">
                    ✔ [HARDWARE & GRANT]: AirTon Medical Prototype secured $5,420 IEEE Student Project Grant (ESP32 telemetry, pressure sensors, biometric pipelines).
                  </div>
                  <div className="text-purple-400">
                    ✔ [COMPETITIVE ALGO]: IMC Prosperity 4 Global Finalist (High-throughput numerical market making in pure Python).
                  </div>
                  <div className="text-amber-400">
                    ✔ [DSA RIGOR]: 900+ coding challenges solved across LeetCode (212+) and SkillRack (691 with 259 in C).
                  </div>
                  <div className="text-blue-400">
                    ✔ [AGENTIC FULL-STACK]: edumate dashboard & Ghibli Art Generator shipped with sub-2s latency via agentic orchestration.
                  </div>
                  <div className="text-slate-400 pt-1">
                    ℹ Status: Available immediately for fresher Software Developer & Applied AI roles.
                  </div>
                </>
              )}

              {selectedCommand === 'metrics' && (
                <>
                  <div className="text-amber-400 font-semibold">[LEETCODE]: 212+ Solved (187 Python3, 15 JS, 10 Python) · 50 & 100 Days Badges</div>
                  <div className="text-cyan-400 font-semibold">[SKILLRACK]: 691 Solved · 223 Bronze Medals · 259 in C · 54 in Python3 · 23 in C++</div>
                  <div className="text-blue-400 font-semibold">[GOOGLE DEVELOPER]: 7,264 points · Diamond League Member · 7 Verified Badges</div>
                  <div className="text-emerald-400 font-semibold">[HACKERRANK]: Certified Software Engineer & Verified Python/Problem-Solving</div>
                </>
              )}

              {selectedCommand === 'stack' && (
                <>
                  <div><strong className="text-white">Core Languages:</strong> Python, C, C++, SQL, Bash, Data Structures & Algorithms, OOP</div>
                  <div><strong className="text-white">Hardware & Telemetry:</strong> ESP32, Arduino, SDR Signal Analysis, 435 MHz Dipole Antenna, IoT Sensors</div>
                  <div><strong className="text-white">Agentic Web Stack:</strong> TypeScript, Next.js, React, Node.js, Express, Tailwind CSS, MongoDB</div>
                  <div><strong className="text-white">Applied AI:</strong> Hugging Face Inference API, Gemma-3, Flux LoRA, Prompt Engineering</div>
                  <div><strong className="text-white">Tools & Workflow:</strong> Claude Code, Google Antigravity, Cursor AI, Git, Linux (Ubuntu/POSIX), Docker</div>
                </>
              )}

              {selectedCommand === 'contact' && (
                <>
                  <div className="text-cyan-400">Email: {personalInfo.email}</div>
                  <div className="text-purple-400">Phone: {personalInfo.phone}</div>
                  <div className="text-slate-300">Location: {personalInfo.location} (Open to Relocation & Remote)</div>
                  <div className="text-emerald-400">Resume: /assets/Aravindselvan_C_Resume.pdf (317 KB)</div>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 pt-2 text-slate-400">
              <span className="text-neon-cyan">➜</span>
              <span className="text-purple-400">~/profile</span>
              <span className="inline-block w-2 h-4 bg-neon-cyan animate-pulse" />
            </div>
          </div>
        )}

        {activeTab === 'airton' && (
          <pre className="text-slate-300 text-xs font-mono overflow-x-auto whitespace-pre">
            {airtonCode}
          </pre>
        )}

        {activeTab === 'imc' && (
          <pre className="text-slate-300 text-xs font-mono overflow-x-auto whitespace-pre">
            {imcCode}
          </pre>
        )}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
