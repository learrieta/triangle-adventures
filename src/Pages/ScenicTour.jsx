import React from 'react'
import { Helmet } from 'react-helmet'
import TwoHeronSection from '../Components/TwoHours/TwoHourHeroSection/TwoHeronSection'
import QuickDetails from '../Components/TwoHours/QuickDetails/QuickDetails'
import Faq from '../Components/TwoHours/FAQSection/Faq'


const ScenicTour = () => {
 
  return (
    <div>
      <Helmet>
          <title>Two Hour Tour - Claton NC</title>
          <meta name='description' content='Fun outdoor biking, exploring, adventures to do in Clayton ' />
          <link rel='canonical' href='/tours/ScenicTour' />
          
        </Helmet>
      
      <TwoHeronSection />
      <QuickDetails />
      
      
      
      
      
    
    </div>
  )
}

export default ScenicTour