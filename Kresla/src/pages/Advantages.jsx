import React from 'react'

const Advantages = () => {
  const items = [
    'Гарантия 5 лет',
    'Премиум материалы',
    'Эргономика и ортопедическая поддержка',
    'Быстрая сборка и доставка',
  ]
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Наши преимущества</h1>
      <ul className="list-disc pl-6 text-gray-600">
        {items.map(i=> <li key={i} className="mb-2">{i}</li>)}
      </ul>
    </div>
  )
}

export default Advantages
