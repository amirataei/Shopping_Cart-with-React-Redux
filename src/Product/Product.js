import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Addtocart} from '../action'
function Product({ Product }) {
  const dispatch = useDispatch()

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${Product._id}`}>
        <Card.Img src={Product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${Product._id}`}>
          <Card.Title as="div"> {Product.name} </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="h3">{Product.price}</Card.Text>
      <Button onClick={() => dispatch(Addtocart(Product._id))}>افزودن به سبد خرید</Button>
    </Card>
  );
}

export default Product;
