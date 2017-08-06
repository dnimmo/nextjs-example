import ReactDOM from 'react-dom'
import Link from 'next/link'
import Navigation from './navigation'

const header = 
  () => (
    <div>
      <header>
        <Link href='/index'>
          <a className='logo' >
            Logo goes here
          </a>
        </Link>
      </header>
      <Navigation/>
    </div>
  )

export default header