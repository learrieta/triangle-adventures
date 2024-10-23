
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'


import HomePage from './Pages/HomePage'
import Layout from './Layout'
import Tours from './Pages/Tours'
import ScenicTour from './Pages/ScenicTour'

function App() {
  

  return (
    
      <Routes>
        
        <Route element={<Layout />}>
          <Route  path='/' element={<HomePage />} />
          <Route  exact path='/tours' element={<Tours />} />
          <Route  exact path='/tours/scenic-tour' element={<ScenicTour />} />
        </Route>
        
        
      </Routes>
      
    
  )
}

export default App
