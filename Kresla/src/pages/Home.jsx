import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Award,
  Shield,
  ArrowRight,
  Quote,
  ChevronRight,
  Sparkles,
  Target,
  Heart,
  Zap,
  Smile,
  Truck,
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

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Дизайнер интерьера',
      text: 'Кресло изменило мою жизнь. Работаю по 10 часов, но спина больше не болит. Качество на высшем уровне.',
      rating: 5,
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Руководитель отдела',
      text: 'Заказали 12 кресел для офиса. Коллеги в восторге. Сервис, доставка, качество — всё на 5+.',
      rating: 5,
    },
    {
      name: 'Елена Козлова',
      role: 'Фрилансер',
      text: 'Долго выбирала, остановилась на Executive Pro. Удобно, стильно, чувствуется премиум.',
      rating: 4,
    },
  ];

  return (
    <div>
      {/* Главная секция — Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/catalog" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <span>Выбрать идеальное кресло</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link to="/about" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition">
                  <span>Узнать о нас</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {heroBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="w-8 h-8 mx-auto mb-3 text-indigo-300" />
                    <h3 className="font-semibold text-sm">{benefit.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80"
                alt="Премиум офисное кресло"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-bold">4.9</span>
                </div>
                <p className="text-gray-600 text-sm">На основе 124 отзывов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают именно нас?
            </h2>
            <p className="text-xl text-gray-600">
              Мы не просто продаём кресла — мы создаём комфорт, который меняет вашу жизнь
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
                <reason.icon className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные модели */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Популярные модели</h2>
              <p className="text-gray-600 mt-2">Выберите своё идеальное кресло</p>
            </div>
            <Link to="/catalog" className="text-indigo-600 font-medium flex items-center hover:text-indigo-700">
              Посмотреть всё <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                    <div className="text-right">
                      {product.oldPrice && (
                        <div className="text-gray-500 line-through text-sm">₽{product.oldPrice.toLocaleString()}</div>
                      )}
                      <div className="text-lg font-bold text-gray-900">₽{product.price.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-gray-700 text-sm mr-3">Цвета:</span>
                    <div className="flex space-x-2">
                      {product.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full text-center py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Quote className="w-12 h-12 mx-auto mb-6 text-indigo-500" />
            <h2 className="text-4xl font-bold mb-6">Отзывы клиентов</h2>
            <p className="text-xl text-gray-300">
              Тысячи довольных клиентов по всей России уже оценили качество наших кресел
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <p className="text-gray-200 mb-6 leading-relaxed">
                  «{testimonial.text}»
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;