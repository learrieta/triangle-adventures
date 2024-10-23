import React from 'react'
import { Helmet } from 'react-helmet'
import Tour_Hero from '../Components/Tours/Tour_Hero_Section/Tour_Hero'
import Tour_Banner from '../Components/Tours/Tour_Header_Section/Tour_Banner'
import Tours_Options from '../Components/Tours/Tours_options/Tours_Options'
import How_It_Works from '../Components/Tours/How It Works/How_It_Works'
import Test_Drive from '../Components/Tours/ebike-renting/Test_Drive'


const Tours = () => {
  return (
    <div >
      <Helmet>
        <title>Tours - Triangle Adventures</title>
        <meta name='description' content='Try one of our three ebike guided tours around the town of Clayton and city of Raleigh' />
        <link rel='canonical' href='/tours' />
      </Helmet>
      

      <Tour_Hero />
      <Tour_Banner />
      <Tours_Options />
      <How_It_Works />
      <Test_Drive />
    </div>
  )
}

export default Tours