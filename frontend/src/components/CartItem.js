// components/CartItem.js
const CartItem = ({ item, onRemove }) => {
    return (
        <div className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
                <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="font-bold mr-4">
                    ${(item.product.price * item.quantity).toFixed(2)}
                </span>
                <button
                    onClick={() => onRemove(item.product._id)}
                    className="text-red-500 hover:text-red-700"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;