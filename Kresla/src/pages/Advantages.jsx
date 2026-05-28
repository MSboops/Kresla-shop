import React from 'react';

const Advantages = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Наши преимущества</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Мы предлагаем лучшие офисные кресла с гарантией 5 лет, бесплатной доставкой и 100% удовлетворением.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-2xl font-semibold mb-4">Премиум качество</h3>
            <p className="text-gray-600">
              Используем немецкие газлифты, итальянскую кожу и японские механизмы — только лучшее.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-2xl font-semibold mb-4">Гарантия 5 лет</h3>
            <p className="text-gray-600">
              Самая длинная гарантия на рынке. Мы уверены в надёжности каждого кресла.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-2xl font-semibold mb-4">Бесплатная доставка</h3>
            <p className="text-gray-600">
              По всей России при заказе от 50 000 ₽. Быстро, надёжно, без лишних хлопот.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;