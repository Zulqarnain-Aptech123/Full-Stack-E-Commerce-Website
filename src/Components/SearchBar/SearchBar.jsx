import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className="headerSearch">

            <input
                type="text"
                placeholder="Search for products..."
            />

            <button type="button">
                <IoSearch />
            </button>

        </div>
    );
};

export default SearchBar;