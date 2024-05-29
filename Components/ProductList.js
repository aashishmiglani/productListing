import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductList = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className='mb-3'>
                <SearchBar value={searchQuery} onChange={handleSearch} />

            </div>
            {filteredProducts.length === 0 ? (
                <p className="text-gray-600 mt-4">No products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
