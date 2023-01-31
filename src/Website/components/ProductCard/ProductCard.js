import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterBar from "../FilterBar/FilterBar";
import ProCard from "../ProCard/ProCard";

function ProductCard() {
  return (
    <div className="ProductCard">
      <Container>
        <Row className="border-bottom ">
          <Col sm={12}>
            <FilterBar />
          </Col>
        </Row>
        <Row >
          <ProCard />
        </Row>
      </Container>
    </div>
  );
}

export default ProductCard;
