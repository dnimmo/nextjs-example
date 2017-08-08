import Link from 'next/link'
import { bindActionCreators } from 'redux'
import PageHead from '../components/common/PageHead'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import nextConnect, { loggedIn } from '../state/store'
import LogInComponent from '../components/sign_up/LogIn'
import LogOutComponent from '../components/sign_up/LogOut'

const renderComponents =
  loggedIn => (
    loggedIn
      ? <LogOutComponent/>
      : <LogInComponent/>
  )

const page = 
  ({loggedIn}) => (
    <div>
      <PageHead pageTitle='Sign-up Page'></PageHead>
      <Header pageTitle='NextJS Example - Sign-up'></Header>
      <main className='content'>
        <h1>Sign up!</h1>

        { renderComponents(loggedIn) }

      </main>
      <Footer></Footer>
    </div>
  )

export default nextConnect(({loggedIn}) => ({loggedIn}))(page)