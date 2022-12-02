import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';

// Assets
import headerImage from '../assets/images/illustrations/header.svg';

const Contact = () => (
  <div className="page contact">
    <Header
      size="small"
      title="Get in touch"
      text="We aim to provide students using online educational environments with greater insight into their own learning journey and performance through the use of AI powered tools."
      buttonLink="/products"
      buttonLabel="our products"
      image={headerImage}
    />
  </div>
);

export default Contact;
