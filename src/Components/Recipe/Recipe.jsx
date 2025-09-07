import React from "react";

const Recipe = ({recipe}) => {
  return (
    <>
      <div className="card border-2 shadow-sm">
        <figure>
          <img className="h-40 w-full rounded-lg" src={recipe.recipe_image} alt="Recipe Iamge" />
        </figure>
        <div className="card-body p-0 mt-4 space-y-2">
          <h2 className="card-title font-semibold">{recipe.recipe_name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-clock"></i>
              <p>{recipe.preparing_time} minute</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-fire-flame-curved"></i>
              <p>{recipe.calories} calories</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn !bg-green-500  ">Want To Cook</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
