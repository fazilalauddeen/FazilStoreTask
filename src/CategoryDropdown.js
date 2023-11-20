// CategoryDropdown.js
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CategoryDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Category
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropdown;
