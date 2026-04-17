import React from 'react';
import { FaPalette } from 'react-icons/fa';

const templates = [
  { id: 'classic', name: 'Классический' },
  { id: 'modern', name: 'Современный' },
  { id: 'minimal', name: 'Минималистичный' }
];

const TemplateSelector = ({ currentTemplate, onSelectTemplate }) => {
  return (
    <div style={{ background: 'var(--color-card)', padding: '24px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ marginBottom: '16px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaPalette /> Какой стиль вам ближе?
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {templates.map(template => (
          <button
            key={template.id}
            onClick={() => onSelectTemplate(template.id)}
            style={{
              padding: '8px 20px',
              background: currentTemplate === template.id ? 'var(--color-primary)' : 'transparent',
              color: currentTemplate === template.id ? '#FFFFFF' : 'var(--color-primary)',
              border: `1px solid var(--color-primary)`,
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
          >
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;