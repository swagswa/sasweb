'use client';

import { useState, useEffect } from 'react';
import MobileMenu from '../../components/MobileMenu';
import GalleryCard from '../../components/GalleryCard';
import Link from 'next/link';
import Image from 'next/image';

const artworks = [
  {
    title: "Futurism",
    artist: "Валерий и Наталья Черкашины",
    size: "100x70",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/02Futurism 100x70.jpg"
  },
  {
    title: "Balet begun",
    artist: "Валерий и Наталья Черкашины",
    size: "90x67,5",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/01 Balet begun 90x67,5 200dpi tif.jpg"
  },
  {
    title: "Balet s lentoi negativ",
    artist: "Валерий и Наталья Черкашины",
    size: "90x70",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/01Balet- s lentoi   negativ.jpg"
  },
  {
    title: "NY 2003",
    artist: "Валерий и Наталья Черкашины",
    size: "100x70",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/02NY2003n2 копи копия.jpg"
  },
  {
    title: "Krest",
    artist: "Валерий и Наталья Черкашины",
    size: "27,5x27,5",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/03Krest 27,5x27,5.jpg"
  },
  {
    title: "M Novoslobodskaia",
    artist: "Валерий и Наталья Черкашины",
    size: "115x254",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/04 M Novoslobodskaia  115x254.jpg"
  },
  {
    title: "NY Moda Miss Moto",
    artist: "Валерий и Наталья Черкашины",
    size: "90x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/05bNY Moda 6 Miss Moto  rama.jpg"
  },
  {
    title: "Tanez 2",
    artist: "Валерий и Наталья Черкашины",
    size: "70x54,5",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/06 Tanez 2 70x54,5.jpg"
  },
  {
    title: "Tanez 2 (2)",
    artist: "Валерий и Наталья Черкашины",
    size: "70x54,5",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/35i Tanez 2 70x54,5.jpg"
  },
  {
    title: "Tanez 60x45",
    artist: "Валерий и Наталья Черкашины",
    size: "60x45",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Tanez2 60x45.jpg"
  },
  {
    title: "Moda NY Metalik",
    artist: "Валерий и Наталья Черкашины",
    size: "100x100",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/13 Moda NY 1 Metalik 3  100x100 .jpg"
  },
  {
    title: "Moda NY Kimono",
    artist: "Валерий и Наталья Черкашины",
    size: "50x50",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/18 Moda NY Kimono 50x50.jpg"
  },
  {
    title: "Balet-bokser",
    artist: "Валерий и Наталья Черкашины",
    size: "66,4x50",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/27 Balet-bokser 66,4x50.jpg"
  },
  {
    title: "Balet-granata",
    artist: "Валерий и Наталья Черкашины",
    size: "92x69,75",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/6Balet- granata 92x69,75.jpg"
  },
  {
    title: "Yoga",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция, серебро",
    imagePath: "/images/cherkash/yoga1 serebroSlitai уменшенная.jpg"
  },
  {
    title: "Goa 2019 (3)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Goa 2019 (3).jpg"
  },
  {
    title: "Goa 2019 (12)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Goa 2019 (12).jpg"
  },
  {
    title: "Goa 2019 (13)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Goa 2019 (13).jpg"
  },
  {
    title: "Goa 2019 (14)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Goa 2019 (14).jpg"
  },
  {
    title: "Goa 2019 (17)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Goa 2019 (17).jpg"
  },
  {
    title: "Цветы (1)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (1).jpg"
  },
  {
    title: "Цветы (2)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (2).jpg"
  },
  {
    title: "Цветы (3)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (3).jpg"
  },
  {
    title: "Цветы (4)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (4).jpg"
  },
  {
    title: "Цветы (5)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (5).jpg"
  },
  {
    title: "Цветы (6)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (6).jpg"
  },
  {
    title: "Цветы (7)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (7).jpg"
  },
  {
    title: "Цветы (8)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (8).jpg"
  },
  {
    title: "Цветы (9)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (9).jpg"
  },
  {
    title: "Цветы (10)",
    artist: "Валерий и Наталья Черкашины",
    size: "80x60",
    description: "Фотоинсталляция",
    imagePath: "/images/cherkash/Цветы (10).jpg"
  }
];

export default function CherkashPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Функция для предзагрузки изображений
    const preloadImages = async () => {
      try {
        // Получаем все URL изображений
        const imageUrls = artworks.map(artwork => artwork.imagePath);
        
        // Счетчик загруженных изображений
        let loadedCount = 0;
        
        // Загружаем изображения последовательно
        for (const url of imageUrls) {
          try {
            // Создаем объект изображения для предзагрузки
            await new Promise((resolve) => {
              if (typeof window !== 'undefined') {
                // Используем createElement вместо конструктора Image
                const img = document.createElement('img');
                img.onload = () => {
                  loadedCount++;
                  console.log(`Загружено ${loadedCount} из ${imageUrls.length} изображений`);
                  resolve(url);
                };
                img.onerror = () => {
                  console.error(`Ошибка загрузки изображения: ${url}`);
                  loadedCount++;
                  resolve(url); // Все равно считаем загруженным, чтобы не блокировать остальные
                };
                img.src = url;
              } else {
                // На сервере просто считаем изображение загруженным
                loadedCount++;
                resolve(url);
              }
            });
          } catch (error) {
            console.error('Ошибка загрузки изображения:', url, error);
          }
        }
        
        console.log('Все изображения загружены');
        setImagesLoaded(true);
      } catch (error) {
        console.error('Ошибка предзагрузки изображений:', error);
        setImagesLoaded(true); // Все равно показываем галерею даже при ошибке
      }
    };

    preloadImages();

    // Добавляем обработчик для Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(() => {
          console.log('ServiceWorker успешно зарегистрирован');
        }).catch(err => {
          console.log('Ошибка регистрации ServiceWorker: ', err);
        });
      });
    }
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-800">Загрузка галереи...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      <div className="fixed top-4 left-4 z-[1000]">
        <Link href="/">
          <Image src="/images/IMG_3471.svg" alt="Logo" width={128} height={128} className="w-24 h-24 md:w-32 md:h-32" style={{position: 'fixed'}} />
        </Link>
      </div>
      {/* Header с кнопкой меню */}
      <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 50 }}>
        <button
          className="w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="w-6 h-0.5 bg-gray-800 mb-1.5"></span>
          <span className="w-6 h-0.5 bg-gray-800 mb-1.5"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Кнопка домой */}
      <div style={{ position: 'fixed', left: '16px', bottom: '16px', zIndex: 52 }}>
        <Link href="/">
          <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
        </Link>
      </div>

      {/* Мобильное меню */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Основной контент */}
      <div className="bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center pt-8">
            <h1 className="text-4xl font-normal">Валерий и Наталья Черкашины</h1>
            <div className="w-24 h-0.5 bg-black mx-auto mt-4 mb-12"></div>
          </div>
          
          <div className="space-y-32">
            {artworks.map((artwork, index) => (
              <GalleryCard
                key={index}
                title={artwork.title}
                artist={artwork.artist}
                year={artwork.size}
                description={artwork.description}
                image={artwork.imagePath}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-32 border-t border-gray-200 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-light mb-8">SAS Art Fashion Gallery</h2>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Мы стремимся создавать пространство, где искусство и мода 
                сливаются воедино, рассказывая уникальные истории через 
                визуальные образы наших талантливых художников.
              </p>
              <div className="flex justify-center space-x-8 mb-12">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">VKontakte</a>
              </div>
              <div className="text-sm text-gray-500">
                2024 SAS Art Fashion Gallery. Все права защищены.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
