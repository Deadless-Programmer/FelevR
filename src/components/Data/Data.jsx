import React from "react";
import { Link } from "react-router-dom";

const Data = ({ data }) => {
  const {id, chefPicture, chefName, yearsOfExperience, numbersOfRecipes, Likes } =
    data;

  return (
    <div>
      <div className="w-full p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={chefPicture}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-2xl  tracking-widest font-bold dark:text-violet-400">
            {chefName}
          </span>
          <div className="flex justify-between mt-5">
            <p className="font-semibold">
              Experience :<span className=""> {yearsOfExperience} Years </span>
            </p>

            <p className="font-semibold">Recipes : {numbersOfRecipes}</p>

            <p className="font-semibold"> Likes : {Likes}</p>
          </div>

          <div className="my-5">
            <Link to={`/allData/${id}`} ><button className="btn btn-outline btn-success">
              View Recipes
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
