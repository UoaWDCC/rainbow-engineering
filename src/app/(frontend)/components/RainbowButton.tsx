'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface RainbowButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ children, onClick, href }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 })
  const [animate, setAnimate] = useState(false)
  const radius = 24
  const dashDuration = 2000 // dash animation duration in ms
  const intervalTime = 6000 // time between animations
  const router = useRouter()

  useEffect(() => {
    const measure = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true)
      setTimeout(() => setAnimate(false), dashDuration)
    }, intervalTime)
    return () => clearInterval(interval)
  }, [])

  const { width, height } = dimensions
  const perimeter = 2 * (width + height - 4 * radius) + 2 * Math.PI * radius
  const dashLength = perimeter / 7
  const gapLength = perimeter - dashLength

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        try {
          if (onClick) onClick()
        } catch (e) {
          // swallow errors from user-provided handler so navigation still happens
          console.error(e)
        }
        if (href) router.push(href)
      }}
      className="drop-shadow-2xl relative rounded-3xl px-20 py-13 text-3xl font-bold font-[Montserrat] hover:bg-[#CAA9F8] bg-[#D0B7F4] text-[#5f249f] transition-colors overflow-hidden"
    >
      {children}

      {width > 0 && height > 0 && (
        <svg width={width} height={height} className="absolute top-0 left-0 pointer-events-none">
          <defs>
            <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF677" />
              <stop offset="20%" stopColor="#FFB050" />
              <stop offset="40%" stopColor="#F45757" />
              <stop offset="60%" stopColor="#68BC8E" />
              <stop offset="80%" stopColor="#628BEC" />
              <stop offset="100%" stopColor="#AF4FC0" />
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
            className={`rainbow-border ${animate ? 'dash-animation' : ''}`}
          />
        </svg>
      )}

      <style>
        {`
          rect.rainbow-border {
            opacity: 0; /* default invisible when not animating */
          }

          @keyframes dash {
            0% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
            30% {
              opacity: 1; /* gradual fade in */
            }
            70% {
              opacity: 1; /* stay fully visible */
            }
            100% {
              stroke-dashoffset: ${perimeter};
              opacity: 0; /* gradual fade out */
            }
          }

          .dash-animation {
            animation: dash ${dashDuration}ms ease-in-out forwards;
          }
        `}
      </style>
    </button>
  )
}

export default RainbowButton
