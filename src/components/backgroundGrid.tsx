'use client';
import { useState, useEffect } from "react";

export default function Grid() {
  const [tileCount, setTileCount] = useState(0);

  useEffect(() => {

    const updateCount = () => {
      const tileSize = 32;
      const gap = 8;
      const totalSize = tileSize + gap;
      const columns = Math.ceil((window.innerWidth * 1.2) / totalSize);
      const rows = Math.ceil((window.innerHeight * 1.2) / totalSize);
      setTileCount(columns * rows);
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  return (
    <div className="fixed -top-[5%] -left-[5%] w-[110%] h-[110%] inset-0 z-0 flex flex-wrap gap-1 bg-white overflow-visible">
      {Array.from({ length: tileCount }).map((_, i) => {
        return (
          <div
            key={i}
            className="h-18 w-18 rounded-md border border-gray-100 bg-white transition-all duration-1500 hover:duration-0 hover:scale-108"
            style={{
              '--hover-bg': 'var(--primary-color, #93c5fd)'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
          />
        );
      })}
    </div>
  );
}