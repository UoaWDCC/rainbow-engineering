'use client'

import { useState } from 'react'
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

  return (
    <div className="bg-purple-200 rounded-xl p-4 my-2 text-purple-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <span className={`text-3xl transition-colors ${open ? 'text-purple-500' : ''}`}>
            {open ? '▲' : '▼'}
          </span>
          <h3 className="text-3xl font-semibold font-[Montserrat]">{title}</h3>
        </div>
        <p className="text-3xl font-semibold font-[Montserrat]">{date}</p>
      </button>

      {open && (
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="md:basis-3/5 text-lg text-slate-700 font-[Montserrat]">{description}</div>
          <div className="md:basis-2/5 flex flex-col gap-2">
            <div className="relative w-full h-48">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
              />
            </div>
            <a
              href={signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-purple-100 hover:bg-purple-300 text-purple-800 font-semibold px-4 py-2 rounded-lg text-sm transition-colors mb-4"
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
