import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

const ViewDetails = () => {
  const data = useLoaderData();

  const {
    Bio,
    chefPicture,
    chefName,
    numbersOfRecipes,
    yearsOfExperience,
    Likes,
    Recipes,
  } = data;
  return (
    <div className="flex justify-between p-10 ">
      <div className="w-[48%] ">
        <div className="shadow-2xl">
          <article className="flex flex-col dark:bg-gray-900 ">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-96 dark:bg-gray-500"
                src={chefPicture}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <p className="text-2xl font-semibold tracking-wider uppercase hover:underline dark:text-violet-400">
                {chefName}
              </p>
              <h4 className="flex-1 py-2 text-base font-semibold leading-snug">
                {Bio}
              </h4>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>{numbersOfRecipes} Recipes</span>
                <span>{yearsOfExperience} years of experience</span>
                <span>{Likes} Likes</span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="w-[48%] grid grid-cols-1 gap-3 overflow-y-auto h-screen">
        {Recipes.map((recipe) => (
          <RecipeInfo key={recipe.id} recipe={recipe}></RecipeInfo>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
