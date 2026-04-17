import React from 'react';

const Preview = ({ formData, photo, education, experience, skills, template }) => {
  
  // классика
  const ClassicTemplate = () => (
    <div style={{
      background: 'var(--color-card)',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      padding: '24px',
      overflow: 'hidden'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginBottom: '25px', 
        borderBottom: '2px solid var(--color-primary)', 
        paddingBottom: '15px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flexShrink: 0 }}>
          {photo ? (
            <img src={photo} alt="Фото" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--color-primary)' }} />
          ) : (
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: 'var(--color-secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '2px solid var(--color-primary)'
            }}>
              <span style={{ fontSize: '40px', color: 'var(--color-primary)' }}>👤</span>
            </div>
          )}
        </div>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h1 style={{ fontSize: '24px', color: 'var(--color-primary)', margin: 0, wordBreak: 'break-word' }}>{formData.name || 'ФИО'}</h1>
          
          <div style={{ 
            margin: '5px 0', 
            color: 'var(--color-text-light)', 
            fontSize: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            alignItems: 'center'
          }}>
            {formData.email && <span style={{ whiteSpace: 'nowrap' }}>✉️ {formData.email}</span>}
            {formData.phone && formData.email && <span style={{ whiteSpace: 'nowrap' }}>|</span>}
            {formData.phone && <span style={{ whiteSpace: 'nowrap' }}>📞 {formData.phone}</span>}
          </div>
          
          {formData.position && <p style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontSize: '14px', marginTop: '5px' }}>{formData.position}</p>}
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        {education.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', borderBottom: '1px solid var(--color-border)', paddingBottom: '5px', color: 'var(--color-primary)' }}>Образование</h2>
            {education.map((edu, i) => (
              <div key={i} style={{ marginTop: '10px', wordBreak: 'break-word' }}>
                <strong style={{ color: 'var(--color-text)' }}>{edu.institution}</strong>
                {edu.degree && <div style={{ fontSize: '13px', color: 'var(--color-text)' }}>{edu.degree}</div>}
                {edu.year && <div style={{ color: 'var(--color-text-light)', fontSize: '12px' }}>Год окончания: {edu.year}</div>}
              </div>
            ))}
          </div>
        )}

        {experience.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', borderBottom: '1px solid var(--color-border)', paddingBottom: '5px', color: 'var(--color-primary)' }}>Опыт работы</h2>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginTop: '10px', wordBreak: 'break-word' }}>
                <strong style={{ color: 'var(--color-text)' }}>{exp.company}</strong>
                {exp.position && <div style={{ color: 'var(--color-text)' }}>{exp.position}</div>}
                {exp.yearStart && <div style={{ color: 'var(--color-text-light)', fontSize: '12px' }}>{exp.yearStart} — {exp.yearEnd || 'настоящее время'}</div>}
                {exp.description && <div style={{ marginTop: '5px', fontSize: '12px', color: 'var(--color-text)' }}>{exp.description}</div>}
              </div>
            ))}
          </div>
        )}

        {skills && (
          <div>
            <h2 style={{ fontSize: '18px', borderBottom: '1px solid var(--color-border)', paddingBottom: '5px', color: 'var(--color-primary)' }}>Навыки</h2>
            <p style={{ marginTop: '10px', wordBreak: 'break-word', color: 'var(--color-text)' }}>{skills}</p>
          </div>
        )}
      </div>
    </div>
  );

  // современно
  const ModernTemplate = () => (
    <div style={{
      background: 'var(--color-card)',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      padding: '24px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {photo ? (
          <img src={photo} alt="Фото" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', border: '3px solid var(--color-primary)' }} />
        ) : (
          <div style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            background: 'var(--color-secondary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto',
            border: '3px solid var(--color-primary)'
          }}>
            <span style={{ fontSize: '40px', color: 'var(--color-primary)' }}>👤</span>
          </div>
        )}
      </div>
      
      <h1 style={{ fontSize: '26px', textAlign: 'center', color: 'var(--color-primary)', margin: 0 }}>{formData.name || 'ФИО'}</h1>
      {formData.position && <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginTop: '5px', fontSize: '14px' }}>{formData.position}</p>}
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0', padding: '12px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
        {formData.email && <div style={{ fontSize: '12px', whiteSpace: 'nowrap', color: 'var(--color-text)' }}>✉️ {formData.email}</div>}
        {formData.phone && <div style={{ fontSize: '12px', whiteSpace: 'nowrap', color: 'var(--color-text)' }}>📞 {formData.phone}</div>}
      </div>

      {education.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-primary)', marginBottom: '12px' }}>Образование</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <strong style={{ color: 'var(--color-text)' }}>{edu.institution}</strong>
                {edu.year && <span style={{ color: 'var(--color-text-light)', fontSize: '11px' }}>{edu.year}</span>}
              </div>
              {edu.degree && <div style={{ color: 'var(--color-text-light)', fontSize: '13px' }}>{edu.degree}</div>}
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-primary)', marginBottom: '12px' }}>Опыт работы</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <strong style={{ color: 'var(--color-text)' }}>{exp.company}</strong>
                {exp.yearStart && <span style={{ color: 'var(--color-text-light)', fontSize: '11px' }}>{exp.yearStart} — {exp.yearEnd || 'н.в.'}</span>}
              </div>
              {exp.position && <div style={{ color: 'var(--color-primary)' }}>{exp.position}</div>}
              {exp.description && <div style={{ marginTop: '5px', fontSize: '12px', color: 'var(--color-text)' }}>{exp.description}</div>}
            </div>
          ))}
        </div>
      )}

      {skills && (
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-primary)', marginBottom: '8px' }}>Навыки</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skills.split(',').map((skill, i) => (
              <span key={i} style={{ background: 'var(--color-secondary)', padding: '3px 10px', borderRadius: '15px', fontSize: '11px', color: 'var(--color-text)' }}>{skill.trim()}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // минималистика
  const MinimalTemplate = () => (
    <div style={{
      background: 'var(--color-card)',
      borderRadius: '8px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      padding: '24px'
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'normal', margin: '0 0 5px 0', letterSpacing: '-0.5px', color: 'var(--color-text)' }}>{formData.name || 'ФИО'}</h1>
      {formData.position && <p style={{ fontSize: '13px', color: 'var(--color-text-light)', marginBottom: '15px' }}>{formData.position}</p>}
      
      <div style={{ marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)', fontSize: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', color: 'var(--color-text)' }}>
        {formData.email && <span style={{ whiteSpace: 'nowrap' }}>{formData.email}</span>}
        {formData.phone && formData.email && <span>|</span>}
        {formData.phone && <span style={{ whiteSpace: 'nowrap' }}>{formData.phone}</span>}
      </div>

      {education.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'normal', marginBottom: '8px', color: 'var(--color-text)' }}>Образование</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <div><strong style={{ color: 'var(--color-text)' }}>{edu.institution}</strong></div>
              {edu.degree && <div style={{ fontSize: '13px', color: 'var(--color-text)' }}>{edu.degree}</div>}
              {edu.year && <div style={{ color: 'var(--color-text-light)', fontSize: '11px' }}>{edu.year}</div>}
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'normal', marginBottom: '8px', color: 'var(--color-text)' }}>Опыт работы</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <div>
                <strong style={{ color: 'var(--color-text)' }}>{exp.company}</strong>
                {exp.yearStart && <span style={{ color: 'var(--color-text-light)', fontSize: '11px' }}>({exp.yearStart}—{exp.yearEnd || 'н.в.'})</span>}
              </div>
              {exp.position && <div style={{ fontSize: '13px', color: 'var(--color-text)' }}>{exp.position}</div>}
              {exp.description && <div style={{ fontSize: '11px', marginTop: '3px', color: 'var(--color-text)' }}>{exp.description}</div>}
            </div>
          ))}
        </div>
      )}

      {skills && (
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 'normal', marginBottom: '5px', color: 'var(--color-text)' }}>Навыки</h2>
          <p style={{ fontSize: '13px', color: 'var(--color-text)' }}>{skills}</p>
        </div>
      )}
    </div>
  );

  switch(template) {
    case 'modern':
      return <ModernTemplate />;
    case 'minimal':
      return <MinimalTemplate />;
    default:
      return <ClassicTemplate />;
  }
};

export default Preview;