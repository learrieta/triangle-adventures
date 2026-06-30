import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import Layout from './Layout'
import Tours from './Pages/Tours'
import ScenicTour from './Pages/ScenicTour'
import FoodsandDrink from './Pages/FoodsandDrink'
import Gmr from './Pages/Gmr'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import RouteChangeTracker from "./Components/Analytics/RouteChangeTracker";

function App() {
  return (
    <>
      <RouteChangeTracker />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/scenic-tour" element={<ScenicTour />} />
          <Route path="/tours/foods-and-drinks-tour" element={<FoodsandDrink />} />
          <Route path="/tours/ghost-and-mysteries" element={<Gmr />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />

          <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
          <Route path="/tours/ScenicTour" element={<Navigate to="/tours/scenic-tour" replace />} />
          <Route path="/tours/FoodAndDrinks" element={<Navigate to="/tours/foods-and-drinks-tour" replace />} />
          <Route path="/tours/ghost-and-misteries" element={<Navigate to="/tours/ghost-and-mysteries" replace />} />
          <Route path="/4-hour-tour" element={<Navigate to="/tours/ghost-and-mysteries" replace />} />
          <Route path="/4-hour-tour/" element={<Navigate to="/tours/ghost-and-mysteries" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
