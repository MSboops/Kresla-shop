import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-gray-600 mb-6">Страница не найдена.</p>
    <Link to="/" className="bg-indigo-600 text-white px-5 py-3 rounded-lg">Вернуться на главную</Link>
  </div>
)

export default NotFound
