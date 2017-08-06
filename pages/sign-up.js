import Link from 'next/link'
import { bindActionCreators } from 'redux'
import PageHead from '../components/common/page_head'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import nextConnect, { logIn } from '../state/store'

const page = 
  (props) => (
    <div>
      <PageHead pageTitle='Sign-up Page'></PageHead>
      <Header pageTitle='NextJS Example - Sign-up'></Header>
      <main className='content'>
        <h1>Sign up!</h1>

        <p>Or don't, because I'm not making a sign-up page for a demo site. Instead, hit the thing below this text to pretend you've signed in.</p>

        <span onClick={props.logIn} className='button'>Log in</span>
      </main>
      <Footer></Footer>
    </div>
  )

export default nextConnect(state => ({}), dispatch => bindActionCreators({logIn}, dispatch))(page)