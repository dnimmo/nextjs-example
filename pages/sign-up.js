import Link from 'next/link'
import { bindActionCreators } from 'redux'
import PageHead from '../components/common/page_head'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import nextConnect, { logIn } from '../state/store'
import LogInComponent from '../components/sign_up/log_in'
import LogOutComponent from '../components/sign_up/log_out'

const page = 
  ({logIn, loggedIn}) => (
    <div>
      <PageHead pageTitle='Sign-up Page'></PageHead>
      <Header pageTitle='NextJS Example - Sign-up'></Header>
      <main className='content'>
        <h1>Sign up!</h1>

        { loggedIn
          ? <LogOutComponent/>
          : <LogInComponent/>
        }
      </main>
      <Footer></Footer>
    </div>
  )

export default nextConnect(state => ({}), dispatch => bindActionCreators({logIn}, dispatch))(page)