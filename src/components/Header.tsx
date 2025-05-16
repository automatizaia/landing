import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquareText } from 'lucide-react';
import { Logo } from './Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Recursos</a>
          <a href="#industries" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Segmentos</a>
          <a href="#testimonials" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Depoimentos</a>
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center transition-colors"
          >
            <MessageSquareText className="w-4 h-4 mr-2" />
            Fale Conosco
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-800 hover:text-blue-600 font-medium px-4 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#industries" 
              className="text-gray-800 hover:text-blue-600 font-medium px-4 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Segmentos
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-800 hover:text-blue-600 font-medium px-4 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquareText className="w-4 h-4 mr-2" />
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
};