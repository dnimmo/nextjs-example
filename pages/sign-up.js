import Link from 'next/link'
import PageHead from '../components/common/page_head'
import Header from '../components/common/header'
import Footer from '../components/common/footer'

const page = 
  () => (
    <div>
      <PageHead pageTitle='Sign-up Page'></PageHead>
      <Header pageTitle='NextJS Example - Sign-up'></Header>
      <main className='content'>
        <h1>Sign up!</h1>

        <p>Or don't, because I'm not making a sign-up page for a demo site. Instead, hit the thing below this text to pretend you've signed in.</p>

        <span className='button'>Log in</span>
      </main>
      <Footer></Footer>
    </div>
  )

export default page