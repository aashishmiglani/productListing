import React, { useState } from 'react';
import Rating from './Rating';

const ProductCard = ({ product, theme }) => {
    const { title, price, description, category, image, rating } = product;
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg hover:shadow-2xl bg-white m-2">
            <img className={`w-full h-36 sm:h-48 object-contain ${theme === 'dark' ? 'dark:bg-gray-800' : ''}`} src={image} alt={title} />
            <div className="px-4 py-2">
                <div className={`font-bold text-lg sm:text-base mb-2 ${theme === 'dark' ? 'dark:text-gray-300' : 'text-black'}`}>{title}</div>
                {showFullDescription ? (
                    <p className={`text-gray-700 text-xs ${theme === 'dark' ? 'dark:text-gray-300' : 'text-black'}`}>{description}</p>
                ) : (
                    <p className={`text-gray-700 text-xs ${theme === 'dark' ? 'dark:text-gray-300' : 'text-black'}`}>{description.slice(0, 100)}...</p>
                )}
                {description.length > 100 && (
                    <button
                        className="text-blue-500 text-xs font-semibold focus:outline-none"
                        onClick={toggleDescription}
                    >
                        {showFullDescription ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>
            <div className="px-4 py-2">
                <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold ${theme === 'dark' ? 'dark:text-gray-300 dark:bg-gray-600' : 'text-gray-700 bg-gray-200'} mr-2`}>{category}</span>
                <div className="flex items-center">
                    <Rating value={rating.rate} />
                    <p className={`text-gray-700 text-xs ml-1 ${theme === 'dark' ? 'dark:text-gray-300' : 'text-black'}`}>({rating.count} reviews)</p>
                </div>
            </div>
            <div className="px-4 py-2">
                <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold ${theme === 'dark' ? 'dark:text-gray-300 dark:bg-gray-600' : 'text-gray-700 bg-gray-200'} mr-2`}>${price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
