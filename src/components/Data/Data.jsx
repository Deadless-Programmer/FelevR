import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
const Data = ({ data }) => {
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numbersOfRecipes,
    Likes,
  } = data;

  return (
    <div>
      <div className="w-96 bg-orange-100 p-6 mt-10 md:mt-7 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <LazyLoad>
          <img
            src={chefPicture}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </LazyLoad>
        <div className="mt-6 mb-2">
          <span className="block text-2xl   font-bold dark:text-violet-400">
            {chefName}
          </span>
          <div className="flex justify-between mt-5">
            <p className="font-semibold">
              Experience:<span className=""> {yearsOfExperience} Years </span>
            </p>

            <p className="font-semibold">Recipes: {numbersOfRecipes}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-3">
              <FaRegThumbsUp className="text-xl"></FaRegThumbsUp>
              <p className="font-semibold ml-2"> {Likes}</p>
            </div>
            <div className="my-5">
              <Link to={`/allData/${id}`}>
                <button className=" hover:bg-orange-500 btn  btn-outline text-orange-500  hover:text-white text-base font-semibold rounded">
                  View Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
