import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <h4 className="text-2xl font-semibold mb-2">Sorry! Page not found</h4>
        <p className="text-gray-600 mb-4">
          Oops! It seems like the page you're trying to access doesn't exist. If
          you believe there's an issue, feel free to report it, and we'll look
          into it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/"
            className="btn bg-purple-400 text-gray-500 py-2 px-4 rounded-md hover:bg-fuchsia-500 focus:outline-none focus:ring focus:border-blue-300"
          >
            Return Home+
          </NavLink>
          <NavLink
            to="/contact"
            className="btn bg-purple-400 text-gray-500 py-2 px-4 rounded-md hover:bg-fuchsia-500 focus:outline-none focus:ring focus:border-blue-300"
          >
            Report Problem
          </NavLink>
        </div>
      </div>
    </section>
  );
};
