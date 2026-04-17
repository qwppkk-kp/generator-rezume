import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FiSun style={{ 
        fontSize: '18px', 
        color: !darkMode ? 'var(--color-primary)' : 'var(--color-text-light)',
        cursor: 'pointer'
      }} />
      
      <label style={{ cursor: 'pointer' }}>
        <div style={{
          width: '44px',
          height: '22px',
          background: darkMode ? 'var(--color-primary)' : 'var(--color-secondary)',
          borderRadius: '22px',
          position: 'relative',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            width: '18px',
            height: '18px',
            background: '#FFFFFF',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: darkMode ? '24px' : '2px',
            transition: 'left 0.3s ease',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }} />
        </div>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          style={{ display: 'none' }}
        />
      </label>
      
      <FiMoon style={{ 
        fontSize: '18px', 
        color: darkMode ? 'var(--color-primary)' : 'var(--color-text-light)',
        cursor: 'pointer'
      }} />
    </div>
  );
};

export default ThemeToggle;