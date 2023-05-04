import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import Spinner from "../Spinner/Spinner";
import LazyLoad from "react-lazy-load";
import { FaRegThumbsUp } from "react-icons/fa";
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

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  return (
    <div className=" p-10 ">
      <div className="w-full ">
        <div className="shadow-2xl">
          <article className="flex flex-col dark:bg-gray-900 ">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <LazyLoad>
                <img
                  alt=""
                  className="object-cover w-full h-screen dark:bg-gray-500"
                  src={chefPicture}
                />
              </LazyLoad>
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
                <span className="flex items-center gap-2">
                  {Likes} <FaRegThumbsUp className="text-base"> </FaRegThumbsUp>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="w-full md:grid grid-cols-3 mt-5 gap-3 ">
        {Recipes.map((recipe) => (
          <RecipeInfo key={recipe.id} recipe={recipe}></RecipeInfo>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
