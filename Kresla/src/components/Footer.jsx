import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sofa,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Instagram,
  Youtube,
  Facebook,
} from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50 animate-bounce"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <footer className="bg-gray-900 text-gray-300">
        {/* Main footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="bg-indigo-900/50 p-2 rounded-xl group-hover:bg-indigo-800/50 transition-colors">
                  <Sofa className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    Кресла<span className="text-indigo-400">Премиум</span>
                  </span>
                  <span className="block text-xs text-gray-500 -mt-1">Комфорт высшего класса</span>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Ведущий производитель премиальных кресел для работы и отдыха. 
                15 лет опыта, 50 000+ довольных клиентов, гарантия качества 5 лет.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-indigo-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Catalog links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Каталог</h4>
              <ul className="space-y-3">
                <li><Link to="/catalog?category=executive" className="hover:text-white transition-colors">Для руководителей</Link></li>
                <li><Link to="/catalog?category=ergonomic" className="hover:text-white transition-colors">Эргономичные</Link></li>
                <li><Link to="/catalog?category=gaming" className="hover:text-white transition-colors">Игровые</Link></li>
                <li><Link to="/catalog?category=soft" className="hover:text-white transition-colors">Мягкие</Link></li>
                <li><Link to="/catalog" className="hover:text-white transition-colors font-medium text-indigo-400">Все кресла →</Link></li>
              </ul>
            </div>

            {/* Information links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Информация</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-white transition-colors">О компании</Link></li>
                <li><Link to="/mission" className="hover:text-white transition-colors">Миссия компании</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Реализованные проекты</Link></li>
                <li><Link to="/advantages" className="hover:text-white transition-colors">Преимущества</Link></li>
                <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Контакты</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">8 (800) 123-45-67</p>
                    <p className="text-gray-500 text-sm">Бесплатно по России</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@kresla-premium.ru" className="hover:text-white transition-colors">
                    info@kresla-premium.ru
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>г. Москва, ул. Тверская, 15</p>
                    <p className="text-gray-500 text-sm">БЦ «Галерея», офис 504</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-500 text-sm">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2024 КреслаПремиум. Все права защищены.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Публичная оферта
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;