import React from 'react';
import { BsSearch } from 'react-icons/bs';

// Component SearchForm - Tìm kiếm
export default function SearchForm({ onChangeValue }) {
  return (
    <div className="search-section">
      <div className="search-wrapper">
        <BsSearch className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Tìm theo name hoặc username..."
          onChange={(e) => onChangeValue(e.target.value)}
        />
      </div>
    </div>
  );
}

