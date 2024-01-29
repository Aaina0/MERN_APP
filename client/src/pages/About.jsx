import React from "react";
import img3 from "../images/img3.jpg";

export default function About() {
  return (
    <main>
      <section className="section-about py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About content */}
          <div className="about-content">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">About Us</h1>
            <p className="mb-4 text-gray-700">
              Welcome to our company! We are dedicated to providing high-quality
              services and innovative solutions to our clients. With a team of
              experienced professionals, we aim to meet the unique needs of our
              customers and exceed their expectations.
            </p>
            <p className="text-gray-700">
              Our commitment to excellence and customer satisfaction drives
              everything we do. Whether you are a small business or a large
              enterprise, we have the expertise to help you succeed in today's
              competitive market.
            </p>
          </div>

          {/* About image */}
          <div className="about-image p-14">
            <img src={img3} alt="img" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
