import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema, tourProductSchema } from '../data/seoSchemas'
import WilmingtonTrueCrimeDetails from '../Components/Wilmington/TrueCrimeDetails'
import imgTrueCrime from '../assets/Home/mystery.png'

const WilmingtonTrueCrime = () => {
  const path = '/locations/wilmington/true-crime-tour'

  return (
    <div>
      <SEO
        title="Wilmington True Crime & Weird History E-Bike Tour | Triangle Adventures"
        description="Ride approximately 13 miles through Wilmington, NC on a guided True Crime and Weird History e-bike tour with unsolved mysteries, strange local stories, and historic stops."
        path={path}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Wilmington', path: '/locations/wilmington' },
          { name: 'Wilmington True Crime & Weird History', path },
        ])}
      />
      <JsonLd
        data={tourProductSchema({
          name: 'Wilmington True Crime and Weird History E-Bike Tour',
          description: 'A Wilmington, NC guided e-bike tour featuring true crime, unsolved mysteries, Civil War history, weird local stories, and approximately 13 miles of easy riding.',
          price: '85',
          path,
          areaServed: 'Wilmington, NC',
        })}
      />

      <div className="tour--container">
        <img src={imgTrueCrime} className="banner--tour" loading="eager" title="Wilmington True Crime e-bike tour" alt="Wilmington True Crime and Weird History e-bike tour" />
        <h1 className="banner--tour--title text-white">Wilmington True Crime & Weird History</h1>
      </div>

      <WilmingtonTrueCrimeDetails />
    </div>
  )
}

export default WilmingtonTrueCrime
