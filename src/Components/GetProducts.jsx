import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from './Footer';
import { Card, Button, Form, Container, Row, Col, Spinner } from 'react-bootstrap';
import './theme.css';

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const img_url = 'https://joseph1234.pythonanywhere.com/static/images/';
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const response = await axios.get('https://joseph1234.pythonanywhere.com/api/get_products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="py-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: 'var(--primary)' }}>Discover Our Collection</h2>
        <p className="text-muted">Find the perfect items for your needs</p>
      </div>

      <Form.Group className="mb-4 mx-auto" style={{ maxWidth: '500px' }}>
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2"
        />
      </Form.Group>

      <Carousel />

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" style={{ color: 'var(--secondary)' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row className="g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 border-0 shadow-sm">
                  <div className="p-3" style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img
                      variant="top"
                      src={img_url + product.product_photo}
                      className="h-100 w-100 object-fit-cover"
                      alt={product.product_name}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {product.product_description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold" style={{ color: 'var(--accent)' }}>
                        KSH{product.product_cost}
                      </span>
                      <Button
                        variant="primary"
                        onClick={() => navigate('/makepayment', { state: { product } })}
                        className="px-3"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <h5>No products found</h5>
              <p className="text-muted">Try adjusting your search</p>
            </Col>
          )}
        </Row>
      )}
      <Footer />
    </Container>
  );
};

export default GetProducts;