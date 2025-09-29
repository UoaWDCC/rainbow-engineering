'use client'

import React, { useRef, useEffect, useState } from 'react'

interface RainbowButtonProps {
  children: string
  onClick?: () => void
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ children, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 })
  const radius = 24

  useEffect(() => {
    const measure = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    measure()
    window.addEventListener('resize', measure) // update on resize
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { width, height } = dimensions
  const perimeter = 2 * (width + height - 4 * radius) + 2 * Math.PI * radius
  const dashLength = perimeter / 7
  const gapLength = perimeter - dashLength

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className="drop-shadow-2xl relative rounded-3xl px-20 py-13 text-3xl font-bold font-[Montserrat] hover:bg-[#CAA9F8] bg-[#D0B7F4] text-[#5f249f] transition-colors overflow-hidden"
    >
      {children}

      {width > 0 && height > 0 && (
        <svg width={width} height={height} className="absolute top-0 left-0 pointer-events-none">
          <defs>
            <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="red" />
              <stop offset="16%" stopColor="orange" />
              <stop offset="33%" stopColor="yellow" />
              <stop offset="50%" stopColor="green" />
              <stop offset="66%" stopColor="blue" />
              <stop offset="83%" stopColor="indigo" />
              <stop offset="100%" stopColor="violet" />
            </linearGradient>
          </defs>

          <rect
            x={2}
            y={2}
            width={width - 4}
            height={height - 4}
            rx={radius}
            ry={radius}
            stroke="url(#rainbow)"
            strokeWidth={6}
            fill="none"
            strokeDasharray={`${dashLength} ${gapLength}`}
            strokeDashoffset={0}
            style={{ animation: `dash 2.5s linear infinite` }}
          />
        </svg>
      )}

      <style>
        {`
          @keyframes dash {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: ${perimeter}; }
          }
        `}
      </style>
    </button>
  )
}

export default RainbowButton
