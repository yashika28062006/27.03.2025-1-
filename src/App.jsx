import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './style.css';

const App = () => {
  // Static products array
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop',
      image: 'https://via.placeholder.com/150',
      description: 'High-performance laptop',
      avgRating: 4.0,
      totalRatings: 2,
    },
    {
      id: 2,
      name: 'Smartphone',
      image: 'https://via.placeholder.com/150',
      description: 'Latest smartphone',
      avgRating: 3.5,
      totalRatings: 4,
    },
    {
      id: 3,
      name: 'Headphones',
      image: 'https://via.placeholder.com/150',
      description: 'Noise-canceling headphones',
      avgRating: 5.0,
      totalRatings: 1,
    },
  ]);

  // Handle rating submission
  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const newTotalRatings = product.totalRatings + 1;
          const newAvgRating =
            (product.avgRating * product.totalRatings + newRating) /
            newTotalRatings;
          return {
            ...product,
            avgRating: newAvgRating,
            totalRatings: newTotalRatings,
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="app">
      <h1>Product Ratings</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
