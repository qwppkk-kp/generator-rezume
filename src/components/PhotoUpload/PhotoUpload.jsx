import React, { useState } from 'react';
import SimpleCropper from './SimpleCropper';

const PhotoUpload = ({ photo, setPhoto }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        alert('Можно загружать только JPEG и PNG файлы');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert('Размер файла не должен превышать 2 МБ');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedImage) => {
    setPhoto(croppedImage);
    setShowCropper(false);
    setSelectedImage(null);
  };

  const removePhoto = () => {
    setPhoto(null);
  };

  return (
    <>
      <div style={{ background: 'var(--color-card)', padding: '24px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '16px', fontWeight: '600', color: 'var(--color-primary)', fontSize: '18px' }}>
          Ваше фото
        </div>
        
        {photo ? (
          <div style={{ textAlign: 'center' }}>
            <img 
              src={photo} 
              alt="Фото" 
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--color-primary)', marginBottom: '12px' }} 
            />
            <div>
              <button 
                onClick={removePhoto}
                style={{ background: 'transparent', color: '#C77D6E', border: '1px solid #C77D6E', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}
                onMouseEnter={(e) => { e.target.style.background = '#C77D6E'; e.target.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#C77D6E'; }}
              >
                Удалить фото
              </button>
            </div>
          </div>
        ) : (
          <div>
            <input
              type="file"
              accept="image/jpeg,image/png"
              onChange={handlePhotoChange}
              style={{ display: 'none' }}
              id="photo-input"
            />
            <label 
              htmlFor="photo-input" 
              style={{ display: 'inline-block', background: 'var(--color-secondary)', color: 'var(--color-primary)', border: 'none', padding: '10px 24px', borderRadius: '10px', cursor: 'pointer', fontWeight: '500', fontSize: '14px' }}
            >
              Выберите фото
            </label>
            <div style={{ fontSize: '12px', color: 'var(--color-text-light)', marginTop: '8px' }}>JPEG или PNG, до 2 МБ</div>
          </div>
        )}
      </div>

      {showCropper && selectedImage && (
        <SimpleCropper
          image={selectedImage}
          onSave={handleCropComplete}
          onClose={() => setShowCropper(false)}
        />
      )}
    </>
  );
};

export default PhotoUpload;