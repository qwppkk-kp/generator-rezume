import React from 'react';

const ResumePDF = ({ formData, photo, education, experience, skills, template }) => {
  
  // классика
  const ClassicTemplate = () => (
    <div style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '15mm',
      boxSizing: 'border-box',
      fontFamily: 'Times New Roman, serif',
      backgroundColor: '#FFFFFF',
      color: '#2C2C2C',
      wordBreak: 'break-all',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      whiteSpace: 'normal'
    }}>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', borderBottom: '2px solid #7C6E65', paddingBottom: '15px', flexWrap: 'wrap' }}>
        {photo && (
          <img src={photo} alt="Фото" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #7C6E65', flexShrink: 0 }} />
        )}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '28px', color: '#7C6E65', margin: 0, wordBreak: 'break-word' }}>{formData.name || 'ФИО'}</h1>
          <p style={{ margin: '5px 0', color: '#6B6B6B', wordBreak: 'break-word' }}>
            {formData.email && <span>✉️ {formData.email} &nbsp;|&nbsp;</span>}
            {formData.phone && <span>📞 {formData.phone}</span>}
          </p>
          {formData.position && <p style={{ color: '#7C6E65', fontStyle: 'italic', wordBreak: 'break-word' }}>{formData.position}</p>}
        </div>
      </div>

      {education.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', borderBottom: '1px solid #E8E6E3', paddingBottom: '5px', color: '#7C6E65' }}>Образование</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginTop: '10px' }}>
              <strong style={{ wordBreak: 'break-word' }}>{edu.institution}</strong>
              {edu.degree && <div style={{ wordBreak: 'break-word' }}>{edu.degree}</div>}
              {edu.year && <div style={{ color: '#6B6B6B', fontSize: '12px' }}>Год окончания: {edu.year}</div>}
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', borderBottom: '1px solid #E8E6E3', paddingBottom: '5px', color: '#7C6E65' }}>Опыт работы</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginTop: '10px' }}>
              <strong style={{ wordBreak: 'break-word' }}>{exp.company}</strong>
              {exp.position && <div style={{ wordBreak: 'break-word' }}>{exp.position}</div>}
              {exp.yearStart && (
                <div style={{ color: '#6B6B6B', fontSize: '12px' }}>
                  {exp.yearStart} — {exp.yearEnd || 'настоящее время'}
                </div>
              )}
              {exp.description && (
                <div style={{ marginTop: '5px', fontSize: '12px', wordBreak: 'break-word', whiteSpace: 'normal', lineHeight: '1.4' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {skills && (
        <div>
          <h2 style={{ fontSize: '20px', borderBottom: '1px solid #E8E6E3', paddingBottom: '5px', color: '#7C6E65' }}>Навыки</h2>
          <p style={{ marginTop: '10px', wordBreak: 'break-word', whiteSpace: 'normal' }}>{skills}</p>
        </div>
      )}
    </div>
  );

  // современно
  const ModernTemplate = () => (
    <div style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '15mm',
      boxSizing: 'border-box',
      fontFamily: 'Helvetica, sans-serif',
      backgroundColor: '#FFFFFF',
      color: '#2C2C2C',
      wordBreak: 'break-all',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      whiteSpace: 'normal'
    }}>
      {photo && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={photo} alt="Фото" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', border: '3px solid #7C6E65' }} />
        </div>
      )}
      
      <h1 style={{ fontSize: '32px', textAlign: 'center', color: '#7C6E65', margin: 0, wordBreak: 'break-word' }}>{formData.name || 'ФИО'}</h1>
      {formData.position && <p style={{ textAlign: 'center', color: '#6B6B6B', marginTop: '5px', wordBreak: 'break-word' }}>{formData.position}</p>}
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', margin: '20px 0', padding: '15px 0', borderTop: '1px solid #E8E6E3', borderBottom: '1px solid #E8E6E3', flexWrap: 'wrap' }}>
        {formData.email && <div style={{ wordBreak: 'break-word' }}>✉️ {formData.email}</div>}
        {formData.phone && <div style={{ wordBreak: 'break-word' }}>📞 {formData.phone}</div>}
      </div>

      {education.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: '#7C6E65', marginBottom: '15px' }}>Образование</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <strong style={{ wordBreak: 'break-word' }}>{edu.institution}</strong>
                {edu.year && <span style={{ color: '#6B6B6B', fontSize: '12px', whiteSpace: 'nowrap' }}>{edu.year}</span>}
              </div>
              {edu.degree && <div style={{ color: '#6B6B6B', wordBreak: 'break-word' }}>{edu.degree}</div>}
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: '#7C6E65', marginBottom: '15px' }}>Опыт работы</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <strong style={{ wordBreak: 'break-word' }}>{exp.company || 'Компания'}</strong>
                {exp.yearStart && (
                  <span style={{ color: '#6B6B6B', fontSize: '12px', whiteSpace: 'nowrap' }}>
                    {exp.yearStart} — {exp.yearEnd || 'настоящее время'}
                  </span>
                )}
              </div>
              {exp.position && <div style={{ color: '#7C6E65', wordBreak: 'break-word' }}>{exp.position}</div>}
              {exp.description && (
                <div style={{ marginTop: '5px', fontSize: '12px', wordBreak: 'break-word', whiteSpace: 'normal', lineHeight: '1.4' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {skills && (
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: '#7C6E65', marginBottom: '10px' }}>Навыки</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.split(',').map((skill, i) => (
              <span key={i} style={{ background: '#F5F5F5', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', wordBreak: 'break-word' }}>{skill.trim()}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // минималистика
  const MinimalTemplate = () => (
    <div style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '15mm',
      boxSizing: 'border-box',
      fontFamily: 'Georgia, serif',
      backgroundColor: '#FFFFFF',
      color: '#2C2C2C',
      wordBreak: 'break-all',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      whiteSpace: 'normal'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'normal', margin: '0 0 5px 0', letterSpacing: '-1px', wordBreak: 'break-word' }}>{formData.name || 'ФИО'}</h1>
      {formData.position && <p style={{ fontSize: '14px', color: '#6B6B6B', marginBottom: '20px', wordBreak: 'break-word' }}>{formData.position}</p>}
      
      <div style={{ marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid #E8E6E3', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {formData.email && <span style={{ wordBreak: 'break-word' }}>{formData.email}</span>}
        {formData.phone && formData.email && <span>|</span>}
        {formData.phone && <span style={{ wordBreak: 'break-word' }}>{formData.phone}</span>}
      </div>

      {education.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'normal', marginBottom: '10px' }}>Образование</h2>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div><strong style={{ wordBreak: 'break-word' }}>{edu.institution}</strong></div>
              {edu.degree && <div style={{ wordBreak: 'break-word' }}>{edu.degree}</div>}
              {edu.year && <div style={{ color: '#6B6B6B' }}>{edu.year}</div>}
            </div>
          ))}
        </div>
      )}

      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'normal', marginBottom: '10px' }}>Опыт работы</h2>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div>
                <strong style={{ wordBreak: 'break-word' }}>{exp.company}</strong>
                {exp.yearStart && (
                  <span style={{ color: '#6B6B6B', fontSize: '12px', whiteSpace: 'nowrap' }}>
                    ({exp.yearStart}—{exp.yearEnd || 'н.в.'})
                  </span>
                )}
              </div>
              {exp.position && <div style={{ wordBreak: 'break-word' }}>{exp.position}</div>}
              {exp.description && (
                <div style={{ fontSize: '12px', marginTop: '4px', wordBreak: 'break-word', whiteSpace: 'normal', lineHeight: '1.4' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {skills && (
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'normal', marginBottom: '8px' }}>Навыки</h2>
          <p style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>{skills}</p>
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

export default ResumePDF;