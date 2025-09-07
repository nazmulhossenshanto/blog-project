
import './App.css'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
      
     <div className='border-2'>

       <h1 className='text-2xl text-blue-500'>Our Recipes</h1>
      <div className='flex flex-col md:flex-row gap-4'>
      {/* Recipes section */}
      <Recipes></Recipes>
      {/* Sidebar Section */}
      <Sidebar></Sidebar>
      </div>

     </div>
      
    </>
  )
}

export default App
