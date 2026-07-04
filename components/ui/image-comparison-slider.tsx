import { useState, useRef, useCallback, useEffect } from 'react';

// ─── Original ImageComparison (horizontal images) ────────────────────────────
export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = 'Before',
  altAfter = 'After',
}: {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  }, [isDragging]);

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => { window.removeEventListener('mouseup', handleMouseUp); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto select-none rounded-xl overflow-hidden shadow-2xl"
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseLeave={handleMouseUp}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleMouseUp}
    >
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={afterImage} alt={altAfter} className="h-full w-full object-cover object-left" draggable={false} />
      </div>
      <img src={beforeImage} alt={altBefore} className="block h-full w-full object-cover object-left" draggable={false} />
      <div
        className="absolute top-0 bottom-0 w-1.5 bg-white/80 cursor-ew-resize flex items-center justify-center"
        style={{ left: `calc(${sliderPosition}% - 0.375rem)` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className={`bg-white rounded-full h-12 w-12 flex items-center justify-center shadow-md transition-all duration-200 ease-in-out ${isDragging ? 'scale-110 shadow-xl' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
            <line x1="15" y1="18" x2="9" y2="12" /><line x1="9" y1="6" x2="15" y2="12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// ─── VideoComparison — portrait 9:16, both videos always loop ────────────────
export const VideoComparison = ({
  beforeSrc = '',
  afterSrc = '',
  labelBefore = 'Antes',
  labelAfter = 'Depois',
}: {
  beforeSrc?: string;
  afterSrc?: string;
  labelBefore?: string;
  labelAfter?: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLVideoElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(pos);
  }, [isDragging]);

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', stopDrag);
    return () => window.removeEventListener('mouseup', stopDrag);
  }, []);

  useEffect(() => {
    beforeRef.current?.play().catch(() => {});
    afterRef.current?.play().catch(() => {});
  }, [beforeSrc, afterSrc]);

  return (
    <div
      ref={containerRef}
      className="relative select-none rounded-2xl overflow-hidden cursor-ew-resize"
      style={{ width: '100%', aspectRatio: '9 / 16' }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseLeave={stopDrag}
      onTouchMove={(e) => { startDrag(); handleMove(e.touches[0].clientX); }}
      onTouchEnd={stopDrag}
    >
      {/* BEFORE — full base, always playing */}
      {beforeSrc ? (
        <video
          ref={beforeRef}
          src={beforeSrc}
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      ) : (
        <Placeholder type="before" />
      )}

      {/* AFTER — clipped, always playing */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {afterSrc ? (
          <video
            ref={afterRef}
            src={afterSrc}
            autoPlay loop muted playsInline
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <Placeholder type="after" />
        )}
        <span
          className="absolute top-3 left-3 text-white text-[0.6rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
          style={{ background: '#FF6D29', fontFamily: "'Inter', sans-serif" }}
        >
          {labelAfter}
        </span>
      </div>

      {/* Antes label */}
      <span
        className="absolute top-3 right-3 text-white text-[0.6rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
        style={{ background: 'rgba(0,0,0,0.55)', fontFamily: "'Inter', sans-serif" }}
      >
        {labelBefore}
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/70 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div
          className={`bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-150 ${isDragging ? 'scale-110' : ''}`}
          style={{ width: 32, height: 32 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6" /><path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Placeholder when no video src provided
function Placeholder({ type }: { type: 'before' | 'after' }) {
  const isAfter = type === 'after';
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-end pb-8"
      style={{
        background: isAfter
          ? 'linear-gradient(180deg, #1c1c1e 0%, #111 100%)'
          : 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
      }}
    >
      <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded" style={{ width: `${60 + (i % 3) * 15}%`, height: 4, background: '#fff' }} />
        ))}
      </div>
      {isAfter && (
        <div className="w-4/5 rounded-lg px-3 py-2 text-center" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}>
          <span className="text-white font-bold leading-snug" style={{ fontFamily: "'TASAOrbiter', sans-serif", fontSize: '0.7rem', letterSpacing: '-0.01em' }}>
            Legenda animada
          </span>
        </div>
      )}
      {!isAfter && (
        <div className="flex items-center gap-1.5 opacity-30">
          <div className="w-5 h-px bg-white" />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>sem legenda</span>
          <div className="w-5 h-px bg-white" />
        </div>
      )}
    </div>
  );
}
