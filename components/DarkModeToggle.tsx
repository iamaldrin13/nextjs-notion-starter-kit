import * as React from 'react'
import { useDarkMode } from '../lib/use-dark-mode'

export const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <button
      className='dark-mode-toggle'
      onClick={toggleDarkMode}
      aria-label='Toggle dark mode'
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  )
}