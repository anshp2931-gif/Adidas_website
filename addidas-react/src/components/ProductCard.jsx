const ProductCard = ({ product }) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-white px-2 py-1 text-[12px] font-bold">
            {product.discount}
          </div>
        )}
      </div>
      <div className="text-red-700 font-bold text-lg leading-none mb-1">
        ₹{product.price}
      </div>
      {product.originalPrice && (
        <div className="mb-2">
          <span className="text-gray-500 text-sm line-through mr-2">
            ₹{product.originalPrice} Original price
          </span>
          <span className="text-gray-500 text-sm">
            {product.discount}
          </span>
        </div>
      )}
      <div className="text-md font-bold mb-1 truncate group-hover:underline">
        {product.name}
      </div>
      <div className="text-gray-500 text-sm mb-1 uppercase tracking-tight">
        {product.category}
      </div>
      {product.colors && (
        <div className="text-gray-500 text-xs mt-1">
          {product.colors}
        </div>
      )}
      {product.noExchange && (
        <div className="text-gray-500 text-xs mt-1 italic">
          No exchange no returns
        </div>
      )}
    </div>
  );
};

export default ProductCard;
