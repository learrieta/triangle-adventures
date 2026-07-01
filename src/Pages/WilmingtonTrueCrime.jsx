import SEO from '../Components/SEO/SEO'
import JsonLd from '../Components/SEO/JsonLd'
import { breadcrumbSchema, tourProductSchema, tourServiceSchema } from '../data/seoSchemas'
import WilmingtonTrueCrimeDetails from '../Components/Wilmington/TrueCrimeDetails'
import imgTrueCrime from '../assets/Home/mystery.png'

const WilmingtonTrueCrime = () => {
  const path = '/locations/wilmington/true-crime-tour'

  return (
    <div>
      <SEO
        title="Wilmington True Crime E-Bike Tour | Weird History Ride"
        description="Book the Wilmington True Crime and Weird History E-Bike Tour. Ride through Historic Downtown, Greenfield Lake, the Cargo District, local mysteries, strange stories, and coastal NC history."
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
          description: 'A Wilmington, NC guided e-bike tour featuring true crime, unsolved mysteries, Civil War history, weird local stories, Historic Downtown, Greenfield Lake, the Cargo District, and approximately 13 miles of easy riding.',
          price: '85',
          path,
          areaServed: 'Wilmington, NC',
          category: 'Wilmington True Crime E-Bike Tour',
        })}
      />
      <JsonLd
        data={tourServiceSchema({
          name: 'Wilmington True Crime and Weird History E-Bike Tour',
          description: 'A guided Wilmington e-bike tour focused on true crime, weird history, unsolved mysteries, Historic Downtown Wilmington, Greenfield Lake, and the Cargo District.',
          path,
          areaServed: ['Wilmington, NC', 'Historic Downtown Wilmington, NC', 'Greenfield Lake, NC'],
          serviceType: 'True Crime Guided E-Bike Tour',
        })}
      />

      <div className="tour--container">
        <img src={imgTrueCrime} className="banner--tour" loading="eager" title="Wilmington True Crime e-bike tour" alt="Wilmington True Crime and Weird History e-bike tour in North Carolina" />
        <h1 className="banner--tour--title text-white">Wilmington True Crime & Weird History</h1>
      </div>

      <WilmingtonTrueCrimeDetails />
    </div>
  )
}

export default WilmingtonTrueCrime