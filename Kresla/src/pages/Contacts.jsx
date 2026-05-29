import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-4">Контакты</h1>
    <p className="text-gray-600 mb-2">Телефон: 8 (800) 123-45-67</p>
    <p className="text-gray-600 mb-2">Email: info@kresla-premium.ru</p>
    <p className="text-gray-600">Адрес: г. Москва, ул. Тверская, 15</p>
    <div className="mt-6">
      <Link to="/" className="text-indigo-600 underline">На главную</Link>
    </div>
  </div>
)

export default Contacts
