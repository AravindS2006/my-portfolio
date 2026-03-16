import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');

  useEffect(() => {
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];
    const steps = [
      { target: 30, delay: 0 },
      { target: 60, delay: 400 },
      { target: 85, delay: 800 },
      { target: 100, delay: 1200 },
    ];

    steps.forEach(({ target, delay }) => {
      timeoutIds.push(setTimeout(() => setProgress(target), delay));
    });

    const completeTimer = setTimeout(() => {
      setPhase('done');
      setTimeout(onComplete, 600);
    }, 1900);
    timeoutIds.push(completeTimer);

    return () => timeoutIds.forEach(clearTimeout);
  }, [onComplete]);

  const lines = [
    'Initializing neural network...',
    'Loading AI modules...',
    'Connecting to knowledge base...',
    'System ready.',
  ];

  const visibleLines = progress < 30 ? 1 : progress < 60 ? 2 : progress < 85 ? 3 : 4;

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="text-4xl font-bold tracking-widest text-white mb-2">
              ARAVIND<span className="text-neon-blue">.AI</span>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-[0.3em] uppercase">
              Portfolio System v2.0
            </div>
          </motion.div>

          {/* Terminal lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-72 font-mono text-xs space-y-1 mb-10"
          >
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-2 ${i === visibleLines - 1 ? 'text-neon-blue' : 'text-slate-500'}`}
              >
                <span className="text-neon-purple">{i === visibleLines - 1 ? '▶' : '✓'}</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress bar */}
          <div className="w-72">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-slate-500 tracking-wider">LOADING</span>
              <span className="text-[10px] font-mono text-neon-blue">{progress}%</span>
            </div>
            <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
