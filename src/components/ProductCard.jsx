import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

// Default product images (Replace with actual URLs or local imports)
const defaultImages = {
  laptop: "https://via.placeholder.com/150?text=Laptop",
  smartphone: "https://via.placeholder.com/150?text=Smartphone",
  headphones: "https://via.placeholder.com/150?text=Headphones",
};

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      {/* Use product.image if available, otherwise use default */}
      <img 
        src={product.image || defaultImages[product.name.toLowerCase()] || "https://via.placeholder.com/150"} 
        alt={product.name} 
        className="product-image" 
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        Average Rating: {product.avgRating.toFixed(1)} ⭐ ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,  // Made optional to handle missing images
    description: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
