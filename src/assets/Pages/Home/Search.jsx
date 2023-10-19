import React, { useState } from 'react';

const Search = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        // Perform your search logic here
        // onSearch({ name, category });
    };

    return (
        <div className="flex">
            <input
                type="text"
                id="name"
                value={name}
                placeholder='Search by name'
                onChange={(e) => setName(e.target.value)}
                className='rounded-l-full p-2 pl-3 '
            />
            <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='rounded-l-none p-2 text-slate-500'
            >
                <option value="">Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
            </select>

            <button className='bg-cyan-500 px-5 rounded-r-full p-2' onClick={handleSearch}>
                Search
            </button>
        </div>


    );
};

export default Search;
