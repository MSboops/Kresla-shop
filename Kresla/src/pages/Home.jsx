import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const sampleProducts = [
    { id:1, name:'Кресло Executive Pro', price:89990, oldPrice:109990, image:'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80', rating:4.8, reviews:124, badge:'Хит продаж', colors:['#2c3e50','#8b4513'] },
    { id:2, name:'Кресло Ergo Comfort', price:74990, oldPrice:null, image:'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80', rating:4.9, reviews:89, badge:'Новинка', colors:['#34495e','#7f8c8d'] }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">КреслаПремиум — комфорт и качество</h1>
        <p className="text-gray-600 mb-6">Лучшие кресла для работы и отдыха. 5 лет гарантии, бесплатная доставка по России.</p>
        <div className="flex justify-center gap-4">
          <Link to="/catalog" className="bg-indigo-600 text-white px-6 py-3 rounded-lg">Каталог</Link>
          <Link to="/about" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg">О компании</Link>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Рекомендуемые</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sampleProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
