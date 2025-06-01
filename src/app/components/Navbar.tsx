'use client';

import { useState, useEffect } from 'react';
import SmoothLink from './SmoothLink';
import Link from 'next/link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [artistsMenuOpen, setArtistsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (artistsMenuOpen && !target.closest('.artists-menu-container')) {
        setArtistsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [prevScrollPos, artistsMenuOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isVisible 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100' 
          : 'bg-transparent border-transparent'
      }`}
      style={{
        opacity: isVisible ? '1' : '0',
        transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="relative artists-menu-container">
              <div 
                className="text-white hover:text-gray-300 transition-colors cursor-pointer flex items-center"
                onClick={() => setArtistsMenuOpen(!artistsMenuOpen)}
              >
                Художники
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 transition-transform duration-500 ${artistsMenuOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div 
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 transition-all duration-500 ease-in-out origin-top ${artistsMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
              >
                <div className={`transition-all duration-500 delay-75 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link href="/artist/firsov" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Алексей Фирсов</Link>
                </div>
                <div className={`transition-all duration-500 delay-150 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link href="/artist/elkina" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Надежда Елкина</Link>
                </div>
                <div className={`transition-all duration-500 delay-225 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link href="/artist/cherkashny" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Валерий и Наталья Черкашины</Link>
                </div>
                <div className={`transition-all duration-500 delay-300 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link href="/artist/tirkin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Олег Тыркин</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl font-light tracking-widest">QM</div>
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              <SmoothLink href="#contacts" className="text-white hover:text-gray-300 transition-colors">Контакты</SmoothLink>
            </div>
            <a href="#" className="nav-link hover:text-gray-600">LOGIN</a>
            <a href="#" className="nav-link hover:text-gray-600">CART (0)</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
