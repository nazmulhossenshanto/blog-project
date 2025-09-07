import React from 'react';

const Sidebar = ({recipeQue}) => {
    return (
        <div className='md:w-1/3 '>

            <h3>Want to cook : {recipeQue.length}</h3>
      <div className='border-2 rounded-lg border-gray-500'>
        <table className="table">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calori</th>
      </tr>
    </thead>
         {
        recipeQue.map( (recipe, idx) => (
             
             
  
    <tbody>

      <tr>
        <th>{idx + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <td><button className='btn !bg-green-500'>Preparin</button></td>
      </tr>
      
      
    </tbody>
    
  
         ) )
       }
       </table>
      </div>
        </div>
    );
};

export default Sidebar;