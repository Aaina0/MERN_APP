import React, { useState } from "react";
import img2 from "../images/img2.jpg";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [contact, setContact] = useState(defaultContactFormData);

  const { user } = useAuth();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch("http://localhost:5000/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      console.log("response", response);

      if (response.ok) {
        setData(defaultContactFormData);
        const responseData = await response.json();
        alert(responseData);
        console.log(responseData);
      } else {
        // Handle API error here
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <section className="section-contact">
          <div className="contact-content container mt-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-700 ">
              Contact Us
            </h1>
          </div>
          {/* contact page main */}
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="contact-img p-10">
              <img src={img2} alt="img" className="w-full h-auto rounded-lg" />
            </div>

            {/* contact form content actual */}
            <section className="section-form max-w-md mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInput}
                    required
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={contact.email}
                    onChange={handleInput}
                    required
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    required
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    cols="30"
                    rows="6"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-submit w-full bg-purple-400 text-white p-2 rounded-md hover:bg-fuchsia-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
