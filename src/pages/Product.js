import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Product from "../products";
import { useDispatch } from "react-redux";
import {Addtocart} from '../action'
function Products({ match  }) {
  const dispatch = useDispatch()
  const product = Product.find((item) => {
    return item._id === match.params.id;
  });
  return (
    <div>
      <Link to="/" className="btn btn-light">
        بازگشت به صفحه اصلی
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button className="btn-block" type="button" onClick={() => dispatch(Addtocart(product._id))}>
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Products;
