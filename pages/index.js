import Link from 'next/link'
import PageHead from '../components/common/PageHead'
import Header from '../components/common/Header'
import Banner from '../components/homepage/Banner'
import Challenges from '../components/homepage/BusinessChallenges'
import Features from '../components/homepage/ProductFeatures'
import Footer from '../components/common/Footer'

const page = 
  () => (
    <div>
      <PageHead pageTitle='Index Page'/>
      <Header pageTitle='NextJS Example - Home'/>
      <main className='content'>
        <Banner/>
        <Challenges/>
        <Features/>
      </main>
      <Footer/>
    </div>
  )

export default page