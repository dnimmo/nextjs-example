import Link from 'next/link'
import PageHead from '../components/common/page_head'
import Header from '../components/common/header'
import Footer from '../components/common/footer'

const page = 
  () => (
    <div> 
      <PageHead pageTitle='Book A Demo Page'></PageHead>
      <Header pageTitle='NextJS Example - Book a demo'></Header>
      <main className='content'>
        <p>Book a demo and fall in love etc.</p>
      </main>
      <Footer></Footer>
    </div>
  )

export default page