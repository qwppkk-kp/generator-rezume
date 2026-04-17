import React from 'react';
import { FaUser } from 'react-icons/fa';

const Form = ({ formData, handleChange, handlePhoneChange, errors }) => {
  return (
    <div style={{ background: 'var(--color-card)', padding: '24px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '20px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaUser style={{ fontSize: '22px' }} /> Расскажите о себе
      </h2>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ marginBottom: '6px', color: 'var(--color-primary)', fontWeight: '500', fontSize: '14px' }}>
          Как к вам обращаться? <span style={{ color: '#C77D6E' }}>*</span>
        </div>
        <input
          name="name"
          placeholder="Иван Иванов"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '12px', background: 'var(--color-bg)', border: errors.name ? '1px solid #C77D6E' : '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '10px', fontSize: '14px' }}
        />
        {errors.name && <div style={{ color: '#C77D6E', fontSize: '12px', marginTop: '4px' }}>{errors.name}</div>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ marginBottom: '6px', color: 'var(--color-primary)', fontWeight: '500', fontSize: '14px' }}>
          Ваша почта <span style={{ color: '#C77D6E' }}>*</span>
        </div>
        <input
          name="email"
          placeholder="ivan@example.com"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '12px', background: 'var(--color-bg)', border: errors.email ? '1px solid #C77D6E' : '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '10px', fontSize: '14px' }}
        />
        {errors.email && <div style={{ color: '#C77D6E', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ marginBottom: '6px', color: 'var(--color-primary)', fontWeight: '500', fontSize: '14px' }}>
          Как с вами связаться? <span style={{ color: '#C77D6E' }}>*</span>
        </div>
        <input
          name="phone"
          placeholder="+7 (999) 123-45-67"
          value={formData.phone}
          onChange={handlePhoneChange}
          style={{ display: 'block', width: '100%', padding: '12px', background: 'var(--color-bg)', border: errors.phone ? '1px solid #C77D6E' : '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '10px', fontSize: '14px' }}
        />
        {errors.phone && <div style={{ color: '#C77D6E', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</div>}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ marginBottom: '6px', color: 'var(--color-primary)', fontWeight: '500', fontSize: '14px' }}>
          Кем вы хотите стать? <span style={{ color: '#C77D6E' }}>*</span>
        </div>
        <input
          name="position"
          placeholder="Frontend-разработчик"
          value={formData.position}
          onChange={handleChange}
          style={{ display: 'block', width: '100%', padding: '12px', background: 'var(--color-bg)', border: errors.position ? '1px solid #C77D6E' : '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '10px', fontSize: '14px' }}
        />
        {errors.position && <div style={{ color: '#C77D6E', fontSize: '12px', marginTop: '4px' }}>{errors.position}</div>}
      </div>
    </div>
  );
};

export default Form;