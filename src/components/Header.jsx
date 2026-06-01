import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sofa,
  Menu,
  X,
  ShoppingCart,
  Heart,
  ChevronDown,
  Phone,
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const aboutPages = [
    { path: '/about', label: 'О нас' },
    { path: '/mission', label: 'Миссия компании' },
    { path: '/projects', label: 'Реализованные проекты' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-indigo-100 p-2 rounded-xl group-hover:bg-indigo-200 transition-colors">
              <Sofa className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                Кресла<span className="text-indigo-600">Премиум</span>
              </span>
              <span className="block text-xs md:text-sm text-gray-500 -mt-1">Комфорт высшего класса</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/catalog') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Каталог
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button
                className={`flex items-center px-4 py-2 rounded-lg transition-colors font-medium ${
                  aboutPages.some(p => isActive(p.path))
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                О компании
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isAboutDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20">
                  {aboutPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className={`block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                        isActive(page.path) ? 'bg-indigo-50 text-indigo-600' : ''
                      }`}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/advantages"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/advantages') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Преимущества
            </Link>
            <Link
              to="/testimonials"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/testimonials') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Отзывы
            </Link>
            <Link
              to="/contacts"
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive('/contacts') ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Контакты
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            <button className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
            <Link to="/contacts" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Связаться с нами
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link to="/" className="block px-4 py-3 rounded-lg transition-colors font-medium text-gray-700 hover:bg-indigo-50" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link to="/catalog" className="block px-4 py-3 rounded-lg transition-colors font-medium text-gray-700 hover:bg-indigo-50" onClick={() => setIsMenuOpen(false)}>Каталог</Link>

            <div className="px-4 py-2">
              <p className="text-gray-text-xs uppercase tracking-wider font-semibold mb-px">О компании</p>
              <div className="space-y-px ml-px border-l border-gray-borderColorLight pl-px">
                {aboutPages.map((page) => (
                  <Link key={page.path} to={page.path} className="block py-px pl-px text-gray-textBase hover:text-indigo-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/advantages" className="block px-px py-px rounded-lg transition-colors font-medium text-gray-textBase hover:bg-indigo-primaryHover" onClick={() => setIsMenuOpen(false)}>Преимущества</Link>
            <Link to="/testimonials" className="block px-px py-px rounded-lg transition-colors font-medium text-gray-textBase hover:bg-indigo-primaryHover" onClick={() => setIsMenuOpen(false)}>Отзывы</Link>
            <Link to="/contacts" className="block px-px py-px rounded-lg transition-colors font-medium text-gray-textBase hover:bg-indigo-primaryHover" onClick={() => setIsMenuOpen(false)}>Контакты</Link>

            <div className="pt-px border-t border-gray-borderColorLight mt-px">
              <Link to="/contacts" className="btn-primary w-full text-center block mt-px" onClick={() => setIsMenuOpen(false)}>
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;