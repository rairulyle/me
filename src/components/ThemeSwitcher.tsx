'use client';

import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <label className='swap swap-rotate p-2'>
      <input type='checkbox' checked={theme === 'light'} onChange={toggleTheme} />
      <Icon className={`swap-on `} path={mdiWhiteBalanceSunny} size='24px' />
      <Icon className={`swap-off `} path={mdiWeatherNight} size='24px' />
    </label>
  );
};

export default ThemeSwitcher;
