'use client';

import { useState, useEffect } from 'react';
import MobileMenu from '../../components/MobileMenu';
import GalleryCard from '../../components/GalleryCard';
import Link from 'next/link';
import Image from 'next/image';

const artworks = [
  {
    title: "Люпины. Сныть. Букет",
    artist: "Алексей Фирсов",
    size: "150×200",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-003.jpg"
  },
  {
    title: "Цветение Черёмухи",
    artist: "Алексей Фирсов",
    size: "150х200",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-004.jpg"
  },
  {
    title: "Ирисы",
    artist: "Алексей Фирсов",
    size: "200х150",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-009.jpg"
  },
  {
    title: "Цветение красной яблони",
    artist: "Алексей Фирсов",
    size: "200х150",
    description: "«Цветение красной яблони» — это праздник весны, запечатлённый на холсте. Художник с особой чуткостью передаёт тот волшебный момент, когда дерево облачается в пышный наряд из нежно-розовых цветов, словно невеста перед венчанием.\n\nКраски на полотне звучат как музыка — яркие, но гармоничные. Каждый цветок прописан с любовью и вниманием к деталям, но при этом картина не теряет целостности впечатления. Розовые и красные оттенки цветов контрастируют с глубокой зеленью молодой листвы, создавая ощущение полноты жизни и буйства природных сил.\n\nЭта работа — не просто изображение цветущего дерева, а метафора обновления и возрождения. Яблоня в народной культуре всегда символизировала плодородие, женское начало, продолжение рода. Глядя на эту картину, зритель невольно проникается оптимизмом и верой в будущее, ведь за прекрасным цветением непременно последуют плоды — как награда за терпение и труд.",
    imagePath: "/images/SAS. Новая.pdf-image-010.jpg"
  },
  {
    title: "Осенний букет на окне",
    artist: "Алексей Фирсов",
    size: "120х100",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-005.jpg"
  },
  {
    title: "Разнотравье. Букет",
    artist: "Алексей Фирсов",
    size: "150x120",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-006.jpg"
  },
  {
    title: "Камыш",
    artist: "Алексей Фирсов",
    size: "200х150",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-007.jpg"
  },
  {
    title: "Абстракция",
    artist: "Алексей Фирсов",
    size: "150х200",
    description: "",
    imagePath: "/images/SAS. Новая.pdf-image-008.jpg"
  }
];

export default function FirsovPage() {
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
            <h1 className="text-4xl font-normal">Алексей Фирсов</h1>
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
