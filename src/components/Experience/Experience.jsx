import React, { useState } from 'react';
import './Experience.css';

const years = [];
for (let i = 2030; i >= 1950; i--) {
  years.push(i);
}

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

const Experience = ({ experience, setExperience }) => {
  const [errors, setErrors] = useState({});

  const addExperience = () => {
    setExperience([...experience, { company: '', position: '', yearStart: '', yearEnd: '', description: '' }]);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experience];
    let formattedValue = value;
    
    if (field === 'company') {
      formattedValue = capitalizeEachWord(value);
    } else if (field === 'position') {
      formattedValue = capitalizeFirst(value);
    }
    
    updated[index][field] = formattedValue;
    setExperience(updated);
    
    if (field === 'company' && formattedValue.trim() !== '') {
      setErrors(prev => ({ ...prev, [index]: '' }));
    }
  };

  const removeExperience = (index) => {
    const updated = experience.filter((_, i) => i !== index);
    setExperience(updated);
    const newErrors = { ...errors };
    delete newErrors[index];
    setErrors(newErrors);
  };

  return (
    <div style={{ background: 'var(--color-card)', padding: '24px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ marginBottom: '16px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '20px' }}>💼</span> Где работали?
      </div>
      
      {experience.map((exp, index) => (
        <div key={index} className="experience__item" style={{ background: 'var(--color-bg)', padding: '16px', borderRadius: '12px', marginBottom: '12px' }}>
          <input
            type="text"
            placeholder="Название компании"
            value={exp.company}
            onChange={(e) => updateExperience(index, 'company', e.target.value)}
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
            placeholder="Кем работали?"
            value={exp.position}
            onChange={(e) => updateExperience(index, 'position', e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '8px', fontSize: '14px' }}
          />
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '140px' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-primary)', marginBottom: '4px' }}>Когда начали?</div>
              <select
                value={exp.yearStart}
                onChange={(e) => updateExperience(index, 'yearStart', e.target.value)}
                style={{ width: '100%', padding: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '8px', fontSize: '14px' }}
              >
                <option value="">Выберите год</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div style={{ flex: '1', minWidth: '140px' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-primary)', marginBottom: '4px' }}>Когда закончили?</div>
              <select
                value={exp.yearEnd}
                onChange={(e) => updateExperience(index, 'yearEnd', e.target.value)}
                style={{ width: '100%', padding: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '8px', fontSize: '14px' }}
              >
                <option value="">Выберите год</option>
                <option value="настоящее время">Работаю сейчас</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <textarea
            placeholder="Чем занимались? Что получилось?"
            value={exp.description}
            onChange={(e) => updateExperience(index, 'description', e.target.value)}
            rows="3"
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit' }}
          />
          <button 
            onClick={() => removeExperience(index)}
            style={{ background: 'transparent', color: '#C77D6E', border: '1px solid #C77D6E', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}
            onMouseEnter={(e) => { e.target.style.background = '#C77D6E'; e.target.style.color = '#FFFFFF'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#C77D6E'; }}
          >
            Удалить
          </button>
        </div>
      ))}
      
      <button 
        onClick={addExperience}
        style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', width: '100%', fontWeight: '500', fontSize: '14px' }}
        onMouseEnter={(e) => { e.target.style.background = 'var(--color-primary)'; e.target.style.color = '#FFFFFF'; }}
        onMouseLeave={(e) => { e.target.style.background = 'var(--color-secondary)'; e.target.style.color = 'var(--color-primary)'; }}
      >
        + Добавить место работы
      </button>
    </div>
  );
};

export default Experience;