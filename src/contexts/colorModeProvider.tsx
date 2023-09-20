import { createContext, useContext, useLayoutEffect, useState } from 'react';
import { ColorMode } from 'types';

interface ColorModeContextValue {
  colorMode: ColorMode;
  toggleMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined);

const ColorModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  const setMode = (mode: ColorMode) => {
    setColorMode(mode);

    localStorage.setItem('colorMode', mode);

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMode = () => {
    setMode(colorMode === 'light' ? 'dark' : 'light');
  };

  useLayoutEffect(() => {
    if (
      localStorage.colorMode === 'dark' ||
      (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = (): ColorModeContextValue => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

export default ColorModeProvider;
