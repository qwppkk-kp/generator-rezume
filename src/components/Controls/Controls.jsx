import React from 'react';
import { exportToWord } from '../../utils/exportToWord';

const Controls = ({ formData, photo, education, experience, skills, template, onReset, onExportPDF }) => {
  
  const handleExportWord = () => {
    exportToWord(formData, photo, education, experience, skills, template);
  };

  return (
    <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <button 
        onClick={onReset}
        style={{ 
          background: 'transparent', 
          color: 'var(--color-primary)', 
          border: '1px solid var(--color-primary)', 
          padding: '8px 20px', 
          borderRadius: '10px', 
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--color-primary)';
          e.target.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'var(--color-primary)';
        }}
      >
        Начать заново
      </button>
      
      <button 
        onClick={onExportPDF}
        style={{ 
          background: 'var(--color-secondary)', 
          color: 'var(--color-primary)', 
          border: 'none', 
          padding: '8px 20px', 
          borderRadius: '10px', 
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--color-primary)';
          e.target.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'var(--color-secondary)';
          e.target.style.color = 'var(--color-primary)';
        }}
      >
        Сохранить в PDF
      </button>
      
      <button 
        onClick={handleExportWord}
        style={{ 
          background: 'var(--color-secondary)', 
          color: 'var(--color-primary)', 
          border: 'none', 
          padding: '8px 20px', 
          borderRadius: '10px', 
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--color-primary)';
          e.target.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'var(--color-secondary)';
          e.target.style.color = 'var(--color-primary)';
        }}
      >
        Сохранить в Word
      </button>
    </div>
  );
};

export default Controls;