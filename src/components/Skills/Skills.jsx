import React from 'react';
import { FaCode } from 'react-icons/fa';

const Skills = ({ skills, setSkills }) => {
  return (
    <div style={{ background: 'var(--color-card)', padding: '24px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div style={{ marginBottom: '16px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FaCode /> Что умеете?
      </div>
      <textarea
        placeholder="Напишите через запятую, например: JavaScript, React, работа в команде"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        rows="3"
        style={{ display: 'block', width: '100%', padding: '12px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '10px', fontSize: '14px', fontFamily: 'inherit' }}
      />
    </div>
  );
};

export default Skills;