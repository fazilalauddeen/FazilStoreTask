// ProductList.js
import React from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';

const ProductList = ({ products, currentPage, productsPerPage, paginate }) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <Container>
      <Row>
        {currentProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <p className="price">Price: ${product.price}</p>
                  <p className="rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination>
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
