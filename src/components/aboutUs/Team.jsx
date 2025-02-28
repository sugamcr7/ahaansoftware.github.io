import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ceo from '../../assets/ceo.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import './Team.css';
import { CiLinkedin } from "react-icons/ci";

const data = [
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
  {
    image: ceo,
    name:"Vishal Jaiswal",
    designation: "CEO & Founder",
  },
];

function Team() {
  return (
    <section className="mt-5 team">
      <div className="grid-heading">
        <h2>Meet Our Team</h2>
        <p>
          Whether you require a complex enterprise software development solution
          or seamless software integration, we will take your business to the
          next level of success with IT consulting services & software development
          solutions.
        </p>
      </div>
      <Row className="gy-5 ">
        {data.map((card, index) => (
          <Col key={index} md={3}>  {/* 4 cards per row */}
            <Card className="rounded-4 overflow-hidden border border-light">
              <Card.Img variant="top" src={card.image} className="img-fluid" />
            </Card>
            <div className="fw-bold d-flex justify-content-center align-items-center intro">
                  {card.name}
                 <a href="#"><CiLinkedin className="ms-2" /></a> 
                </div>
                <div className="text-muted text-center mt-2 designation">{card.designation}</div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Team;
