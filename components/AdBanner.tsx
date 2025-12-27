'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
}

const AdBanner: React.FC<AdBannerProps> = ({ slot, format = 'auto', responsive = true }) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="my-8 w-full overflow-hidden text-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8785007089566353"
        data-ad-slot={slot || 'default'}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      ></ins>
      <div className="text-[10px] text-slate-600 mt-2 uppercase tracking-widest font-sans">Advertisement</div>
    </div>
  );
};

export default AdBanner;