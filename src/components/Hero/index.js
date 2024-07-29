import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font mt-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ONLINE SHOPPING MADE EASY AT QUICKART
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Be it clothing, footwear or accessories, Quickart offers you the
              ideal combination of fashion and functionality for men, women and
              kids. You will realise that the sky is the limit when it comes to
              the types of outfits that you can purchase for different
              occasions.
            </p>
            <div className="flex justify-center">
            <Link  to={'/products'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                All Products
              </Link>
              <Link
                to={"/about"}
                className="ml-4 inline-flex items-center text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/premium-photo/commerce-industry-visual-photo-album-full-illustration-digital-shopping-consumer-behavior_563241-69326.jpg?w=740"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
