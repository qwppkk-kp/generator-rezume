import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import Form from './components/Form/Form';
import Preview from './components/Preview/Preview';
import ResumePDF from './components/ResumePDF';
import PhotoUpload from './components/PhotoUpload/PhotoUpload';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Controls from './components/Controls/Controls';
import TemplateSelector from './components/TemplateSelector/TemplateSelector';
import About from './components/About';
import Contacts from './components/Contacts';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: ''
  });
  const [errors, setErrors] = useState({});
  const [photo, setPhoto] = useState(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState('');
  const [template, setTemplate] = useState('classic');
  const [isLoaded, setIsLoaded] = useState(false);
  const previewRef = useRef();
  const pdfRef = useRef();

  // Вспомогательные функции для форматирования
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

  // Валидация ФИО (минимум 2 слова)
  const validateName = (name) => {
    const words = name.trim().split(/\s+/);
    return words.length >= 2 && words.length <= 4;
  };

  // Валидация email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Форматирование телефона в маску +7 (xxx) xxx-xx-xx
  const formatPhone = (value) => {
    let numbers = value.replace(/\D/g, '');
    
    if (numbers.startsWith('8')) {
      numbers = '7' + numbers.slice(1);
    }
    
    if (numbers.length > 0 && !numbers.startsWith('7')) {
      numbers = '7' + numbers;
    }
    
    numbers = numbers.slice(0, 11);
    
    let formatted = '';
    if (numbers.length > 0) {
      formatted = '+7';
      if (numbers.length > 1) {
        formatted += ' (' + numbers.slice(1, 4);
      }
      if (numbers.length > 4) {
        formatted += ') ' + numbers.slice(4, 7);
      }
      if (numbers.length > 7) {
        formatted += '-' + numbers.slice(7, 9);
      }
      if (numbers.length > 9) {
        formatted += '-' + numbers.slice(9, 11);
      }
    }
    
    return formatted;
  };

  // Общая валидация перед экспортом
  const validateBeforeExport = () => {
    let isValid = true;
    
    // Проверка образования
    for (let i = 0; i < education.length; i++) {
      if (education[i].institution.trim() === '') {
        alert('Заполните учебное заведение в блоке образования');
        isValid = false;
        break;
      }
    }
    
    // Проверка опыта работы
    if (isValid) {
      for (let i = 0; i < experience.length; i++) {
        if (experience[i].company.trim() === '') {
          alert('Заполните название компании в блоке опыта работы');
          isValid = false;
          break;
        }
      }
    }
    
    return isValid;
  };

  // Обработчик изменения полей с форматированием
  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'name') {
      formattedValue = capitalizeEachWord(value);
    }
    if (name === 'position') {
      formattedValue = capitalizeFirst(value);
    }
    
    setFormData({ ...formData, [name]: formattedValue });
    
    // Валидация
    if (name === 'name') {
      if (!validateName(formattedValue) && formattedValue !== '') {
        setErrors({ ...errors, name: 'Введите ФИО (минимум 2 слова)' });
      } else {
        setErrors({ ...errors, name: '' });
      }
    }
    if (name === 'email') {
      if (!validateEmail(value) && value !== '') {
        setErrors({ ...errors, email: 'Введите корректный email' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }
    if (name === 'position') {
      if (formattedValue === '') {
        setErrors({ ...errors, position: 'Укажите желаемую должность' });
      } else {
        setErrors({ ...errors, position: '' });
      }
    }
  };

  // Обработчик изменения телефона с маской
  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
    
    const numbers = formatted.replace(/\D/g, '');
    if (numbers.length === 11 && numbers.startsWith('7')) {
      setErrors({ ...errors, phone: '' });
    } else if (formatted !== '') {
      setErrors({ ...errors, phone: 'Введите номер в формате +7 (xxx) xxx-xx-xx' });
    }
  };

  // Сброс всех данных
  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', position: '' });
    setPhoto(null);
    setEducation([]);
    setExperience([]);
    setSkills('');
    setTemplate('classic');
    setErrors({});
  };

  // Экспорт в PDF
  const handleExportPDF = () => {
    if (!validateBeforeExport()) return;
    
    const element = pdfRef.current;
    if (!element) {
      console.error('PDF элемент не найден');
      return;
    }
    
    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: `resume_${formData.name || 'candidate'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, letterRendering: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  // Загрузка из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      const data = JSON.parse(saved);
      setFormData(data.formData || { name: '', email: '', phone: '', position: '' });
      setPhoto(data.photo || null);
      setEducation(data.education || []);
      setExperience(data.experience || []);
      setSkills(data.skills || '');
      setTemplate(data.template || 'classic');
      console.log('📂 ЗАГРУЖЕНО:', data);
    } else {
      console.log('📂 Нет сохранённых данных');
    }
    setIsLoaded(true);
  }, []);

  // Сохранение в localStorage
  
  useEffect(() => {
    if (isLoaded) {
      const dataToSave = {
        formData,
        photo,
        education,
        experience,
        skills,
        template
      };
      localStorage.setItem('resumeData', JSON.stringify(dataToSave));
      console.log('💾 СОХРАНЕНО:', dataToSave);
    }
  }, [formData, photo, education, experience, skills, template, isLoaded]);

  return (
    <BrowserRouter>
      <div className="app" style={{ background: 'var(--color-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <header className="app-header" style={{ background: 'var(--color-card)', padding: '20px', borderBottom: '1px solid var(--color-border)' }}>
          <div className="header-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div>
                <h1 style={{ color: '#7C6E65', margin: 0, fontSize: 'clamp(20px, 5vw, 24px)' }}>
                  Генератор резюме
                </h1>
                <p style={{ color: '#6B6B6B', fontSize: 'clamp(10px, 3vw, 12px)', margin: '5px 0 0 0' }}>
                  Создайте резюме за 5 минут
                </p>
              </div>
            </Link>
            <div style={{ display: 'flex', gap: 'clamp(15px, 4vw, 20px)' }}>
              <Link to="/about" style={{ color: '#7C6E65', textDecoration: 'none', fontSize: 'clamp(12px, 3.5vw, 14px)' }}>О проекте</Link>
              <Link to="/contacts" style={{ color: '#7C6E65', textDecoration: 'none', fontSize: 'clamp(12px, 3.5vw, 14px)' }}>Контакты</Link>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <main className="main-content" style={{ flex: 1, padding: 'clamp(20px, 5vw, 40px) clamp(15px, 4vw, 20px)' }}>
          <Routes>
            <Route path="/" element={
              <div className="app__container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: 'clamp(20px, 5vw, 40px)', alignItems: 'flex-start' }}>
                {/* Левая колонка — форма */}
                <div className="form-section" style={{ flex: '2', minWidth: '280px', width: '100%' }}>
                  <PhotoUpload photo={photo} setPhoto={setPhoto} />
                  <Form 
                    formData={formData} 
                    handleChange={handleChange}
                    handlePhoneChange={handlePhoneChange}
                    errors={errors}
                  />
                  <Education education={education} setEducation={setEducation} />
                  <Experience experience={experience} setExperience={setExperience} />
                  <Skills skills={skills} setSkills={setSkills} />
                  <TemplateSelector currentTemplate={template} onSelectTemplate={setTemplate} />
                  <Controls 
                    formData={formData}
                    photo={photo}
                    education={education}
                    experience={experience}
                    skills={skills}
                    template={template}
                    onReset={handleReset}
                    onExportPDF={handleExportPDF}
                  />
                </div>

                {/* Правая колонка — предпросмотр */}
                <div className="preview-section preview-sticky" style={{ 
                  flex: '1', 
                  minWidth: '280px', 
                  width: '100%',
                  position: 'sticky', 
                  top: '20px', 
                  alignSelf: 'flex-start' 
                }}>
                  <h2 style={{ color: '#7C6E65', textAlign: 'center', marginBottom: '20px', fontSize: 'clamp(18px, 5vw, 22px)', fontWeight: '600' }}>
                    Предпросмотр
                  </h2>
                  <div ref={previewRef}>
                    <Preview 
                      formData={formData} 
                      photo={photo} 
                      education={education} 
                      experience={experience} 
                      skills={skills}
                      template={template}
                    />
                  </div>
                </div>
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        {/* ФУТЕР */}
        <footer className="app-footer" style={{ background: 'var(--color-card)', padding: 'clamp(15px, 4vw, 20px)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ color: 'var(--color-text-light)', fontSize: 'clamp(10px, 3vw, 12px)' }}>
              © 2025 Генератор резюме. Все данные обрабатываются локально, без передачи на сервер.
            </p>
            <p style={{ color: '#6B6B6B', fontSize: 'clamp(9px, 2.5vw, 11px)', marginTop: '5px' }}>
              Профессиональное резюме без усилий
            </p>
          </div>
        </footer>

        {/* Скрытый блок для PDF */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <div ref={pdfRef}>
            <ResumePDF 
              formData={formData} 
              photo={photo} 
              education={education} 
              experience={experience} 
              skills={skills}
              template={template}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;