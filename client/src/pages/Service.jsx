import React from "react";

const Service = () => {
  return (
    <main className="mt-10">
      <section className="py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="service-card">
            <h2 className="text-3xl font-bold mb-4 text-gray-500">
              Web Development
            </h2>
            <p className="text-gray-600">
              We offer professional web development services tailored to your
              business needs.
            </p>
          </div>

          <div className="service-card">
            <h2 className="text-3xl font-bold mb-4 text-gray-500">
              Mobile App Development
            </h2>
            <p className="text-gray-600">
              Our experienced team specializes in developing mobile applications
              for iOS and Android.
            </p>
          </div>

          <div className="service-card">
            <h2 className="text-3xl font-bold mb-4 text-gray-500">
              Graphic Design
            </h2>
            <p className="text-gray-600">
              Elevate your brand with our creative graphic design solutions for
              logos, branding, and more.
            </p>
          </div>

          <div className="service-card">
            <h2 className="text-3xl font-bold mb-4 text-gray-500">
              Digital Marketing
            </h2>
            <p className="text-gray-600">
              Boost your online presence with our effective digital marketing
              strategies and campaigns.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
