import React from 'react'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import "../App.css";
export default function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Row className="w-100">
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="shadow">
                <Card.Body>
                  <h2 className="mb-4 text-center">Login</h2>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
    
                    <Button variant="primary" type="submit" className="w-100 mt-4">
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
}
