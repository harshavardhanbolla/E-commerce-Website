// pages/Home.js

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to E-Shop</h1>
            <div className="text-center">
                <p className="text-xl mb-4">Discover our amazing products</p>
                <Link 
                    to="/products" 
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Home;