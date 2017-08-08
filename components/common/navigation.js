import Link from 'next/link'
import { bindActionCreators } from 'redux'
import nextConnect, { closeNav } from '../../state/store'
import NavButton from './NavButton'

const signUpText = 
  loggedIn => ( 
    loggedIn 
      ? 'Log out' 
      : 'Sign up/in' 
  )

const navigationClasses = 
  isOpen => (
    isOpen
      ? 'siteNavigation'
      : 'siteNavigation closed'
  )

const renderNavButton =
  (navigationOpen) => <NavButton navOpen={navigationOpen}/>
  

const renderNavItems =
  (navigationOpen, loggedIn, closeNav) => (
    <nav className={ navigationClasses(navigationOpen) }>
      <Link onClick={closeNav} href='/index'><a>Home</a></Link>
      <Link onClick={closeNav}href='/about'><a>About</a></Link>
      <Link onClick={closeNav} href='/sign-up'><a>{signUpText(loggedIn)}</a></Link>
      <Link onClick={closeNav} href='/book-demo'><a>Book a demo</a></Link>
    </nav>
  )

const renderNavigation = 
  (navigationOpen, loggedIn, closeNav) => (
    <div>
      { renderNavButton(navigationOpen) }
      { renderNavItems(navigationOpen, loggedIn, closeNav) }
    </div>)

const navigation = 
  ({loggedIn, navigationOpen, closeNav}) => (
    renderNavigation(loggedIn, navigationOpen, closeNav)
  )

export default nextConnect(({loggedIn, navigationOpen}) => ({loggedIn, navigationOpen}), dispatch => bindActionCreators({closeNav}, dispatch))(navigation)