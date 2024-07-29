import React from "react";
import { Link } from "react-router-dom";

// default props value hai yeh
const FeatureCard = ({ cards = [1, 2, 3] }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Explore 1000s of Products Across Every Category
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Up to 75% Off! On Every Range of on Shoes,Laptops, Mobiles,
              Clothing, Jewelry, and More!
            </p>
          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {cards.map((card) => {
              return (
                <Link
                  to={`/categories/${card}`}
                  className="p-2 sm:w-1/2 w-full cursor-pointer"
                >
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium capitalize">
                      {/*agar card nhi aya toh "Example card" likha ayega */}
                      {card || "Example card"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCard;
