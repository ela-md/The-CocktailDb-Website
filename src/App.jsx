import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'


import './App.css'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (

<>
<Navbar/>
<Routes>
   <Route path='/' element={<Home/>} />
   <Route path='*' element={<Error/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/cocktail/:id' element={<SingleCocktail/>} />
</Routes>
</>

  )
}

export default App
