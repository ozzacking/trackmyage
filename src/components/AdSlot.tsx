import React, { useEffect, useRef } from 'react';

declare global {
  interface Window { adsbygoogle: any[]; }
}

interface AdSlotProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

/**
 * AdSlot — Google AdSense display ad unit.
 * Usage: <AdSlot slot="1234567890" format="auto" />
 * Get slot IDs from: AdSense → Ads → By ad unit → Display ads
 * pub-id: ca-pub-3638001704763396
 */
export default function AdSlot({ slot, format = 'auto', style, className = '' }: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-3638001704763396"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
