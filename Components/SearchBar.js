// components/SearchBar.js
import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 pl-10"
                placeholder="Search by Product Name..."
                value={value}
                onChange={onChange}
            />
            <BsSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
        </div>
    );
};

export default SearchBar;
