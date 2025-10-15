'use client';

import { useState } from 'react';
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

  const isGold = sponsorTier.toLowerCase() === 'gold';
  const showDescription = isGold || open;

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
    <div className="bg-purple-200 border border-purple-300 rounded-xl p-4 my-5 text-slate-700 font-[Montserrat]">
      {/* Dropdown activation */}
      <button
        onClick={() => !isGold && setOpen(!open)}
        className={`w-full flex justify-between items-center text-left ${isGold ? 'cursor-default' : 'cursor-pointer'}`}
        type="button"
      >
        {/* HEADER: Sponsor name (and mini logo if dropwdown is closed) */}
        <div className="text-3xl font-bold flex items-center gap-2">
          <span className={`transition-colors duration-300 ${isGold? 'text-transparent' : open ? 'text-purple-400' : 'text-purple-800'}`}>
            {open ? '▼' : '►'}
          </span>
          <span className="text-purple-800 font-[Montserrat]">{sponsorName}</span>
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
          <div className="flex-1 text-base md:text-lg pl-10 pr-8">{description}</div>
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