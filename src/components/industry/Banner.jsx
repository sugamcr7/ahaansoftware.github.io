import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const IndustryBanner = () => {
  return (
    <div className="banner">
      <Container className="text-center text-white">
        <h1 className="banner-heading">Our <span> Industry</span></h1>
      </Container>
    </div>
  );
};

export default IndustryBanner;
