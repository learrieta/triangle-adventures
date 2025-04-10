import React from 'react'
import { Helmet } from 'react-helmet'
import ThreeHeronSection from '../Components/ThreeHours/ThreeHourHeroSection/ThreeHeronSection'
import QuickDetails from '../Components/ThreeHours/QuickDetails/QuickDetails'

const FoodsandDrink = () => {
  return (
    <div>
        <Helmet>
            <title>Food & Drinks - Claton NC</title>
          <meta name='description' content='Fun outdoor biking, exploring, adventures to do in Clayton ' />
          <link rel='canonical' href='/tours/FoodAndDrinks' />
        </Helmet>

        <ThreeHeronSection />
        <QuickDetails />
    </div>
  )
}

export default FoodsandDrink