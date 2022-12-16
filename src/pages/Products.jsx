import React from 'react';
import './shared.css';

// Blocks
import Header from '../blocks/Header/Header';
import CoreValues from '../blocks/CoreValues/CoreValues';
import CardImage from '../blocks/CardImage/CardImage';
import CTA from '../blocks/CTA/CTA';

// Components
import CardIcon from '../components/CardIcon/CardIcon';

// Assets
import headerImage from '../assets/images/illustrations/expo.svg';
import Placeholder from '../assets/images/iphone-placeholder.png';
import office from '../assets/images/office.jpeg';

const Products = () => (
  <div className="page products">
    <Header
      size="small"
      title="Discover our products"
      text="We aim to provide students using online educational environments with greater insight into their own learning journey and performance through the use of AI powered tools."
      image={headerImage}
    />
    <CoreValues title="Core values" subtitle="Our beliefs">
      <CardIcon
        type="vertical"
        iconFront="fa-solid fa-rocket"
        iconBack="fa-solid fa-circle"
        title="Innovation"
        text="What makes us unique is that we use cutting-edge technologies, broadening the variety of tools available. We unite context and technology."
        delay={500}
        className="col-span-4"
      />
      <CardIcon
        type="vertical"
        iconFront="fa-solid fa-shield-alt"
        iconBack="fa-solid fa-circle"
        title="Privacy"
        text="We are of the opinion that data ownership should always remain with the user. We not only comply with regulations, but go the extra mile to ensure that you are in control of your data."
        delay={600}
        className="col-span-4"
      />
      <CardIcon
        type="vertical"
        iconFront="fa-solid fa-heart"
        iconBack="fa-solid fa-circle"
        title="Integrity"
        text="AI can be scary. We think that technology should always be transparent and explainable. Our technology should above all be trusted by its users."
        delay={700}
        className="col-span-4"
      />
    </CoreValues>
    <CardImage
      imageLeft
      title="Document Screener"
      description="We noticed that students often receive an initial round of feedback, which is usually about the structure of the document, grammatical errors, missing components, or the quality of writing. The document screener allows students to have their documents reviewed immediately, before they end up with teachers. Giving them a chance to already improve on their documents."
      image={Placeholder}
      buttonLink="/document-screener"
      buttonLabel="learn more"
    />
    <CardImage
      imageRight
      title="Knowledge Profiler"
      description="Every student is unique, as is their learning journey. Over the course of their studies, students will develop domain-specific knowledge that goes beyond the standard curriculum. By extracting all submissions of a student from their online learning environment, the Knowledge Profiler determines and displays these skills in a simple overview."
      image={Placeholder}
      buttonLink="/knowledge-profiler"
      buttonLabel="learn more"
    />
    <CardImage
      imageLeft
      title="Q-App"
      description="Traditionally documents are noninteractive, the Q-App changes this by allowing users to interact with a document as if they were talking to a human. Instead of just reading through it, you can now ask questions, and get relevant answers present in the document. It is just as if you were able to talk with the author!"
      image={Placeholder}
      buttonLink="/q-app"
      buttonLabel="learn more"
    />
    <CTA
      title="Contact us"
      subtitle="Want to talk?"
      phone="0401234567"
      phoneLabel="+31 (0)40 1234567"
      email="hello@openmaze.io"
      image={office}
      buttonLink="/contact"
      buttonLabel="The fastest route to a collaboration"
    />
  </div>
);

export default Products;
