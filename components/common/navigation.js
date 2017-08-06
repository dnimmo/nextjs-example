import Link from 'next/link'
import nextConnect from '../../state/store'

const navigation = 
  ({loggedIn}) => (
    <nav className='siteNavigation'>
      <Link href='/index'><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
      { loggedIn 
        ? <Link href='/sign-up'><a>Log out</a></Link>
        : <Link href='/sign-up'><a>Sign up/in</a></Link>
      }
      <Link href='/book-demo'><a>Book a demo</a></Link>
    </nav>
  )

export default nextConnect(({loggedIn}) => ({loggedIn}))(navigation)