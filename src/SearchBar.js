import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <InputGroup className="mb-1">
      <FormControl
        placeholder="Search Product"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
