import React from 'react';
import './seach-box.style.css';

export const SeachBox = ({ placeholder, handleChange }) => (
    <input type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleChange} />
);