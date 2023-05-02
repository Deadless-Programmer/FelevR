import React from "react";
import { FaCircle } from "react-icons/fa";
const RecipeInfo = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, instructions, rating } = recipe;
  return (
    <div>
      <div className="card w-full bg-red-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p>
              <span className="text-lg font-semibold">Ingredients :</span>
              {ingredients.slice(0, 5).map((single) =>
                single ? (
                  <li className="">
                    {" "}
                     {single}
                  </li>
                ) : (
                  ""
                )
              )}
            </p>

            <p>
             
              <span className="text-lg font-semibold">Instructions :</span>{" "}
              {instructions}
            </p>
          </div>
          <div className="flex items-center">
            <p> Rating : {rating}</p> 
            <button type="button" className="px-8 py-3 text-white font-semibold rounded bg-orange-500">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
