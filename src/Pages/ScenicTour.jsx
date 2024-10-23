import React from 'react'
import { Helmet } from 'react-helmet'
import TwoHeronSection from '../Components/TwoHours/TwoHourHeroSection/TwoHeronSection'
import QuickDetails from '../Components/TwoHours/QuickDetails/QuickDetails'


const ScenicTour = () => {
  return (
    <div>
      <Helmet>
        <title>Two Hour Tour - Claton NC</title>
        <meta name='description' content='2 hours of smooth, scenic riding on hand-picked sections of the most beautiful scenery on NC Mountains to Sea Trail.' />
        <link rel='canonical' href='/tours/scenic-tour' />
      </Helmet>
      
      <TwoHeronSection />
      <QuickDetails />
      
      
      
      
    
    </div>
  )
}

export default ScenicTour