'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface EventDropdownProps {
  title: string
  date: string
  description: string
  imageUrl: string
  signupUrl: string
}

const EventDropdown: React.FC<EventDropdownProps> = ({
  title,
  date,
  description,
  imageUrl,
  signupUrl
}) => {
  const [open, setOpen] = useState(false)
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

  const bgColour = isDark ? '#796299' : '#E9D5FF' 
  const text = isDark ? "#E9D5FF" : "#5f249f";
  const desc = isDark ? "#E9D5FF" : "#334155";

  return (
    <div className="rounded-xl p-4 my-2 font-[Montserrat]"
        style = {{ background: bgColour, color: text}}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2 flex-1">
          <span className={`text-3xl transition-colors ${open ? 'text-purple-400' : ''}`}>
            {open ? '▼' : '►'}
          </span>
          <h3 className="text-3xl font-semibold font-[Montserrat]">{title}</h3>
        </div>
        <p className="hidden md:block text-3xl font-semibold font-[Montserrat] whitespace-nowrap ml-4">{date}</p>
      </button>

      {open && (
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="md:basis-3/5" style={{ color: desc}}>
            <p className="md:hidden text-2xl font-semibold font-[Montserrat] text-purple-800 mb-3">{date}</p>
            <div className="text-lg text-slate-700 font-[Montserrat]">{description}</div>
          </div>
          <div className="md:basis-2/5 flex flex-col gap-2">
            <div className="relative w-full min-h-48 h-full">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
              />
            </div>
            {signupUrl && signupUrl.trim() !== '' && (
              <a
              href={signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-purple-100 hover:bg-purple-300 font-semibold px-4 py-2 rounded-lg text-sm transition-colors mb-4"
            >
              Sign Up
            </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default EventDropdown
