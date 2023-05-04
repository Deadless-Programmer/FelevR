import React, { useState } from "react";
import { toast } from "react-hot-toast";

import { FaRegStar } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
const RecipeInfo = ({ recipe }) => {
  console.log(recipe);
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, ingredients, instructions, rating, img } = recipe;
  const handleFavoriteClick = () => {
    setIsFavorite(true);
    toast.success("favorites!🤙");
  };
  return (
    <div>
      <div className="card w-full bg-orange-100 mt-8   shadow-2xl">
        <div className="card-body h-[860px] ">
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72"
          />
          <h2 className="card-title">{name}</h2>
          <div>
            <p className="mt-2">
              <span className="text-lg font-semibold">Ingredients :</span>
              {ingredients.slice(0, 5).map((single, index) =>
                single ? (
                  <li key={index} className="">
                    {" "}
                    {single}
                  </li>
                ) : (
                  ""
                )
              )}
            </p>

            <p className="mt-4 h-52 overflow-y-auto">
              <span className="text-lg font-semibold">Instructions :</span>{" "}
              {instructions}
            </p>
          </div>
          <div className="flex items-center mt-5">
            <FaRegStar className="text-2xl"></FaRegStar>
            <p className="ml-2 text-xl"> {rating}</p>
            <button
              onClick={handleFavoriteClick}
              disabled={isFavorite}
              type=""
              className="px-8 py-3 text-white font-semibold rounded bg-orange-500"
            >
              {isFavorite ? "Favorited" : "Favorite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
