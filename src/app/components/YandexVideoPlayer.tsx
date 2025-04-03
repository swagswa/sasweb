'use client';

interface YandexVideoPlayerProps {
  src: string;
}

export default function YandexVideoPlayer({ src }: YandexVideoPlayerProps) {
  // Преобразуем обычную ссылку на Яндекс.Диск в ссылку для встраивания
  // Формат ссылки: https://disk.yandex.ru/i/XXXX -> https://disk.yandex.ru/video/embed/XXXX
  const embedSrc = src.replace('disk.yandex.ru/i/', 'disk.yandex.ru/video/embed/');
  
  return (
    <div style={{ minWidth: '100%' }}>
      <div style={{ position: 'relative', aspectRatio: '16/9' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', background: 'black' }}>
          <iframe 
            src={embedSrc}
            style={{
              position: 'absolute',
              width: '100%', 
              height: '100%', 
              border: 'none',
              background: 'black'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            frameBorder="0" 
            allowFullScreen
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
