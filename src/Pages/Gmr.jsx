import React from 'react'
import { Helmet } from 'react-helmet'
import QuickDetails from '../Components/Fourhours/QuickDetails/QuickDetails'
import FourHeronSection from '../Components/Fourhours/FourHourSection/FourHeronSection'




const Gmr = () => {
  return (
    <div>
        <Helmet>
            <title>Ghost & Mistery - Raleigh NC</title>
          <meta name='description' content='Fun outdoor biking, exploring, adventures to do in Raleigh ' />
          <link rel='canonical' href='/tours/ghost-and-misteries' />
        </Helmet>

        <FourHeronSection />
        <QuickDetails />
    </div>
  )
}

export default Gmr