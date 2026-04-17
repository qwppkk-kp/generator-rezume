import React, { useState, useRef } from 'react';

const SimpleCropper = ({ image, onSave, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imgRef = useRef();

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSave = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = imgRef.current;
  
  canvas.width = 200;
  canvas.height = 200;
  
  // Получаем размеры контейнера (круглой области)
  const container = document.querySelector('.cropper-container');
  if (!container) return;
  
  const containerRect = container.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();
  
  // Вычисляем, какая часть изображения видна внутри круга
  const visibleLeft = (containerRect.left - imgRect.left) / imgRect.width;
  const visibleTop = (containerRect.top - imgRect.top) / imgRect.height;
  const visibleWidth = containerRect.width / imgRect.width;
  const visibleHeight = containerRect.height / imgRect.height;
  
  // Рисуем видимую область на canvas
  ctx.drawImage(
    img,
    visibleLeft * img.naturalWidth,
    visibleTop * img.naturalHeight,
    visibleWidth * img.naturalWidth,
    visibleHeight * img.naturalHeight,
    0, 0, 200, 200
  );
  
  const croppedImage = canvas.toDataURL('image/jpeg', 0.9);
  onSave(croppedImage);
};

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.9)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    >
      <div
  className="cropper-container"
  style={{
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid white',
    position: 'relative',
    background: '#333'
  }}
>
        <img
          ref={imgRef}
          src={image}
          alt=""
          style={{
            width: `${200 * zoom}px`,
            height: `${200 * zoom}px`,
            position: 'absolute',
            left: position.x,
            top: position.y,
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none'
          }}
          onMouseDown={handleMouseDown}
          draggable={false}
        />
      </div>
      
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.01"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            style={{ width: '200px' }}
          />
          <div style={{ color: 'white', fontSize: '12px' }}>Масштаб</div>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 20px',
              background: 'transparent',
              color: '#ff6b6b',
              border: '1px solid #ff6b6b',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            style={{
              padding: '8px 20px',
              background: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Сохранить
          </button>
        </div>
        
        <div style={{ color: '#aaa', fontSize: '11px', marginTop: '10px' }}>
          💡 Перетащите фото • Ползунок для масштаба
        </div>
      </div>
    </div>
  );
};

export default SimpleCropper;