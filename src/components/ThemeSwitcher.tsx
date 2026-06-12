'use client';

import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof document !== 'undefined' && !document.documentElement.classList.contains('dark') ? 'light' : 'dark',
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  return (
    <button
      aria-label='Toggle theme'
      onClick={toggleTheme}
      className='cursor-pointer p-2 transition-transform duration-300 hover:rotate-12'
    >
      <Icon path={theme === 'dark' ? mdiWeatherNight : mdiWhiteBalanceSunny} size='24px' />
    </button>
  );
};

export default ThemeSwitcher;
