'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'

// Adjustable sponsor info section design by sponsor tier:
// Gold tier = content fully visible with large logo on the right of the description
// Lower tiers = sponsor name and mini logo visible with dropdown to view description and enlarge logo

interface SponsorInfo {
  sponsorTier: string;
  sponsorName: string;
  description: string;
  sponsorLogo: string;
  websiteUrl?: string;
}

const SponsorInfoPanel: React.FC<SponsorInfo> = ({
  sponsorTier,
  sponsorName,
  description,
  sponsorLogo,
  websiteUrl
}) => {
  const [open, setOpen] = useState(false);

  //dark mode (same logic as event dropdown page)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
  const saved = localStorage.getItem('darkMode') === 'true'
  setIsDark(saved)

  const onThemeChange = (e: Event) => {
    const { isDark } = (e as CustomEvent).detail ?? {}
    if (typeof isDark === 'boolean') setIsDark(isDark)
    }
  window.addEventListener('themechange', onThemeChange)
    return () => {
      window.removeEventListener('themechange', onThemeChange)
    }
  }, [])


  


  const isGold = sponsorTier.toLowerCase() === 'gold';
  const showDescription = isGold || open;

  //for dark mode colours
  const bgColour = isDark ? '#796299' : '#E9D5FF' 
  const text = isDark ? "#E9D5FF" : "#5f249f";

  const createLogoImage = (width: number, height: number, className?: string) => (
    <Image
      src={sponsorLogo}
      alt={`${sponsorName} logo`}
      width={width}
      height={height}
      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      className={className || ''}
    />
  );

  const wrapWithLinkIfNeeded = (children: React.ReactNode) => {
    if (websiteUrl) {
      return (
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${sponsorName} website`}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          {children}
        </a>
      );
    }
    return children;
  };

  return (
    <div className="rounded-xl p-4 my-5 font-[Montserrat]"
    style={{ background: bgColour, color: text }}>
      {/* Dropdown activation */}
      <button
        onClick={() => !isGold && setOpen(!open)}
        className={`w-full flex justify-between items-center text-left ${isGold ? 'cursor-default' : 'cursor-pointer'}`}
        type="button"
      >
        {/* HEADER: Sponsor name (and mini logo if dropwdown is closed) */}
        <div className="text-3xl font-bold flex items-center gap-2">
          <span className={`transition-colors duration-300 ${isGold? 'text-transparent' : open ? 'text-purple-400' : ''}`}>
            {open ? '▼' : '►'}
          </span>
          <span className="font-[Montserrat]" style={{color : text}}>{sponsorName}</span>
        </div>
        <div className="ml-auto pl-3 w-10 h-10 flex items-center justify-center">
          {wrapWithLinkIfNeeded(
            createLogoImage(
              40, 
              40, 
              `${isGold || open ? 'opacity-0': 'opacity-100'}`
            )
          )}
        </div>
      </button>
      {/* BODY: Description and logo */}
      {showDescription && (
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 text-base text-slate-700 md:text-lg pl-10 pr-8">{description}</div>
          <span>
            <div className='w-40 h-40 flex items-center justify-center'>
              {wrapWithLinkIfNeeded(createLogoImage(160, 160))}
            </div>
          </span>
        </div>
      )}
    </div>
  );
};

export default SponsorInfoPanel;