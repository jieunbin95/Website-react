import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  let [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jieunbin95/Website-react/products?q=${id}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row className="product-section">
        <Col className="product-img">
          <img src={product?.img} />
        </Col>

        <Col>
          <div className="product-title">{product?.title}</div>
          <div className="product-price">￦{product?.price}</div>
          <div className="product-choice">{product?.choice === true ? "Conscious choice" : ""}</div>

          <Dropdown className="size-btn">
            <Dropdown.Toggle variant="outline-dark">사이즈선택</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="add-btn">
            <Button variant="dark">추가</Button>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
