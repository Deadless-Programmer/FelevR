import React from "react";
import { useLoaderData } from "react-router-dom";
import Data from "../Data/Data";

const Home = () => {
  const allData = useLoaderData();
//   console.log(allData);
  // const {chefPicture, chefName, yearsOfExperience, numbersOfRecipes, Likes }= allData;
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="w-[48%]">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Ac mattis
              <span className="dark:text-violet-400">senectus</span>erat
              pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Malesuada
              </a>
            </div>
          </div>
          <div className="w-[48%]">
            <img
              src="https://plus.unsplash.com/premium_photo-1663852297516-5c20ed6b1ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-5">
        {allData.map((data) => (
          <Data key={data.id} data={data}></Data>
        ))}
      </div>
    </div>
  );
};

export default Home;
