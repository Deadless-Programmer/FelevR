import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaCircle } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
const RecipeInfo = ({ recipe }) => {
  console.log(recipe);
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, ingredients, instructions, rating , img} = recipe;
  const handleFavoriteClick = () => {
    setIsFavorite(true);
    toast.success("favorites!🤙");
  };
  return (
    <div>
      <div className="card w-full bg-red-100 shadow-2xl">
        <div className="card-body">
        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
          <h2 className="card-title">{name}</h2>
          <div>
            <p>
              <span className="text-lg font-semibold">Ingredients :</span>
              {ingredients
                .slice(0, 5)
                .map((single) =>
                  single ? <li className=""> {single}</li> : ""
                )}
            </p>

            <p>
              <span className="text-lg font-semibold">Instructions :</span>{" "}
              {instructions}
            </p>
          </div>
          <div className="flex items-center">
            <p> Rating : {rating}</p>
            <button
              onClick={handleFavoriteClick}
              disabled={isFavorite}
              type="button"
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
