import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import img from "../images/img.jpg";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "aaina",
    email: "",
    phone: "",
    password: "",
  });


  const navigate = useNavigate();

const storetokenInLS = useAuth();



  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("res from server", res_data);
        storetokenInLS(res_data.token);
        localStorage.setItem("token", res_data)
        setUser({ username: "aaina", email: "", phone: "", password: "" });
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-16">
        <main>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="registration-image p-14">
              <img src={img} alt="img" className="w-full h-auto rounded-lg" />
            </div>
            <div className="registration-form">
              <h1 className="text-2xl text-gray-500 sm:text-3xl lg:text-4xl font-bold mb-6">
                SignUp Page
              </h1>
              <form
                className="max-w-md mx-auto md:max-w-lg lg:max-w-xl"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 font-bold"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 "
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 font-bold"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 font-bold"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 font-bold"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 font-bold"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-submit w-full bg-purple-400 text-white p-2 rounded-md hover:bg-fuchsia-500 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
