import React from 'react';

const Feature = ({ featureNr, title, description, image }) => (
  <section className="cms-block">
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      <div className="grid grid-flow-dense grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="col-span-6 border-l-2 border-violet p-8 sm:p-12 lg:col-start-1">
          {featureNr && <h4 className="pb-2 text-dark">{featureNr}</h4>}
          {title && <h2 className="pb-6">{title}</h2>}
          {description && <p className="pb-10 text-slate-700">{description}</p>}
        </div>
        {image && (
          <div className="col-span-6 lg:col-end-13">
            <img src={image} alt={title} className="w-full" />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default Feature;
