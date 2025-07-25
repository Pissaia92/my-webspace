// src/app/components/ThemeSwitcher.tsx
'use client'

import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
}