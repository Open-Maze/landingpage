import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';
import Goals from '../blocks/Goals/Goals';
import Features from '../blocks/Features/Features';
import Information from '../blocks/Information/Information';
import CTA from '../blocks/CTA/CTA';

// Components
import CardIcon from '../components/CardIcon/CardIcon';
import Feature from '../components/Feature/Feature';

// Assets
import UniqueProfile from '../assets/images/products/knowledge-profiler/kp-1-zoom.png';
import Verifiable from '../assets/images/products/knowledge-profiler/kp-2-zoom.png';
import StudentsBecomeExperts from '../assets/images/products/knowledge-profiler/kp-3-zoom.png';
import productImage from '../assets/images/illustrations/product.svg';
import office from '../assets/images/office.jpeg';

const KnowledgeProfiler = () => {
  const [knowledgeProfiler, setKnowledgeProfiler] = useState({});

  useEffect(() => {
    axios.get('https://api.openmaze.io/knowledge-profiler').then((response) => {
      setKnowledgeProfiler(response.data);
    });
  }, []);

  return (
    <div className="page knowledge-profiler">
      <Header
        size={knowledgeProfiler.header?.size}
        title={knowledgeProfiler.header?.title}
        text={knowledgeProfiler.header?.text}
        buttonLink={knowledgeProfiler.header?.button1_link}
        buttonLabel={knowledgeProfiler.header?.button1_label}
        button2Link={knowledgeProfiler.header?.button2_link}
        button2Label={knowledgeProfiler.header?.button2_label}
        image={knowledgeProfiler.header?.image?.url}
        arrow={knowledgeProfiler.header?.arrow}
      />
      <Goals title="What we want to achieve" subtitle="Goals">
        <CardIcon
          type="horizontal"
          iconFront="fa-solid fa-user"
          iconBack="fa-solid fa-circle"
          title="Individual Profile"
          text="Allow students to show off their unique skills."
          delay={500}
          className="col-span-6"
        />
        <CardIcon
          type="horizontal"
          iconFront="fa-solid fa-link"
          iconBack="fa-solid fa-circle"
          title="Connect People"
          text="The Knowledge Profile can be used to connect Students with other students, teachers, experts or businesses."
          delay={600}
          className="col-span-6"
        />
      </Goals>
      <Features>
        <Feature
          featureNr="Feature 1"
          title="Unique profile"
          description="Every student has a unique learning journey throughout which they learn their subjects of interest. The Knowledge Profiler aims to visualize the skills mastered throughout a learning journey."
          image={UniqueProfile}
          imgBackground="#d1a4f7"
        />
        <Feature
          featureNr="Feature 2"
          title="Verifiable"
          description="The results from the Knowledge Profiler can easily be evaluated and used as a verifiable portfolio, because it uses a student's graded and submitted assignments."
          image={Verifiable}
          imgBackground="#adeaf4"
        />
        <Feature
          featureNr="Feature 3"
          title="Students become experts"
          description="Students and teachers can use their submissions to generate a skill profile using the Knowledge Profiler. The profile determines expertise in a subject, and can be used to locate others with the desired expertise."
          image={StudentsBecomeExperts}
          imgBackground="#a3a4e5"
        />
      </Features>
      <Information
        title="Interested?"
        text="Are you interested in taking a closer look at one of our tools, or curious what OpenMaze can offer your institute? Get in touch by scheduling a demo."
        buttonLink="/products"
        buttonLabel="discover more products"
        image={productImage}
        illustration
      />
      <CTA
        title="Contact us"
        subtitle="Want to talk?"
        image={office}
        buttonLink="/contact"
        buttonLabel="the fastest route to a collaboration"
      />
    </div>
  );
};

export default KnowledgeProfiler;
