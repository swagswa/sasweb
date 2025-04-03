'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    ymaps?: {
      ready: (callback: () => void) => void;
      Map: new (container: HTMLElement, options: MapOptions) => YMap;
    };
  }
}

interface MapOptions {
  center: [number, number];
  zoom: number;
  controls: string[];
  type: string;
}

interface YMap {
  geoObjects: {
    add: (placemark: YPlacemark) => void;
  };
  container: {
    getElement: () => HTMLElement;
  };
}

interface YPlacemark {
  geometry: {
    coordinates: [number, number];
  };
  properties: {
    balloonContent: string;
  };
  options: {
    preset: string;
    iconColor: string;
  };
}

export default function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const mapInstanceRef = useRef<YMap | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current || mapInstanceRef.current) return;

    if (!scriptRef.current) {
      scriptRef.current = document.createElement('script');
      scriptRef.current.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш-api-ключ&lang=ru_RU';
      scriptRef.current.async = true;
      
      scriptRef.current.onload = () => {
        if (!window.ymaps) return;
        
        window.ymaps.ready(() => {
          if (mapRef.current && !mapInstanceRef.current && window.ymaps) {
            mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
              center: [55.741951, 37.599896],
              zoom: 17,
              controls: ['zoomControl'],
              type: 'yandex#map'
            });

            const mapElement = mapInstanceRef.current.container.getElement();
            if (mapElement) {
              mapElement.style.filter = 'grayscale(100%)';
            }

            const placemark = {
              geometry: {
                coordinates: [55.741951, 37.599896] as [number, number]
              },
              properties: {
                balloonContent: 'Курсовой переулок, 8/2'
              },
              options: {
                preset: 'islands#dotIcon',
                iconColor: '#FFD700'
              }
            };

            mapInstanceRef.current.geoObjects.add(placemark);
          }
        });
      };

      document.body.appendChild(scriptRef.current);
    }

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[300px] md:h-[600px] rounded-lg overflow-hidden"
      style={{ aspectRatio: '16/9' }}
    />
  );
}
