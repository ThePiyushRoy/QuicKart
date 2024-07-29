import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center text-gray-600 body-font container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-1/2  mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          ABOUT US
        </h1>
        <p className="lg:w-1/2 mx-auto leading-relaxed text-balance">
          Quickart is India's leading pure-play value Ecommerce platform.
          Founded in 2024 by Anshumaan, Quickart is one of the top four online
          lifestyle shopping destinations of India. Quickart brings together a
          wide assortment of good quality and value- priced merchandise on its
          platform.
          <br />
          <br />
          Building trust with Integrity. At Quickart, every decision made is
          based on ethical and moral principles - no success is meaningful if
          it’s not achieved the right way.
        </p>
      </div>
    </div>
  );
};

export default About;
