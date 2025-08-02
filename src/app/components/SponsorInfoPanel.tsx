'use client';

import { useState } from 'react';

// Adjustable sponsor info section design by sponsor tier:
// Gold tier = content fully visible with large logo on the right of the description
// Lower tiers = sponsor name and mini logo visible with dropdown to view description and enlarge logo

interface SponsorInfo {
  sponsorTier: string;
  sponsorName: string;
  description: string;
  sponsorLogo: string;
}

const SponsorInfoPanel: React.FC<SponsorInfo> = ({
  sponsorTier,
  sponsorName,
  description,
  sponsorLogo
}) => {
  const [open, setOpen] = useState(false);

  const isGold = sponsorTier.toLowerCase() === 'gold';
  const showDescription = isGold || open;

  return (
    <div className="bg-purple-200 border border-purple-300 rounded-xl p-4 my-5 text-purple-800">
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
          <span className="text-purple-800">{sponsorName}</span>
        </div>
        <img
          src={sponsorLogo}
          alt={`${sponsorName} logo`}
          className={`h-10 w-auto ml-auto pl-3 ${isGold || open ? 'opacity-0': 'opacity-100'}`}
        />
      </button>
      {/* BODY: Description and logo */}
      {showDescription && (
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className={`flex-1 text-base md:text-lg pl-10 ${isGold? 'pr-8' : 'pr-10'}`}>{description}</div>
          <span>
            <img
            src={sponsorLogo}
            alt={`${sponsorName} logo`}
            className="h-40 max-w-100 w-auto pr-8 pb-3"
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default SponsorInfoPanel;