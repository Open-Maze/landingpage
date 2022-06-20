import React, { useState } from 'react';
import './App.scss';

import Nav from '../Nav/Nav';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import HeaderL from '../HeaderL/HeaderL';
import Information from '../Information/Information';
import FeatureComponent from '../FeatureComponent/FeatureComponent';
import ContactCardS from '../ContactCardS/ContactCardS';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import Svg from '../../assets/images/illustrations/header.svg';
import IphonePlaceholder from '../../assets/images/iphone-placeholder.png';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <Nav />
      <div className="page">
        <HeaderL />
        <h1>Welcome at OpenMaze</h1>
        <h4>Lorem ipsum</h4>
        <h2>Our core values</h2>
        <p>Wij zijn OpenMaze, en dit zijn onze belangrijkste uitgangspunten</p>
        <br />
        <br />
        <Button pageUrl="/contact" className="btn-purple-solid">
          Learn more
        </Button>
        <br />
        <br />
        <Button pageUrl="/contact" className="btn-purple-outline">
          Learn more
        </Button>
        <br />
        <br />
        <Button pageUrl="/contact" className="btn-blue-solid">
          Learn more
        </Button>
        <br />
        <br />
        <Button pageUrl="/contact" className="btn-blue-outline">
          Learn more
        </Button>
        <Input
          value={inputValue}
          handleChange={(event) => {
            setInputValue(event.target.value);
          }}
          label="Voornaam"
          placeholder="Voornaam"
        />
        <Information
          title="About us"
          description="OpenMaze aims to provide users of online educational environments with greater insight into their own learning journey and performance through the use of AI-based tools. The use of such tooling often means that people working in the educational sector have to do less menial tasks."
          buttonLabel="View more"
          buttonLink="/about"
          image={Svg}
          flipped
        />
        <FeatureComponent
          featureNr="Feature 1"
          title="Instant feedback"
          description="The Document Feedback Tool allows students to have their documents fully reviewed immediately, before they are graded by teachers. The purpose of the feedback tool is to eliminate that first round of feedback and allow the teacher and student to engage in meaningful dialogue."
          image={IphonePlaceholder}
        />
        <br />
        <br />
        <Icon front="heart" back="circle" />
        <Icon front="rocket" back="circle" />
        <Icon front="user" back="circle" />
        <br />
        <br />
        <ContactCardS />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
