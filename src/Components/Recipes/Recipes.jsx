import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({addRecipeToQue}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Recipe
           key={recipe.recipe_id}
           recipe={recipe}
           addRecipeToQue={addRecipeToQue}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
