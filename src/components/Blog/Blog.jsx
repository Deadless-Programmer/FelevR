import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import html2pdf from "html2pdf.js";
// const ref = React.createRef();

const Blog = () => {
  const generatePDF = () => {
    const element = document.getElementById("pdf-element"); // replace with your own ID
    html2pdf().from(element).save("my-document.pdf");
  };

  return (
    <div>
      <div id="pdf-element">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div>
                <h3 className="font-semibold">Tell us the differences between uncontrolled and controlled components.</h3>
                <p className="mt-1 dark:text-gray-400">
                <span className="font-semibold">Uncontrolled</span> components and controlled components refer to different parts of an experiment or system. Uncontrolled components are elements that are not manipulated or regulated by the experimenter and are allowed to vary naturally or due to external factors.
                </p>
                <p className="mt-1 dark:text-gray-400">
                <span className="font-semibold">Controlled</span>  components, on the other hand, are deliberately manipulated or regulated by the experimenter to achieve a desired outcome or to isolate specific variables. For example, in a plant growth experiment, the amount of sunlight and rainfall would be uncontrolled components as they are not manipulated by the experimenter, while the amount of fertilizer and water provided to each plant would be controlled components as they are regulated by the experimenter.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">How to validate React props using PropTypes?</h3>
                <p className="mt-1 dark:text-gray-400">
                You can use the PropTypes library provided by React to validate React props using PropTypes. PropTypes is a type-checking library that allows you to define the types of your component's props. By specifying the expected data type and whether the prop is required, PropTypes can help catch errors and improve the stability of your application. To use PropTypes, import it at the top of your file, define your component and its expected props, and specify the prop types using the propTypes object. You can use a variety of data types, including strings, numbers, booleans, objects, arrays, and functions. When a prop is passed to the component that does not match the specified data type or is missing a required prop, PropTypes will log a warning in the console.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Tell us the difference between node js and express js.</h3>
                <p className="mt-1 dark:text-gray-400">
                <span className="font-semibold">Node.js</span> is a server-side JavaScript runtime that allows developers to run JavaScript code outside of the browser. It provides a set of core modules and APIs that enable developers to build scalable and high-performance applications on the server-side. 
                </p>
                <p className="mt-2">
                <span className="font-semibold">Express.js,</span>is a web application framework built on top of Node.js. It provides a set of features and functionalities to make it easier to build web applications using Node.js. It provides an abstraction layer over the core Node.js APIs, making it easier to handle HTTP requests and responses, routing, middleware, and other common web application functionalities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">What is a custom hook, and why will you create a custom hook?</h3>
                <p className="mt-1 dark:text-gray-400">
                A custom hook is a function that allows you to reuse stateful logic across multiple components. It encapsulates complex logic into a reusable function that can be easily imported and used in different parts of your application. By creating custom hooks, you can avoid duplicating code, improve code organization, and make your components more readable and maintainable. Custom hooks also help to separate concerns, making it easier to test your code in isolation. Overall, custom hooks are a powerful tool that can help you write more modular, reusable, and testable code in your React applications.
                </p>
               
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <button type="button" >Border</button> */}
      <div className="text-center">
        <button
          className=" hover:bg-orange-500  btn w-30 btn-outline text-orange-500  hover:text-white text-base font-semibold rounded mb-8"
          onClick={generatePDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Blog />, rootElement);
export default Blog;
