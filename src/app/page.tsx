'use client';

import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import YandexMap from './components/YandexMap'
import SmoothLink from './components/SmoothLink';
import MobileMenu from './components/MobileMenu';
import { useEffect, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const playfair = {
  fontFamily: 'Playfair Display',
  fontWeight: '400',
  subsets: ['latin'],
};

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Устанавливаем состояние загрузки изображений сразу как true
    setImagesLoaded(true);
    
    return () => {
      // Очистка не требуется
    };
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-[#F2F0E6] z-50">
        {/* Можно добавить здесь индикатор загрузки */}
      </div>
    );
  }

  return (
    <div className="relative bg-[#F2F0E6]">
      {/* Hero секция */}
      <section id="hero" className="relative h-screen w-full overflow-hidden hero-section section-transition z-10">
        {/* Фоновый контейнер */}
        <div 
          className="absolute inset-0 w-[115%] h-[115%] -top-[7.5%] left-1/2 -translate-x-1/2 bg-cover bg-center brightness-75"
          style={{
            backgroundImage: 'url("/images/SAS. Новая.pdf-image-010 (1).jpg")',
          }}
        >
          {/* Градиентные наложения */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent h-96" />
        </div>

        {/* Контейнер для контента */}
        <div className="relative h-full w-full content-wrapper">
          {/* Навигация для десктопа */}
          <div className="absolute top-8 right-12 hidden md:flex gap-8 z-10">
            <SmoothLink href="#artists" className="text-sm tracking-wider text-white hover:text-gray-300 transition-colors fade-in-up delay-500">
              ХУДОЖНИКИ
            </SmoothLink>
            <Link 
              href="/video" 
              className="text-sm tracking-wider text-white hover:text-gray-300 transition-colors fade-in-up delay-600"
            >
              ВИДЕО
            </Link>
            <SmoothLink href="#contacts" className="text-sm tracking-wider text-white hover:text-gray-300 transition-colors fade-in-up delay-700">
              КОНТАКТЫ
            </SmoothLink>
          </div>

          {/* Кнопка мобильного меню */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="absolute top-8 right-8 md:hidden z-10 text-white hover:opacity-70 transition-opacity duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Мобильное меню */}
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />

          {/* Логотип в левом верхнем углу удален */}
          
          {/* Центральный SVG вместо текста */}
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <div className="relative w-[350px] h-[220px] md:w-[600px] md:h-[350px] mx-auto fade-in delay-500">
              <Image
                src="/images/IMG_3471.svg"
                alt="SAS ART GALLERY"
                fill
                className="object-contain"
                priority
                loading="eager"
                quality={100}
                style={{
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
          </div>

          {/* Текст слева снизу */}
          <div className="absolute bottom-12 left-12 z-10 max-w-lg">
            <p className="text-white/80 text-sm tracking-wider mb-6 fade-in-up delay-600">
              ЧАСТНАЯ ГАЛЕРЕЯ КЛУБ
              <br />
              ПОСЕЩЕНИЕ ПО ДОГОВОРЕННОСТИ
            </p>
            <a href="#" className="text-white text-sm tracking-wider group inline-flex items-center fade-in-up delay-700">
              Смотреть картины
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Instagram иконка справа снизу */}
          <div className="absolute bottom-12 right-12 z-10">
            <a 
              href="https://www.instagram.com/sas.gallery.club/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="1.5" 
                className="feather feather-instagram fade-in-up delay-700"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Фоновые изображения удалены */}

      {/* Заголовок секции с художниками */}
      <div className="container mx-auto px-4 text-center pt-20">
        <h1 className="text-4xl font-normal">Художники</h1>
        <div className="w-24 h-0.5 bg-black mx-auto mt-4 mb-8"></div>
      </div>

      {/* Секция с художниками */}
      <section id="artists" className="relative bg-[#F2F0E6] py-16 w-full z-10">
        <div className="container mx-auto px-4">
          {/* Первый художник - Алексей */}
          <div className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              <div className="md:col-span-5 md:col-start-2 scroll-animation">
                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src="/images/phirsov.jpg"
                      alt="Алексей Фирсов"
                      fill
                      className="object-cover artist-image"
                      quality={100}
                      style={{
                        objectPosition: '4% center'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 md:col-start-8 scroll-animation">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-black/10"></div>
                  <h2 className="artist-title font-normal text-3xl mb-6 tracking-wider text-black">АЛЕКСЕЙ ФИРСОВ</h2>
                  <p className="text-gray-600 leading-relaxed">
                  Необычный художник и еще более удивительный человек. Свой стиль он называет &quot;лавизм&quot;. Его творчество присутствует в каталоге Sotheby&#39;s: Icons, Russian Pictures and Works of Art. Представленные картины продаются на престижных аукционах Сотбис, Кристи и Филипс.
Работы художника находятся в российских частных и зарубежных собраниях, представлены в Стамбуле, Москве, Лондоне, Париже, Милане, на Кипре и в Дубае, а также в отелях Манжерок, Ориенталь и Фор Сизонс, в собраниях шведской королевской семьи, в музее имени Рериха, Мюльхайм-Рур (Германия) и фонде Майкла Кентского.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Работы Алексея Фирсова */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Первая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/SAS. Новая.pdf-image-003.jpg"
                    alt="Люпины. Сныть. Букет"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">Люпины. Сныть. Букет</h4>
                <p className="text-gray-600">150×200</p>
              </div>
              
              {/* Вторая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/SAS. Новая.pdf-image-004.jpg"
                    alt="Цветение Черёмухи"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">Цветение Черёмухи</h4>
                <p className="text-gray-600">150х200</p>
              </div>
            </div>
            
            {/* Кнопка перехода на страницу художника */}
            <div className="flex justify-center mt-8">
              <Link 
                href="/artist/firsov" 
                className="inline-block px-6 py-3 text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Все работы Алексея Фирсова
              </Link>
            </div>
          </div>

          {/* Разделитель между художниками */}
          <div className="relative bg-[#F2F0E6] w-full py-12 z-10">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center">
                <div className="w-1/4 h-[1px] bg-gray-300"></div>
                <div className="mx-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="2" fill="#9CA3AF"/>
                  </svg>
                </div>
                <div className="w-1/4 h-[1px] bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Второй художник - Надежда */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              <div className="md:col-span-4 md:col-start-2 scroll-animation order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-black/10"></div>
                  <h2 className="artist-title font-normal text-3xl mb-6 tracking-wider text-black">НАДЕЖДА ЕЛКИНА</h2>
                  <p className="text-gray-600 leading-relaxed">
                  Путь художницы действительно вызывает неподдельный интерес. Она обучалась в Московском академическом художественном училище (МАХУ), участвовала в благотворительном мероприятии «Мечты ангела», а более 20 лет посвятила сотрудничеству с известным французским домом моды Chanel в России и за рубежом.
Прослыв одним из ведущих фэшн-экспертов страны, она стала амбассадором-экспертом бренда. Работы художницы представлены в различных городах мира, включая Мадрид, что свидетельствует о международном признании её таланта.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-7 scroll-animation order-1 md:order-2">
                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src="/images/elkina.jpg"
                      alt="Надежда Елкина"
                      fill
                      className="object-cover artist-image"
                      quality={100}
                      style={{
                        objectPosition: 'center 20%'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Работы Надежды Елкиной */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Первая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/SAS. Новая.pdf-image-014.jpg"
                    alt="Дерево счастья"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">Дерево счастья</h4>
                <p className="text-gray-600">170х170</p>
              </div>
              
              {/* Вторая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/SAS. Новая.pdf-image-011.jpg"
                    alt="Дракон охраняющий сакуру"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">Дракон охраняющий сакуру</h4>
                <p className="text-gray-600">150х200</p>
              </div>
            </div>
            
            {/* Кнопка перехода на страницу художницы */}
            <div className="flex justify-center mt-8">
              <Link 
                href="/artist/elkina" 
                className="inline-block px-6 py-3 text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Все работы Надежды Елкиной
              </Link>
            </div>
          </div>

          {/* Разделитель между художниками */}
          <div className="relative bg-[#F2F0E6] w-full py-12 z-10">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center">
                <div className="w-1/4 h-[1px] bg-gray-300"></div>
                <div className="mx-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="2" fill="#9CA3AF"/>
                  </svg>
                </div>
                <div className="w-1/4 h-[1px] bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Третий художник - Валерий и Наталья Черкашины */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              <div className="md:col-span-5 md:col-start-2 scroll-animation">
                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src="/images/cherkash/avacherk.jpg"
                      alt="Валерий и Наталья Черкашины"
                      fill
                      className="object-cover artist-image"
                      quality={100}
                      style={{
                        objectPosition: 'center center',
                        transform: 'scale(1.5)'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 md:col-start-8 scroll-animation">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-black/10"></div>
                  <h2 className="artist-title font-normal text-3xl mb-6 tracking-wider text-black">ВАЛЕРИЙ И НАТАЛЬЯ ЧЕРКАШИНЫ</h2>
                  <p className="text-gray-600 leading-relaxed">
                  Художники, фотографы, перформансисты, издатели, почётные лекторы, которые работают вместе с 1983 года.
Начав с традиционных материалов – живописи, графики и фотографии, они постепенно перешли на работу с фотоизображениями, инсталляциями, перформансами, с 1999 года – цифровыми изображениями и видео, а с 2023 года начали сотрудничать с искусственным интеллектом. 
На их счету более 200 персональных выставок и 270 перформансов в России, Европе и США. Их творчество отличается оригинальным взглядом на общественные и культурные процессы
Работы Черкашиных находятся в крупнейших музейных коллекциях России и США: Русский музей; Эрмитаж (Санкт-Петербург); ГМИИ им. Пушкина (Москва); The Art Institute of Chicago; The San Francisco MOMA; The Boston Museum of Fine Аrts; The Museum of Art Philadelphia; Houston Museum of Fine Arts; и др.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Работы Валерия и Натальи Черкашиных */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Первая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/cherkash/02Futurism 100x70.jpg"
                    alt="Futurism"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">«Нью-Йорк, Метрополис»</h4>
                <p className="text-gray-600">60×45 см, стиль Футуризм, цифровой коллаж</p>
              </div>
              
              {/* Вторая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/cherkash/03Krest 27,5x27,5.jpg"
                    alt="Krest"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">«Нью-Йорк, перекрёсток»</h4>
                <p className="text-gray-600">100х100 см, цифровой коллаж</p>
              </div>
            </div>
            
            {/* Кнопка перехода на страницу художников */}
            <div className="flex justify-center mt-8">
              <Link 
                href="/artist/cherkashny" 
                className="inline-block px-6 py-3 text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Все работы Валерия и Натальи Черкашиных
              </Link>
            </div>
          </div>

          {/* Разделитель между художниками */}
          <div className="relative bg-[#F2F0E6] w-full py-12 z-10">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center">
                <div className="w-1/4 h-[1px] bg-gray-300"></div>
                <div className="mx-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="#9CA3AF" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="2" fill="#9CA3AF"/>
                  </svg>
                </div>
                <div className="w-1/4 h-[1px] bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Четвертый художник - Олег Тыркин */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              <div className="md:col-span-4 md:col-start-2 scroll-animation order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-black/10"></div>
                  <h2 className="artist-title font-normal text-3xl mb-6 tracking-wider text-black">ОЛЕГ ТЫРКИН</h2>
                  <p className="text-gray-600 leading-relaxed">
                  Художник, чья биография тесно связана с переломной эпохой 90-х. Родившись во Владимире в 1965 году, он прошёл путь от курсанта лётного училища до одного из ярких представителей современного искусства. Темы полёта и личной свободы стали основой его творчества. Первая персональная выставка состоялась в 1990 году в парижской галерее «Виктор Гюго» и принесла признание профессионального сообщества. С тех пор его работы выставлялись во Франции, Германии, Швейцарии, Англии и России. В проекте «Хроника падения одной звезды» художник переосмысливает миф об Икаре, приглашая зрителя почувствовать себя частью Вселенной и осознать свою причастность к происходящему. В последние годы Тыркин работает в уникальной технике металлизации, соединяя живопись и скульптуру в глубоко символичных произведениях.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-7 scroll-animation order-1 md:order-2">
                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src="/images/tirkin/ava.jpg"
                      alt="Олег Тыркин"
                      fill
                      className="object-cover artist-image"
                      quality={100}
                      style={{
                        objectPosition: 'center center'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Работы Олега Тыркина */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Первая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/tirkin/автомат перекоса 90х200 х м 2009.jpg"
                    alt="Автомат перекоса"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">Автомат перекоса</h4>
                <p className="text-gray-600">90х200</p>
              </div>
              
              {/* Вторая работа */}
              <div className="flex flex-col gap-4 scroll-animation">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/images/tirkin/первое чувство 130х150 х м 2009.jpg"
                    alt="Первое чувство"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <h4 className="text-xl font-light">Первое чувство</h4>
                <p className="text-gray-600">130х150</p>
              </div>
            </div>
            
            {/* Кнопка перехода на страницу художника */}
            <div className="flex justify-center mt-8">
              <Link 
                href="/artist/tirkin" 
                className="inline-block px-6 py-3 text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Все работы Олега Тыркина
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Секция галереи удалена */}

      {/* Разделитель между секциями галереи и контактами */}
      <div className="relative bg-[#F2F0E6] w-full py-12 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="w-1/4 h-[1px] bg-gray-300"></div>
            <div className="mx-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="6" stroke="#9CA3AF" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="2" fill="#9CA3AF"/>
              </svg>
            </div>
            <div className="w-1/4 h-[1px] bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Фиксированное изображение удалено */}

      {/* Секция с контактами и картой */}
      <section id="contacts" className="relative bg-[#F2F0E6] pt-20 w-full z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Левая колонка с информацией */}
            <div className="space-y-8">
              <div className="text-left">
                <h1 className={`text-5xl font-normal mb-4 text-left invitation-title ${playfair.fontFamily} ${playfair.fontWeight}`}>
                  <span className="block md:inline">Приглашаем вас в галерею</span>{' '}
                  <span className="block md:inline">на Кропоткинской</span>
                </h1>
                <div className="w-24 h-0.5 bg-gray-400 my-4"></div>
                <p className="text-lg text-gray-800 mb-8 mt-8">
                  Мы рады приветствовать вас в нашей галерее современного искусства. Здесь вы найдете уникальные работы талантливых художников и сможете погрузиться в мир искусства.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                В уютной галерее в центре Москвы вы можете посмотреть на работы,&#39; 
                пообщаться с художниками и приобрести понравившиеся произведения искусства.
                Мы находимся по адресу: Курсовой переулок, дом 8/2.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-1">Адрес мастерской:</div>
                  <div className="text-gray-600">Курсовой пер., 8/2, Москва</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Телефон для связи:</div>
                  <div className={`text-base text-gray-800 ${inter.className}`}>
                    +7 985 788 88 25
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-1">Почта:</div>
                  <div className="text-gray-600">sasartgallery@gmail.com</div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-light mb-4">Записаться на просмотр</h3>
                <p className="text-gray-600 mb-6">
                  Позвоните мне или напишите в удобный мессенджер, чтобы договориться
                  об удобном времени для визита в мастерскую.
                </p>
              </div>
            </div>
            
            {/* Правая колонка с картой */}
            <div className="h-full">
              <YandexMap />
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 mt-16 pt-8 pb-8 text-center">
            <h2 className="text-2xl font-light mb-6">SAS Art Gallery</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Мы стремимся создавать пространство, где искусство и мода 
              сливаются воедино, рассказывая уникальные истории через 
              визуальные образы наших талантливых художников.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">VKontakte</a>
            </div>
            <div className="text-sm text-gray-500">
              2024 SAS Art Gallery. Все права защищены.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}