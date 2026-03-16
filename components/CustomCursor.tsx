import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if ('ontouchstart' in window) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let animFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      if (!isVisible) setIsVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const cursor = el ? window.getComputedStyle(el).cursor : 'default';
      setIsPointer(cursor === 'pointer' || cursor === 'text');
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, targetX, 0.12);
      ringY = lerp(ringY, targetY, 0.12);
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animFrameId = requestAnimationFrame(animate);
    };
    animate();

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      cancelAnimationFrame(animFrameId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
    };
  }, []);

  if ('ontouchstart' in window) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isPointer ? '8px' : '6px',
          height: isPointer ? '8px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#00f3ff',
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
          transition: 'width 0.2s, height 0.2s, opacity 0.3s, transform 0.1s',
          boxShadow: '0 0 10px rgba(0, 243, 255, 0.8)',
        }}
      />
      {/* Ring */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isPointer ? '44px' : isClicking ? '28px' : '36px',
          height: isPointer ? '44px' : isClicking ? '28px' : '36px',
          borderRadius: '50%',
          border: `1.5px solid ${isPointer ? 'rgba(188,19,254,0.8)' : 'rgba(0,243,255,0.4)'}`,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s, height 0.25s, border-color 0.25s, opacity 0.3s',
        }}
      />
    </>
  );
};

export default CustomCursor;
