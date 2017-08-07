import Link from 'next/link'
import { bindActionCreators } from 'redux'
import PageHead from '../components/common/pageHead'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import nextConnect, { loggedIn } from '../state/store'
import LogInComponent from '../components/sign_up/logIn'
import LogOutComponent from '../components/sign_up/logOut'

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