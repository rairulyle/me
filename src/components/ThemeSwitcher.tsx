'use client';

import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { useSyncExternalStore } from 'react';

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ['class'] });
  return () => observer.disconnect();
};

const getSnapshot = () => document.documentElement.classList.contains('dark');
const getServerSnapshot = () => true;

const ThemeSwitcher = () => {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <button
      aria-label='Toggle theme'
      onClick={toggleTheme}
      className='cursor-pointer p-2 transition-transform duration-300 hover:rotate-12'
    >
      <Icon path={isDark ? mdiWeatherNight : mdiWhiteBalanceSunny} size='24px' />
    </button>
  );
};

export default ThemeSwitcher;
