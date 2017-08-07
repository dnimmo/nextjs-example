import Link from 'next/link'
import PageHead from '../components/common/pageHead'
import Header from '../components/common/header'
import Banner from '../components/homepage/banner'
import Challenges from '../components/homepage/businessChallenges'
import Features from '../components/homepage/productFeatures'
import Footer from '../components/common/footer'

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