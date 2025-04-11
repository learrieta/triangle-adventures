
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'


import HomePage from './Pages/HomePage'
import Layout from './Layout'
import Tours from './Pages/Tours'
import ScenicTour from './Pages/ScenicTour'
import FoodsandDrink from './Pages/FoodsandDrink'
import Gmr from './Pages/Gmr'

function App() {
  

  return (
    
      <Routes>
        
        <Route element={<Layout />}>
          <Route  path='/' element={<HomePage />} />
          <Route  exact path='/tours' element={<Tours />} />
          <Route  exact path='/tours/scenic-tour' element={<ScenicTour />} />
          <Route  exact path='/tours/foods-and-drinks-tour' element={<FoodsandDrink />} />
          <Route  exact path='/tours/ghost-and-misteries' element={<Gmr />} />
        </Route>
        
        
      </Routes>
      
    
  )
}

export default App
