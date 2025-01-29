// components/ProductCard.js
const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                <button
                    onClick={() => onAddToCart(product._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;