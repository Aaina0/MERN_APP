import React from "react";
import img3 from "../images/img3.jpg";

export default function Home() {
  return (
    <>
      <main>
        <section className="">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="hero-container">
              <p className="text-base text-gray-700 sm:text-lg lg:text-xl">
                We are the World Best IT Company
              </p>
              <h1 className="text-3xl text-gray-700 sm:text-4xl lg:text-5xl font-bold mb-2">
                Welcome to MERN-APP
              </h1>
              <p className="text-sm text-gray-700 sm:text-base lg:text-lg">
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At our Company, we
                specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group flex flex-col sm:flex-row gap-5">
                <a href="/contact">
                  <button className="btn py-3 text-white  rounded-md px-3 mt-5 mb-2 sm:mb-0 sm:mr-2 bg-purple-400 hover:bg-fuchsia-600">
                    Connect Now
                  </button>
                </a>
                <a href="/services">
                  <button className="btn py-3 text-white rounded-md px-3 mt-5 mb-2 sm:mb-0 sm:mr-2 bg-purple-400 hover:bg-fuchsia-600">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <div className="hero-image p-20">
              <img src={img3} alt="img" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
      </main>
      {/* // 2ND SECTION */}
      <section className="py-16 bg-purple-200 rounded-md">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h2 className="text-4xl text-gray-700 font-bold">50+</h2>
            <p className="mt-2 text-gray-700">Registered Companies</p>
          </div>
          <div className="text-center mt-8 md:mt-0">
            <h2 className="text-4xl text-gray-700 font-bold">100,000+</h2>
            <p className="mt-2 text-gray-700">Happy Clients</p>
          </div>
          <div className="text-center mt-8 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-700">500+</h2>
            <p className="mt-2 text-gray-700">Well-known Developers</p>
          </div>
          <div className="text-center mt-8 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-700">24/7</h2>
            <p className="mt-2 text-gray-700">Services</p>
          </div>
        </div>
      </section>
    </>
  );
}
