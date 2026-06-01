import React from 'react'
import ProductCard from '../components/ProductCard'

const Catalog = () => {
  const products = Array.from({length:6}).map((_,i)=>({
    id: i+1,
    name: 'Кресло Модель Nitro Seat ' + (i+1),
    price: 39990 + i*5000,
    oldPrice: i%2===0?49990+i*4000:null,
    image: 'https://1s4oyld5dc.ucarecd.net/3e4c8d02-40bc-4a1c-8ba6-84b7ade5e46d/',
    rating: 4.5 + (i%3)/10,
    reviews: 20 + i*10,
    badge: i%2===0?'Хит продаж':null,
    colors:['#2c3e50','#8b4513','#ecf0f1']
  }))

  return (
    <div className="container mx-auto px-4 py-12"> 
      <h1 className="text-3xl font-bold mb-6">Каталог  кресел</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}

export default Catalog
