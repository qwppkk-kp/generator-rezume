import React, { useState } from 'react';
import './Education.css';

const years = [];
for (let i = 2030; i >= 1950; i--) {
  years.push(i);
}

// форматирование
const capitalizeFirst = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const capitalizeEachWord = (str) => {
  if (!str) return str;
  return str.split(' ').map(word => {
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
};

const Education = ({ education, setEducation }) => {
  const [errors, setErrors] = useState({});

  const addEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '' }]);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...education];
    let formattedValue = value;
    
    if (field === 'institution') {
      formattedValue = capitalizeEachWord(value);
    } else if (field === 'degree') {
      formattedValue = capitalizeFirst(value);
    }
    
    updated[index][field] = formattedValue;
    setEducation(updated);
    
    if (field === 'institution' && formattedValue.trim() !== '') {
      setErrors(prev => ({ ...prev, [index]: '' }));
    }
  };

  const removeEducation = (index) => {
    const updated = education.filter((_, i) => i !== index);
    setEducation(updated);
    const newErrors = { ...errors };
    delete newErrors[index];
    setErrors(newErrors);
  };

  return (
    <div style={{ background: 'var(--color-card)', padding: '24px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ marginBottom: '16px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '20px' }}>🎓</span> Где учились?
      </div>
      
      {education.map((edu, index) => (
        <div key={index} className="education__item" style={{ background: 'var(--color-bg)', padding: '16px', borderRadius: '12px', marginBottom: '12px' }}>
          <input
            type="text"
            placeholder="Название вуза, колледжа, школы"
            value={edu.institution}
            onChange={(e) => updateEducation(index, 'institution', e.target.value)}
            style={{ 
              display: 'block', 
              width: '100%', 
              marginBottom: '10px', 
              padding: '10px', 
              background: 'var(--color-card)', 
              border: errors[index] ? '1px solid #C77D6E' : '1px solid var(--color-border)', 
              color: 'var(--color-text)', 
              borderRadius: '8px', 
              fontSize: '14px' 
            }}
          />
          {errors[index] && (
            <div style={{ color: '#C77D6E', fontSize: '12px', marginBottom: '8px' }}>
              {errors[index]}
            </div>
          )}
          <input
            type="text"
            placeholder="Что изучали?"
            value={edu.degree}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '8px', fontSize: '14px' }}
          />
          <select
            value={edu.year}
            onChange={(e) => updateEducation(index, 'year', e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '8px', fontSize: '14px' }}
          >
            <option value="">Когда закончили?</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <button 
            onClick={() => removeEducation(index)}
            style={{ background: 'transparent', color: '#C77D6E', border: '1px solid #C77D6E', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}
            onMouseEnter={(e) => { e.target.style.background = '#C77D6E'; e.target.style.color = '#FFFFFF'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#C77D6E'; }}
          >
            Удалить
          </button>
        </div>
      ))}
      
      <button 
        onClick={addEducation}
        style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', width: '100%', fontWeight: '500', fontSize: '14px' }}
        onMouseEnter={(e) => { e.target.style.background = 'var(--color-primary)'; e.target.style.color = '#FFFFFF'; }}
        onMouseLeave={(e) => { e.target.style.background = 'var(--color-secondary)'; e.target.style.color = 'var(--color-primary)'; }}
      >
        + Добавить место учёбы
      </button>
    </div>
  );
};

export default Education;