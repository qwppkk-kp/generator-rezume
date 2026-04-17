import React from 'react';

const Contacts = () => {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '40px 20px',
      background: 'var(--color-card)',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <h1 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>Контакты</h1>
      <p style={{ color: 'var(--color-text)', marginBottom: '15px' }}>
        По всем вопросам вы можете связаться с автором проекта: Корешкова Полина
      </p>
      <div style={{ marginBottom: '20px' }}>
        <p><strong style={{ color: 'var(--color-text)' }}>Email:</strong> <a href="mailto:resume@example.com" style={{ color: 'var(--color-primary)' }}>resume@example.com</a></p>
      </div>
      <p style={{ color: 'var(--color-text-light)', fontSize: '14px', marginTop: '30px', borderTop: '1px solid var(--color-border)', paddingTop: '15px' }}>
        Если у вас есть предложения по улучшению или вы нашли ошибку — пишите, буду рада обратной связи!
      </p>
    </div>
  );
};

export default Contacts;