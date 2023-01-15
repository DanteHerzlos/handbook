import React from 'react';
import cl from '../styles/components/SearchInput.module.css';

const SearchInput = () => {
  return (
    <div>
      <input className={cl.input} placeholder="Поиск..." />
    </div>
  );
};

export default SearchInput;
