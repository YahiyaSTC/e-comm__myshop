import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import ProductImg from "../../../assets/images/product1.webp";
import "./ProCard.css";

function ProCard() {
  return (
    <>
      <Col sm={4}>
        <Card className="proCard">
            <div className="imgg">
          <Card.Img variant="top" src={ProductImg} />
          </div>
          <Card.Body className="border-top">
            <Card.Title>Hand Free</Card.Title>
            <Card.Text className="d-flex gap-2">
              <span>Apple</span>
              <span>
                <b>130 Rs</b>
              </span>
            </Card.Text>
            <Card.Text>Notice the use of .....</Card.Text>
            <Button variant="primary" className="w-100">
              Add To Card
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ProCard;
