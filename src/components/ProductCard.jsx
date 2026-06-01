import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
            product.badge === 'Премиум' 
              ? 'bg-yellow-400 text-yellow-900'
              : product.badge === 'Хит продаж' || product.badge === 'Топ продаж' || product.badge === 'Хит сезона'
              ? 'bg-red-500 text-white'
              : 'bg-indigo-600 text-white'
          }`}>
            {product.badge}
          </span>
        )}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex space-x-2">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                title={`Цвет ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm">
          {product.reviews} отзывов · Артикул: {product.id.toString().padStart(4, '0')}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                {product.oldPrice.toLocaleString()} ₽
              </span>
            )}
            <div className={`font-bold text-gray-900 ${product.oldPrice ? 'text-xl text-red-600' : 'text-2xl'}`}>
              {product.price.toLocaleString()} ₽
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-5 py-3 rounded-full hover:bg-indigo-700 transition-colors text-sm font-medium shadow-lg shadow-indigo-200 hover:shadow-xl flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;