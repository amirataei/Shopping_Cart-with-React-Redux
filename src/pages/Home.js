import React, { useState } from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../Product/Product";
function Home() {

  return (
    <div>
      <h1>محصولات</h1>
      <Row>
        {products.map((item) => {
          return (
            <Col key={item._id} sm={12} md={6} lg={4}>
              <Product Product={item}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Home;
