import Link from 'next/link'
import PageHead from '../components/common/page_head'
import Header from '../components/common/header'
import Footer from '../components/common/footer'

const page = 
  () => (
    <div>
      <PageHead pageTitle='About Page'></PageHead>
      <Header pageTitle='NextJS Example - About'></Header>
      <main className='content'>
        <p>Some stuff about how easy this was here</p>
      </main>
      <Footer></Footer>
    </div>
  )

export default page