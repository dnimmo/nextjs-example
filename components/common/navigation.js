import Link from 'next/link'
import nextConnect from '../../state/store'

const signUpText = 
  loggedIn => ( 
    loggedIn 
      ? 'Log out' 
      : 'Sign up/in' 
  )

const navigation = 
  ({loggedIn}) => (
    <nav className='siteNavigation'>
      <Link href='/index'><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
      <Link href='/sign-up'><a>{signUpText(loggedIn)}</a></Link>
      <Link href='/book-demo'><a>Book a demo</a></Link>
    </nav>
  )

export default nextConnect(({loggedIn}) => ({loggedIn}))(navigation)