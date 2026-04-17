import React from 'react';

const About = () => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      background: 'var(--color-card)',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <h1 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>О проекте</h1>
      <p style={{ color: 'var(--color-text)', lineHeight: '1.6', marginBottom: '15px' }}>
        <strong>Генератор резюме</strong> — это бесплатный онлайн-конструктор резюме, который помогает создать профессиональное резюме за 5 минут.
      </p>
      <p style={{ color: 'var(--color-text)', lineHeight: '1.6', marginBottom: '15px' }}>
        Все данные обрабатываются локально в вашем браузере и не передаются на сервер. Вы можете загрузить фото, добавить образование и опыт работы, выбрать один из трёх шаблонов оформления, а затем сохранить результат в PDF или Word.
      </p>
      <p style={{ color: 'var(--color-text)', lineHeight: '1.6', marginBottom: '15px' }}>
        Проект разработан в рамках дипломной работы. Основная цель — сделать процесс создания резюме быстрым, удобным и доступным каждому.
      </p>
      <h2 style={{ color: 'var(--color-primary)', fontSize: '18px', marginTop: '25px', marginBottom: '10px' }}>Технологии</h2>
      <ul style={{ color: 'var(--color-text)', paddingLeft: '20px' }}>
        <li>React 18</li>
        <li>Vite</li>
        <li>html2pdf.js — экспорт в PDF</li>
        <li>docx — экспорт в Word</li>
        <li>localStorage — сохранение данных</li>
      </ul>
    </div>
  );
};

export default About;