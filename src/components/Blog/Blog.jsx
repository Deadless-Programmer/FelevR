import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Tell us the differences between uncontrolled and controlled
                components.
              </summary>
              <div className="px-4 pb-4">
                <p>
                  <span className="font-semibold">Uncontrolled</span> components
                  and controlled components refer to different parts of an
                  experiment or system. Uncontrolled components are elements
                  that are not manipulated or regulated by the experimenter and
                  are allowed to vary naturally or due to external factors.{" "}
                  <br /> <span className="font-semibold">Controlled</span>{" "}
                  components, on the other hand, are deliberately manipulated or
                  regulated by the experimenter to achieve a desired outcome or
                  to isolate specific variables. For example, in a plant growth
                  experiment, the amount of sunlight and rainfall would be
                  uncontrolled components as they are not manipulated by the
                  experimenter, while the amount of fertilizer and water
                  provided to each plant would be controlled components as they
                  are regulated by the experimenter.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How to validate React props using PropTypes?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  To validate React props using PropTypes, you can import the
                  PropTypes library from the 'prop-types' package, and then
                  define the expected type for each prop within the component's
                  propTypes object. This allows you to catch and flag any errors
                  or incorrect data types passed to the component via its props.
                  For example, PropTypes.string will expect a string type, while
                  PropTypes.number will expect a number type. It is considered a
                  best practice to validate your component props using PropTypes
                  to ensure your code runs smoothly and without unexpected
                  errors.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              Tell us the difference between node js and express js.
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Node.js is a server-side JavaScript runtime that allows
                  developers to run JavaScript code outside of the browser. It
                  provides a set of core modules and APIs that enable developers
                  to build scalable and high-performance applications on the
                  server-side. Express.js, on the other hand, is a web
                  application framework built on top of Node.js. It provides a
                  set of features and functionalities to make it easier to build
                  web applications using Node.js. It provides an abstraction
                  layer over the core Node.js APIs, making it easier to handle
                  HTTP requests and responses, routing, middleware, and other
                  common web application functionalities.
                </p>
                
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is a custom hook, and why will you create a custom hook?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                
<span className="font-semibold">Node.js</span> and Express.js are both technologies that are commonly used in building web applications. Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of the browser. It provides a set of core modules and APIs that enable developers to build scalable and high-performance applications on the server-side.


                </p>
                <p>
                <span className="font-semibold">Express.js</span> , on the other hand, is a web application framework built on top of Node.js. It provides a set of features and functionalities to make it easier to build web applications using Node.js. It provides an abstraction layer over the core Node.js APIs, making it easier to handle HTTP requests and responses, routing, middleware, and other common web application functionalities.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
