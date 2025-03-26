'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    // Создаем аудио элемент
    const audio = new Audio('/mp3/o5e3iorC.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Функция для воспроизведения музыки после взаимодействия пользователя
    const playMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Показываем элементы управления через 2 секунды
            setTimeout(() => setShowControls(true), 2000);
          })
          .catch(error => {
            console.error('Ошибка воспроизведения аудио:', error);
          });
      }
    };

    // Добавляем обработчики событий для запуска музыки после взаимодействия
    const events = ['click', 'touchstart', 'scroll'];
    events.forEach(event => {
      window.addEventListener(event, playMusic, { once: true });
    });

    // Очистка при размонтировании
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, playMusic);
      });
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying]);

  // Функция для переключения воспроизведения
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error('Ошибка воспроизведения аудио:', error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${showControls ? 'opacity-70 hover:opacity-100' : 'opacity-0'}`}
    >
      <button 
        onClick={togglePlay}
        className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300"
        aria-label={isPlaying ? 'Остановить музыку' : 'Воспроизвести музыку'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
