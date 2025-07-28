'use client'

import { useState } from 'react'

interface EventDropdownProps {
  title: string
  date: string
  description: string
  imageUrl: string
}

const EventDropdown: React.FC<EventDropdownProps> = ({ title, date, description, imageUrl }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-purple-200 border border-purple-300 rounded-xl p-4 my-2 text-purple-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-purple-700">{date}</p>
        </div>
        <span className="text-xl">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 text-sm">{description}</div>
          <img
            src={imageUrl}
            alt={title}
            className="w-full md:w-40 h-auto rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  )
}

export default EventDropdown
