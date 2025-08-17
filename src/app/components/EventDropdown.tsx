'use client'

import { useState } from 'react'

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

  return (
    <div className="bg-purple-200 rounded-xl p-4 my-2 text-purple-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <span className={`text-xl transition-colors ${open ? 'text-purple-500' : ''}`}>
            {open ? '▲' : '▼'}
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-lg font-semibold">{date}</p>
      </button>

      {open && (
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="md:basis-3/5 text-sm text-slate-700">{description}</div>
          <div className="md:basis-2/5 flex flex-col gap-2">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <a
              href={signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-purple-100 hover:bg-purple-300 text-purple-800 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventDropdown
