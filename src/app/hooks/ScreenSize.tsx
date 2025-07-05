// React Hook to get screen width
// TODO: make this support screen height as well once that is needed
// TODO: figure out if debouncing this is needed
// Blame robin for the bad naming here <3

import { useState, useEffect } from "react";

export const ScreenSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
};
