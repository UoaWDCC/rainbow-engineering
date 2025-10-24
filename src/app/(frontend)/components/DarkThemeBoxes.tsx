'use client';

import { useEffect, useState } from 'react'
export default function DarkThemeBoxes({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setIsDark(saved);

    const onThemeChange = (e: Event) => {
      const { isDark } = (e as CustomEvent).detail ?? {};
      if (typeof isDark === 'boolean') setIsDark(isDark);
    };

    window.addEventListener('themechange', onThemeChange as EventListener);
    return () =>
      window.removeEventListener('themechange', onThemeChange as EventListener);
  }, []);

  //colours for light and darkmode
  const bgColour = isDark ? '#796299' : '#E9D5FF';
  const textColour = isDark ? '#E9D5FF' : '#5f249f';


  //this is for the sponsors page information
  return (
    <div
      className="mt-6 mb-20 font-[Montserrat] p-6 rounded-xl max-w-full mx-auto text-center transition-colors duration-300"
      style={{ backgroundColor: bgColour, color: textColour }}
    >
      {children}
    </div>
  );
}
