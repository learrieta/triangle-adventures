import Tour_Hero from '../Components/Tours/Tour_Hero_Section/Tour_Hero'
import Tour_Banner from '../Components/Tours/Tour_Header_Section/Tour_Banner'
import Tours_Options from '../Components/Tours/Tours_options/Tours_Options'
import How_It_Works from '../Components/Tours/How It Works/How_It_Works'
import Test_Drive from '../Components/Tours/ebike-renting/Test_Drive'
import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema } from '../data/seoSchemas'

const Tours = () => {
  return (
    <div>
      <SEO
        title="Raleigh Area E-Bike Tours | Triangle Adventures"
        description="Explore Triangle Adventures guided e-bike tours in the Raleigh area, including scenic greenway rides, food and drinks, ghost stories, and local history."
        path="/locations/raleigh"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Raleigh', path: '/locations/raleigh' },
        ])}
      />

      <Tour_Hero />
      <Tour_Banner />
      <Tours_Options />
      <How_It_Works />
      <Test_Drive />
    </div>
  )
}

export default Tours
