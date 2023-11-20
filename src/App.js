import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import { Container, Row, Col } from 'react-bootstrap';
import CategoryDropdown from './CategoryDropdown';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {

    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(['All Products', ...response.data]))
      .catch(error => console.error('Error fetching categories:', error));

  
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filterProducts = () => {
    let filteredProducts = products;


    if (selectedCategory !== 'All Products') {
      filteredProducts = filteredProducts.filter(product =>
        product.category === selectedCategory
      );
    }

  
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredProducts;
  };

  const totalProducts = filterProducts().length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); 
  };

  const onSearchTermChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); 
  };

  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <Header />

      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <CategoryDropdown
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          </Col>
          <Col md={6}>
            <SearchBar
              searchTerm={searchTerm}
              onSearchTermChange={onSearchTermChange}
              onClearSearch={clearSearchTerm}
            />
          </Col>
        </Row>

        <ProductList
          products={filterProducts()}
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          totalProducts={totalProducts}
          paginate={paginate}
        />
      </Container>

      <Footer />
    </div>
  );
};

export default App;
