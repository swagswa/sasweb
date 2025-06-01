'use client';

import Link from 'next/link';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [artistsMenuOpen, setArtistsMenuOpen] = useState(false);
  
  return (
    <>
      {/* Затемненный фон */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ zIndex: 49 }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }}
      />
      
      {/* Меню */}
      <div 
        className={`fixed top-0 right-0 h-full w-[400px] bg-[#FFFFF0]/95 backdrop-blur-sm flex flex-col transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 51 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-8 right-8 hover:opacity-70 transition-opacity duration-300"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <nav className="flex flex-col space-y-8 pt-32 px-12" onClick={(e) => e.stopPropagation()}>
          <Link href="/" className="hover:opacity-70 transition-opacity duration-300 uppercase tracking-wider">
            ГЛАВНАЯ
          </Link>
          
          <div className="relative artists-menu-container">
            <div 
              className="hover:opacity-70 transition-opacity duration-300 uppercase tracking-wider cursor-pointer flex items-center"
              onClick={() => setArtistsMenuOpen(!artistsMenuOpen)}
            >
              ХУДОЖНИКИ
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`ml-2 h-4 w-4 transition-transform duration-500 ${artistsMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div 
              className={`mt-2 pl-4 space-y-3 flex flex-col overflow-hidden transition-all duration-500 ease-in-out ${artistsMenuOpen ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="space-y-1">
                <div className={`transition-all duration-500 delay-75 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link 
                    href="/artist/firsov" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="text-sm hover:opacity-70 transition-opacity duration-300 block py-1"
                  >
                    Алексей Фирсов
                  </Link>
                </div>
                <div className={`transition-all duration-500 delay-150 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link 
                    href="/artist/elkina" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="text-sm hover:opacity-70 transition-opacity duration-300 block py-1"
                  >
                    Надежда Елкина
                  </Link>
                </div>
                <div className={`transition-all duration-500 delay-225 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link 
                    href="/artist/cherkashny" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="text-sm hover:opacity-70 transition-opacity duration-300 block py-1"
                  >
                    Валерий и Наталья Черкашины
                  </Link>
                </div>
                <div className={`transition-all duration-500 delay-300 ${artistsMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                  <Link 
                    href="/artist/tirkin" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="text-sm hover:opacity-70 transition-opacity duration-300 block py-1"
                  >
                    Олег Тыркин
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/video" className="hover:opacity-70 transition-opacity duration-300 uppercase tracking-wider">
            ВИДЕО
          </Link>
          <a href="#contact" onClick={(e) => {
            e.stopPropagation();
            onClose();
          }} className="hover:opacity-70 transition-opacity duration-300 uppercase tracking-wider">
            КОНТАКТЫ
          </a>
        </nav>

        <div className="mt-auto mb-8 px-12 text-sm uppercase tracking-wider">
          SAS gallery
        </div>
      </div>
    </>
  );
}
