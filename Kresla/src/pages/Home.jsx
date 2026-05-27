import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sofa,
  Star,
  Users,
  Award,
  Shield,
  ArrowRight,
  Check,
  Quote,
  ChevronRight,
  TrendingUp,
  Clock,
  ThumbsUp,
  Target,
  Heart,
  Sparkles,
  Zap,
  Smile,
} from 'lucide-react';

const Home = () => {
  const heroBenefits = [
    {
      icon: Shield,
      title: 'Гарантия 5 лет',
      text: 'Самая длинная гарантия на рынке — мы уверены в качестве',
    },
    {
      icon: Star,
      title: 'Премиум качество',
      text: 'Сертифицированные материалы и немецкая фурнитура',
    },
    {
      icon: Truck,
      title: 'Бесплатная доставка',
      text: 'По всей России при заказе от 50 000 ₽',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Кресло Executive Pro',
      category: 'executive',
      price: 89990,
      oldPrice: 109990,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80',
      rating: 4.8,
      reviews: 124,
      badge: 'Хит продаж',
      colors: ['#2c3e50', '#8b4513', '#1a1a1a'],
    },
    {
      id: 2,
      name: 'Кресло Ergo Comfort',
      category: 'ergonomic',
      price: 74990,
      oldPrice: null,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80',
      rating: 4.9,
      reviews: 89,
      badge: 'Новинка',
      colors: ['#34495e', '#7f8c8d', '#2c3e50'],
    },
    {
      id: 3,
      name: 'Кресло Gamer X',
      category: 'gaming',
      price: 59990,
      oldPrice: 74990,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80',
      rating: 4.7,
      reviews: 203,
      badge: 'Скидка 20%',
      colors: ['#e74c3c', '#2c3e50', '#ecf0f1'],
    },
    {
      id: 4,
      name: 'Кресло Soft Relax',
      category: 'soft',
      price: 45990,
      oldPrice: null,
      image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&q=80',
      rating: 4.6,
      reviews: 67,
      badge: null,
      colors: ['#d4a574', '#8b4513', '#f5deb3'],
    },
  ];

  const reasons = [
    {
      icon: Sparkles,
      title: 'Инновационные технологии',
      text: 'Используем немецкие газлифты, итальянскую кожу и японские механизмы качания — только лучшие компоненты со всего мира.',
    },
    {
      icon: Target,
      title: 'Ортопедическая поддержка',
      text: 'Каждое кресло разработано с участием ведущих ортопедов. Снижает нагрузку на позвоночник на 40% по сравнению с обычными креслами.',
    },
    {
      icon: Heart,
      title: 'Забота о здоровье',
      text: 'Наши кресла помогают сохранить здоровье спины даже при 12-часовом рабочем дне. 94% клиентов отмечают улучшение самочувствия.',
    },
    {
      icon: Zap,
      title: 'Молниеносная сборка',
      text: 'Собирается за 15 минут без специальных инструментов. Подробная видеоинструкция в комплекте.',
    },
    {
      icon: Smile,
      title: '100% удовлетворение',
      text: 'Если кресло не подойдет — вернем деньги в течение 14 дней без вопросов. Мы уверены в качестве!',
    },
    {
      icon: Users,
      title: 'Корпоративным клиентам',
      text: 'Специальные условия для бизнеса: скидки от 5 кресел, индивидуальный дизайн, брендирование, рассрочка.',
    },
  ];

  const stats = [
    { value: '15+', label: 'Лет на рынке' },
    { value: '50 000+', label: 'Довольных клиентов' },
    { value: '500+', label: 'Реализованных проектов' },
    { value: '98%', label: 'Положительных отзывов' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Премиум качество №1 в России по версии 2024</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Ваше идеальное рабочее место{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  начинается с правильного кресла
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Устали от боли в спине после рабочего дня? Наши эргономичные кресла премиум-класса 
                снижают нагрузку на позвоночник на 40% и повышают продуктивность на 25%. 
                Гарантия 5 лет — дольше, чем у любого конкурента.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('catalog')}>
                  <span>Выбрать идеальное кресло</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button onClick={() => navigate('about')}> )