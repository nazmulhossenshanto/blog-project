
import { useState } from 'react'
import './App.css'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
    const [recipeQue, setRecipeQue] = useState([]);
    const addRecipeToQue = recipe =>{
      if(!recipeQue.find(r => r.recipe_id === recipe.recipe_id)){
        setRecipeQue([...recipeQue, recipe])
      }
      else{
        alert('Brother This Recipe Already Exist...!')
      }
      
    }
  return (
    <>
      
     <div className='border-2'>

       <h1 className='text-2xl text-blue-500'>Our Recipes</h1>
      <div className='flex flex-col md:flex-row gap-4'>
      {/* Recipes section */}
      <Recipes
      addRecipeToQue={addRecipeToQue}
      ></Recipes>
      {/* Sidebar Section */}
      <Sidebar
      recipeQue={recipeQue}
      ></Sidebar>
      </div>

     </div>
      
    </>
  )
}

export default App
